import { Component } from '@angular/core';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';

@Component({
  selector: 'app-example-radiobutton',
  standalone: true,
  imports: [AcDynamicFormComponent],
  templateUrl: './example-radiobutton.component.html',
  styleUrl: './example-radiobutton.component.scss'
})
export class ExampleRadiobuttonComponent {

  config: AcDynamicForm = {
    fields: [
      {
        type: 'radio',
        name: 'radio',
        label: 'Radio',
        color: 'warn',
        options: [
          {code: 'Option 1', name: 'Option 1'},
          {code: 'Option 2', name: 'Option 2'},
          {code: 'Option 3', name: 'Option 3'},
        ],
        valueKey: 'code',
        labelKey: 'name'
      },
      {
        type: 'radio',
        name: 'radio2',
        label: 'Radio',
        description: 'description',
        verticalAlign: true,
        options: [
          {code: 'Option 1', name: 'Option 1', inactive: false},
          {code: 'Option 2', name: 'Option 2', inactive: false},
          {code: 'Option 3', name: 'Option 3', inactive: true},
        ],
        valueKey: 'code',
        labelKey: 'name',
        disabledKey: 'inactive'
      },
    ],
  };
}
