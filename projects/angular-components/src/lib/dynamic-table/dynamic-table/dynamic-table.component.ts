import {
  AfterViewInit,
  Component,
  computed,
  effect,
  inject,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  Signal,
  ViewChild
} from '@angular/core';
import {AcTableOptions} from '../models/table-options';
import {AcTableColumn} from '../models/table-column';
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatSort, MatSortModule, Sort} from '@angular/material/sort';
import {AcTableCellComponent} from '../components/table-cell/table-cell.component';
import {MatPaginatorIntlFr} from '../services/mat-paginator-intl-fr';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ToolsService} from '../services/tools.service';
import {Pagination} from "../models/pagination";
import {NgClass} from "@angular/common";

@Component({
  selector: 'ac-dynamic-table',
  standalone: true,
  imports: [AcTableCellComponent, MatTableModule, MatSortModule, NgClass, MatPaginatorModule],
  providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlFr}],
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class AcDynamicTableComponent implements AfterViewInit {
  private toolsService: ToolsService = inject(ToolsService);

  options: InputSignal<AcTableOptions> = input.required<AcTableOptions>();
  columns: InputSignal<AcTableColumn[]> = input<AcTableColumn[]>([]);
  rows: InputSignal<any[]> = input<any[]>([]);
  pagination: InputSignal<Pagination | undefined> = input<Pagination>();
  totalElements: Signal<number> = computed(() => this.pagination()?.page.length ?? this.rows().length);
  displayedColumns: Signal<string[]> = computed(() => this.columns().filter((x) => !x.hide).map((x) => x.key));
  pageSizeOptions: Signal<number[]> = computed(() => this.pagination()?.pageSizeOptions ?? this.options().pagination?.pageSizeOptions ?? []);
  goToPage: OutputEmitterRef<PageEvent> = output<PageEvent>();
  sort: OutputEmitterRef<Sort> = output<Sort>();
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  dataSource!: MatTableDataSource<any>;
  pageIndex: number = 0;
  pageSize: number = 20;

  constructor() {
    effect(() => {
      this.setDatasource();
      this.pageIndex = this.pagination()?.page.pageIndex ?? 0;
      this.pageSize = this.pagination()?.page.pageSize ?? this.options().pagination?.pageSize ?? 20;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setDatasource();
    });
  }

  setDatasource() {
    this.dataSource = new MatTableDataSource(this.rows());
    if (this.options() && this.options().sorting) {
      if (this.options().sorting!.sortingDataAccessor) {
        this.dataSource.sortingDataAccessor = this.options().sorting!.sortingDataAccessor!;
      } else {
        this.dataSource.sortingDataAccessor = (data, attribute) => {
          const col = this.columns().filter((x) => x.key === attribute)[0];
          const d = this.toolsService.getCellValue(data, col);
          return d && this.options().sorting!.ignoreCase && typeof d === 'string' ? d.toLowerCase() : d;
        };
      }
      this.dataSource.sort = this.matSort;
      if(this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    }
  }

  onNavigate(page: PageEvent) {
    this.goToPage.emit(page);
  }

  onSort(sort: Sort) {
    this.sort.emit(sort);
  }
}
