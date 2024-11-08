import {
  ComponentRef,
  Directive,
  EnvironmentInjector,
  inject,
  Input,
  OnChanges,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {AcTableCell} from '../models/table-cell';
import {AcTableColumn} from '../models/table-column';

@Directive({
  selector: '[acCustomCell]',
  standalone: true,
})
export class CustomCellDirective implements OnChanges, OnInit {
  private container: ViewContainerRef = inject(ViewContainerRef);
  private injector: EnvironmentInjector = inject(EnvironmentInjector);
  @Input()
  column!: AcTableColumn;
  @Input()
  row: any;
  component!: ComponentRef<AcTableCell>;


  ngOnChanges() {
    if (this.component) {
      this.component.instance.row = this.row;
    }
  }

  ngOnInit(): void {
    if (!this.column.component) {
      throw new Error(`Trying to use an empty component`);
    }

    this.component = this.container.createComponent(this.column.component, {
      environmentInjector: this.injector,
    });
    this.component.instance.row = this.row;
    this.component.instance.column = this.column;
  }
}
