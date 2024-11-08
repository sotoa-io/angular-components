import {Component, OnInit} from '@angular/core';
import {AcTableCell} from "../../../../../angular-components/src/lib/dynamic-table/models/table-cell";
import {MatIcon} from "@angular/material/icon";
import {AcTableColumn} from "../../../../../angular-components/src/lib/dynamic-table/models/table-column";

@Component({
  selector: 'app-custom-check-cell',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './custom-check-cell.component.html',
  styleUrl: './custom-check-cell.component.scss'
})
export class CustomCheckCellComponent implements OnInit, AcTableCell {
  row: any;
  column?: AcTableColumn;

  ngOnInit() {
    console.log('test', this.column?.data);
  }

}
