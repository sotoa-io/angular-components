import { Component } from '@angular/core';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';

@Component({
  selector: 'app-example-date',
  standalone: true,
  imports: [AcDynamicFormComponent],
  templateUrl: './example-date.component.html',
  styleUrl: './example-date.component.scss'
})
export class ExampleDateComponent {
  config: AcDynamicForm = {
    fields: [
      {
        type: 'date',
        name: 'date',
        label: 'Date',
        format: 'DD/MM/YYYY',
        suffixes: [{
          label: '<span class="material-icons">home</span>'
        }],
        prefixes: [{
          label: '<span class="material-icons">home</span>'
        }],
        startHint: 'startHint',
        endHint: 'endHint',
        onValueChanges: (value, formFieldMap, group, instancePath) => {
          console.log(value);
        }
      },
    ],
  };

}
