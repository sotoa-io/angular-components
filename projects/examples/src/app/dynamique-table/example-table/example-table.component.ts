import {Component, OnInit} from '@angular/core';
import {
  AcDynamicTableComponent
} from "../../../../../angular-components/src/lib/dynamic-table/dynamic-table/dynamic-table.component";
import {DatePipe} from "@angular/common";
import {AcTableOptions} from "../../../../../angular-components/src/lib/dynamic-table/models/table-options";
import {AcTableColumn} from "../../../../../angular-components/src/lib/dynamic-table/models/table-column";
import {CustomCheckCellComponent} from "../custom-check-cell/custom-check-cell.component";


@Component({
    selector: 'app-example-table',
    imports: [AcDynamicTableComponent],
    templateUrl: './example-table.component.html',
    styleUrl: './example-table.component.scss',
    providers: [DatePipe]
})
export class ExampleTableComponent implements OnInit {

  types = [{id: 1, label: 'Type1'}, {id: 2, label: 'Type2'}, {id: 3, label: 'Type3'}];
  columns: AcTableColumn[] = [
    {
      key: 'ordre',
      label: 'Ordre',
      getValue: (element: any) => {
        return (element.ordre % 2 === 0 ? 'a°' : 'N° ') + element.ordre;
      },
    },
    {
      key: 'code',
      label: 'Code',
    },
    {
      key: 'libelle',
      label: 'Libellé',
      hide: true
    },
    {
      key: 'type',
      label: 'Type',
      getValue: (element: any) => {
        return element.type.label;
      },
    },
    {
      key: 'date',
      label: 'Date',
      pipe: {
        token: DatePipe,
        args: ['dd/MM/yyyy']
      },
    },
    {
      key: 'active',
      label: 'Active',
      component: CustomCheckCellComponent,
      data: 'custom component data test'
    },
    {
      key: 'actions',
      label: 'Actions',
      skipSorting: true,
      buttons: [
        {
          label: 'Test',
          matType: 'raised',
          visible: (element?: any, column?: AcTableColumn) => {
            return element.active
          },
          action: (element: any, column?: AcTableColumn) => {
            console.log('Test');
          }
        }
      ]
    }
  ];
  options: AcTableOptions = {
    caption: 'test',
    className: 'example-table',

    sorting: {
      active: 'ordre',
      direction: 'asc',
      disableClear: true,
      start: "asc",
      ignoreCase: true
    },

    pagination: {
      pageSize: 10,
      pageSizeOptions: [10, 20, 50, 100]
    }
  };
  rows: any[] = [];

  ngOnInit(): void {
    this.setRows();
  }

  setRows() {
    const rows = [];
    for (let i = 0; i < 100; i++) {
      rows.push({
        id: i,
        ordre: i,
        code: (i % 2 === 0 ? 'C' : 'c') + 'ode' + i,
        type: (i % 2 === 0 ? this.types[0] : this.types[1]),
        libelle: 'libelle ' + i,
        active: i % 10 === 0,
        date: new Date()
      });
    }
    this.rows = rows;
  }

}
