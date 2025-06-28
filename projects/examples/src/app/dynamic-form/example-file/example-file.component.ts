import { Component } from '@angular/core';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';

@Component({
    selector: 'app-example-file',
    imports: [AcDynamicFormComponent],
    templateUrl: './example-file.component.html',
    styleUrl: './example-file.component.scss'
})
export class ExampleFileComponent {

  config: AcDynamicForm = {
    fields: [
      {
        type: 'file',
        name: 'file',
        label: 'file',
      },
      {
        type: 'file',
        name: 'filemultiple',
        label: 'file multiple',
        multiple: true
      },
    ],
  };
}
