import { Component } from '@angular/core';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';
import {InputRatingComponent} from './input-rating/input-rating.component';

@Component({
    selector: 'app-example-custom',
    imports: [AcDynamicFormComponent],
    templateUrl: './example-custom.component.html',
    styleUrl: './example-custom.component.scss'
})
export class ExampleCustomComponent {

  config: AcDynamicForm = {
    fields: [
      {
        type: 'customField',
        name: 'customField',
        label: 'customField',
        component: InputRatingComponent,
        onValueChanges: (value, formFieldMap, group, instancePath) => {
          console.log(value);
        }
      },
    ],
  };
}
