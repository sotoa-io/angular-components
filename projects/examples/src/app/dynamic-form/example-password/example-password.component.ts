import { Component } from '@angular/core';
import {
  AcDynamicForm
} from "../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form";
import {
  AutocompleteAttribute
} from "../../../../../angular-components/src/lib/dynamic-form/models/autocomplete-attribute";
import {Validators} from "@angular/forms";
import {
  AcDynamicFormComponent
} from "../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-example-password',
  standalone: true,
  imports: [
    AcDynamicFormComponent
  ],
  templateUrl: './example-password.component.html',
  styleUrl: './example-password.component.scss'
})
export class ExamplePasswordComponent {
  config: AcDynamicForm = {
    fields: [
      {
        name: 'password',
        type: 'password',
        label: 'Mot de passe',
        minlength: 8,
        maxlength: 20,
        requiresDigit: true,
        requiresUppercase: true,
        requiresLowercase: true,
        requiresSpecialChars: true,
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "required"
          }
        ]
      },
    ],
  };


}
