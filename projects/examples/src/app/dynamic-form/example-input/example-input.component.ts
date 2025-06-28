import {Component} from '@angular/core';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {MatIconModule} from '@angular/material/icon';
import {
  AutocompleteAttribute
} from '../../../../../angular-components/src/lib/dynamic-form/models/autocomplete-attribute';
import {Validators} from '@angular/forms';

@Component({
    selector: 'app-example-input',
    imports: [AcDynamicFormComponent, MatIconModule],
    templateUrl: './example-input.component.html',
    styleUrl: './example-input.component.scss'
})
export class ExampleInputComponent {
  config: AcDynamicForm = {
    fields: [
      {
        name: 'inputText',
        type: 'input',
        inputType: 'text',
        label: 'Input type text',
        suffixes: [{
          label: '<span class="material-icons">close</span>',
          action: (field, group, formFieldMap) => {
            group.get(field.name)?.setValue(null);
          },
          actionAriaLabel: "Effacer le champ"
        }],
        prefixes: [{
          label: '<span class="material-icons">home</span>'
        }],
        startHint: 'startHint',
        endHint: 'endHint',
        autocomplete: AutocompleteAttribute.Name,
      },
      {
        name: 'passwordInput',
        type: 'input',
        inputType: 'password',
        label: 'Mot de passe',
      },
      {
        name: 'requiredInput',
        type: 'input',
        label: 'Champ obligatoire',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Le champ est obligatoire'
          }
        ]
      },
    ],
  };

}
