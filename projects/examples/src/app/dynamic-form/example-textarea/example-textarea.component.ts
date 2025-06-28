import { Component } from '@angular/core';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';

@Component({
    selector: 'app-example-textarea',
    imports: [AcDynamicFormComponent],
    templateUrl: './example-textarea.component.html',
    styleUrl: './example-textarea.component.scss'
})
export class ExampleTextareaComponent {
  config: AcDynamicForm = {
    fields: [
      {
        type: 'textarea',
        name: 'textareaText',
        label: 'Textarea',
        suffixes: [{
          label: '<span class="material-icons">home</span>'
        }],
        prefixes: [{
          label: '<span class="material-icons">home</span>'
        }],
        startHint: 'startHint',
        endHint: 'endHint',
      },
    ],
  };

}
