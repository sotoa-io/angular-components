import { Injectable } from '@angular/core';
import { AcTableColumn } from '../models/table-column';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {

  getCellValue(row: any, column: AcTableColumn): any {
    if (!column || !row) {
      return '';
    } else if (column.getValue) {
      return column.getValue(row, column);
    } else if (column.key) {
      let value = row;
      for (const key of column.key.split('.')) {
        if (value) {
          value = value[key];
        }
      }
      return value;
    } else {
      return '';
    }
  }
}
