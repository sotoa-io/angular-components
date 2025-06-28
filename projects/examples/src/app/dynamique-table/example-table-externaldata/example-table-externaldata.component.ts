import {Component} from '@angular/core';
import {AcTableColumn} from "../../../../../angular-components/src/lib/dynamic-table/models/table-column";
import {DatePipe} from "@angular/common";
import {AcTableOptions} from "../../../../../angular-components/src/lib/dynamic-table/models/table-options";
import {
  AcDynamicTableComponent
} from "../../../../../angular-components/src/lib/dynamic-table/dynamic-table/dynamic-table.component";
import {Pagination} from "../../../../../angular-components/src/lib/dynamic-table/models/pagination";
import {PageEvent} from "@angular/material/paginator";
import {Sort} from "@angular/material/sort";

interface Item {
  id: number;
  ordre: number;
  code: string;
  libelle: string;
}

@Component({
    selector: 'app-example-table-externaldata',
    imports: [AcDynamicTableComponent],
    templateUrl: './example-table-externaldata.component.html',
    styleUrl: './example-table-externaldata.component.scss',
    providers: [DatePipe]
})
export class ExampleTableExternaldataComponent {

  columns: AcTableColumn[] = [
    {
      key: 'ordre',
      label: 'Ordre',
      getValue: (element: any) => {
        return (element.ordre < 10 ? '0' : '') + element.ordre;
      },
    },
    {
      key: 'code',
      label: 'Code',
    },
    {
      key: 'libelle',
      label: 'Libellé',
      sortName: 'label'
    }
  ];
  options: AcTableOptions = {
    caption: 'test',
    className: 'example-table'
  };
  rows: any[] = [];
  pagination: Pagination;
  private data!: Item[];

  constructor() {
    this.setData();
    this.pagination = {
      page: {pageIndex: 0, pageSize: 10, length: this.data.length},
      sort: {active: 'ordre', direction: 'asc'},
      pageSizeOptions: [10, 20, 50, 100]
    }
    this.setRows();
  }

  setData() {
    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        id: i,
        ordre: i,
        code: 'Code' + i,
        libelle: 'Libelle' + i,
      });
    }
  }

  setRows() {
    this.rows = this.data.slice(this.pagination.page.pageIndex * this.pagination.page.pageSize, (1 + this.pagination.page.pageIndex) * this.pagination.page.pageSize);
  }

  goToPage($event: PageEvent) {
    this.pagination.page = $event;
    this.setRows();
  }

  sort($event: Sort) {
    this.pagination.sort = $event;
    this.sortData();
    this.setRows();
  }

  sortData() {
    if (this.pagination.sort.active === 'code' && this.pagination.sort.direction === 'desc') {
      this.sortCodeDesc();
    } else if (this.pagination.sort.active === 'code' && this.pagination.sort.direction === 'asc') {
      this.sortCodeAsc();
    } else if (this.pagination.sort.active === 'label' && this.pagination.sort.direction === 'desc') {
      this.sortLibelleDesc();
    } else if (this.pagination.sort.active === 'label' && this.pagination.sort.direction === 'asc') {
      this.sortLibelleAsc();
    } else if (this.pagination.sort.active === 'ordre' && this.pagination.sort.direction === 'desc') {
      this.sortOrdreDesc();
    } else {
      this.sortOrdreAsc();
    }
  }

  public sortOrdreAsc(): void {
    this.data = this.data.sort((a, b) => a.ordre - b.ordre);
  }

  public sortOrdreDesc() {
    this.data = this.data.sort((a, b) => b.ordre - a.ordre);
  }

  public sortCodeAsc(): void {
    this.data = this.data.sort((a, b) => {
      if (a.code < b.code) {
        return -1
      } else if (a.code > b.code) {
        return 1;
      }
      return 0
    });
  }

  public sortCodeDesc() {
    this.data = this.data.sort((a, b) => {
      if (a.code < b.code) {
        return 1
      } else if (a.code > b.code) {
        return -1;
      }
      return 0
    });
  }

  public sortLibelleAsc(): void {
    this.data = this.data.sort((a, b) => {
      if (a.code < b.code) {
        return -1
      } else if (a.code > b.code) {
        return 1;
      }
      return 0
    });
  }

  public sortLibelleDesc() {
    this.data = this.data.sort((a, b) => {
      if (a.code < b.code) {
        return 1
      } else if (a.code > b.code) {
        return -1;
      }
      return 0
    });
  }
}
