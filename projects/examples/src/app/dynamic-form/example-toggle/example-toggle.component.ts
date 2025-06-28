import { Component } from '@angular/core';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';

@Component({
    selector: 'app-example-toggle',
    imports: [AcDynamicFormComponent],
    templateUrl: './example-toggle.component.html',
    styleUrl: './example-toggle.component.scss'
})
export class ExampleToggleComponent {

  config: AcDynamicForm = {
    fields: [
      {
        type: 'toggle',
        name: 'toggle',
        label: 'Toggle',
        labelPosition: 'after'
      },
      {
        type: 'toggle',
        name: 'toggle2',
        label: 'Toggle',
        labelPosition: 'before'
      },
    ],
  };
}
