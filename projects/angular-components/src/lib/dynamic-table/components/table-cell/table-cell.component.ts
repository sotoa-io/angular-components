import {Component, inject, Input, OnChanges} from "@angular/core";
import {AcTableColumn} from "../../models/table-column";
import {ToolsService} from "../../services/tools.service";
import {CustomCellDirective} from "../custom-cell.directive";
import {DynamicPipe} from "../../dynamic.pipe";
import {AcDynamicButtonComponent} from "../../../dynamic-button/dynamic-button.component";
import {NgClass} from "@angular/common";

@Component({
    selector: "ac-table-cell",
    imports: [CustomCellDirective, DynamicPipe, AcDynamicButtonComponent, NgClass],
    templateUrl: "./table-cell.component.html",
    styleUrls: ["./table-cell.component.scss"]
})
export class AcTableCellComponent implements OnChanges {
  private toolsService: ToolsService = inject(ToolsService);
  @Input() row: any;
  @Input() column!: AcTableColumn;
  value: any;

  ngOnChanges(): void {
    this.value = this.toolsService.getCellValue(this.row, this.column);
  }
}
