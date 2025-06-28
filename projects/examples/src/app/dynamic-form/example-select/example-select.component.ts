import {Component} from '@angular/core';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {of} from 'rxjs';

@Component({
    selector: 'app-example-select',
    imports: [AcDynamicFormComponent],
    templateUrl: './example-select.component.html',
    styleUrl: './example-select.component.scss'
})
export class ExampleSelectComponent {
  config: AcDynamicForm = {
    fields: [
      {
        type: 'select',
        name: 'selectSimple',
        label: 'Select simple',
        options: ["Option 1", "Option 2", "Option 3"],
        suffixes: [{
          label: '<span class="material-icons">home</span>'
        }],
        prefixes: [{
          label: '<span class="material-icons">home</span>'
        }],
        startHint: 'startHint',
        endHint: 'endHint',
      },
      {
        type: 'select',
        name: 'selectObject',
        label: 'Select d\'une liste d\'objet',
        options: [
          {code: 'Option 1', name: 'Option 1'},
          {code: 'Option 2', name: 'Option 2'},
          {code: 'Option 3', name: 'Option 3'},
        ],
        valueKey: 'code',
        labelKey: 'name'
      },
      {
        type: 'select',
        name: 'selectMultipleObject',
        multiple: true,
        label: 'Select multiple d\'une liste d\'objet',
        options: [
          {code: 'Option 1', name: 'Option 1'},
          {code: 'Option 2', name: 'Option 2'},
          {code: 'Option 3', name: 'Option 3'},
        ],
        valueKey: 'code',
        labelKey: 'name'
      },
      {
        type: 'select',
        name: 'selectObjectGroup',
        label: 'Select d\'une liste groupée d\'objet',
        options: [
          {
            name: 'Catégorie 1', options: [
              {code: 'Option 1', name: 'Option 1'},
              {code: 'Option 2', name: 'Option 2'},
            ]
          },
          {
            name: 'Catégorie 2', options: [
              {code: 'Option 3', name: 'Option 3'},
              {code: 'Option 4', name: 'Option 4'},
            ]
          },
        ],
        valueKey: 'code',
        labelKey: 'name',
        groupLabelKey: 'name',
        groupOptionsKey: 'options',
      },
      {
        type: 'select',
        name: 'selectMultipleObjectGroup',
        multiple: true,
        label: 'Select multiple d\'une liste groupée d\'objet',
        options: [
          {
            name: 'Catégorie 1', options: [
              {code: 'Option 1', name: 'Option 1'},
              {code: 'Option 2', name: 'Option 2'},
            ]
          },
          {
            name: 'Catégorie 2', options: [
              {code: 'Option 3', name: 'Option 3'},
              {code: 'Option 4', name: 'Option 4'},
            ]
          },
        ],
        valueKey: 'code',
        labelKey: 'name',
        groupLabelKey: 'name',
        groupOptionsKey: 'options',
      },
      {
        type: 'select',
        name: 'selectSimpleAsync',
        label: 'Select simple asynchrone',
        options: of(["Option 1", "Option 2", "Option 3"]),
        startHint: 'startHint',
        endHint: 'endHint',
      },
      {
        type: 'select',
        name: 'selectObjectAsync',
        label: 'Select asynchrone d\'une liste d\'objet',
        options: of([
          {code: 'Option 1', name: 'Option 1'},
          {code: 'Option 2', name: 'Option 2'},
          {code: 'Option 3', name: 'Option 3'},
        ]),
        valueKey: 'code',
        labelKey: 'name'
      },
      {
        type: 'select',
        name: 'selectMultipleAsync',
        multiple: true,
        label: 'Select multiple asynchrone d\'une liste d\'objet',
        options: of([
          {code: 'Option 1', name: 'Option 1'},
          {code: 'Option 2', name: 'Option 2'},
          {code: 'Option 3', name: 'Option 3'},
        ]),
        valueKey: 'code',
        labelKey: 'name'
      },
      {
        type: 'select',
        name: 'selectAsyncGroup',
        label: 'Select asynchrone d\'une liste groupée d\'objet',
        options: of([
          {
            name: 'Catégorie 1', options: [
              {code: 'Option 1', name: 'Option 1'},
              {code: 'Option 2', name: 'Option 2'},
            ]
          },
          {
            name: 'Catégorie 2', options: [
              {code: 'Option 3', name: 'Option 3'},
              {code: 'Option 4', name: 'Option 4'},
            ]
          },
        ]),
        valueKey: 'code',
        labelKey: 'name',
        groupLabelKey: 'name',
        groupOptionsKey: 'options',
      },
      {
        type: 'select',
        name: 'selectAsyncMultipleGroup',
        multiple: true,
        label: 'Select multiple asynchrone d\'une liste groupée d\'objet',
        options: of([
          {
            name: 'Catégorie 1', options: [
              {code: 'Option 1', name: 'Option 1'},
              {code: 'Option 2', name: 'Option 2'},
            ]
          },
          {
            name: 'Catégorie 2', options: [
              {code: 'Option 3', name: 'Option 3'},
              {code: 'Option 4', name: 'Option 4'},
            ]
          },
        ]),
        valueKey: 'code',
        labelKey: 'name',
        groupLabelKey: 'name',
        groupOptionsKey: 'options',
      },
    ],
  };

}
