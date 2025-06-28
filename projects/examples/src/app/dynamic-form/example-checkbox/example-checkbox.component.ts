import {Component} from '@angular/core';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';

@Component({
    selector: 'app-example-checkbox',
    imports: [AcDynamicFormComponent],
    templateUrl: './example-checkbox.component.html',
    styleUrl: './example-checkbox.component.scss'
})
export class ExampleCheckboxComponent {
  config: AcDynamicForm = {
    fields: [
      {
        type: 'checkbox',
        name: 'checkbox',
        label: 'Checkbox',
      },
      {
        type: 'checkbox',
        name: 'checkboxRouter',
        label: 'Checkbox <a href="/">Accueil</a>',
      },
    ],
  };
}
