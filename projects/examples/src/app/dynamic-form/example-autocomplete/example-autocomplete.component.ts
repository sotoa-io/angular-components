import { Component } from '@angular/core';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';
import {of} from 'rxjs';

@Component({
    selector: 'app-example-autocomplete',
    imports: [AcDynamicFormComponent],
    templateUrl: './example-autocomplete.component.html',
    styleUrl: './example-autocomplete.component.scss'
})
export class ExampleAutocompleteComponent {
  config: AcDynamicForm = {
    fields: [
      {
        type: 'autocomplete',
        name: 'autocomplete',
        label: 'Autocomplete',
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
    ],
  };

}
