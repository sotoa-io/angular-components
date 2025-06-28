import {Component} from '@angular/core';
import {
  AcDynamicFormComponent
} from "../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component";
import {AcDynamicForm} from "../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form";
import {Validators} from "@angular/forms";

@Component({
    selector: 'app-example-login',
    imports: [
        AcDynamicFormComponent
    ],
    templateUrl: './example-login.component.html',
    styleUrl: './example-login.component.scss'
})
export class ExampleLoginComponent {
  /*
  config: AcDynamicForm = {
    fields: [
      {
        type: "input",
        name: "username",
        label: "Login",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Le login est obligatoire"
          }
        ]
      },
      {
        type: "input",
        inputType: "password",
        name: "password",
        label: "Mot de passe",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Le mot de passe est obligatoire"
          }
        ]
      }
    ],
    buttons: [
      {
        type: "submit",
        label: "Mot de passe oublié",
        matButtonType: 'flat',
        className: "flex1"
      },
      {
        type: "submit",
        label: "Se connecter",
        matButtonType: 'flat',
        className: "flex1"
      }
    ]
  };

   */
  config: AcDynamicForm = {
    fields: [
      {
        type: "input",
        name: "email",
        label: "Adresse mail",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "L'adresse mail est obligatoire",
          },
        ],
      },
      {
        type: "checkbox",
        name: "confirmCGV",
        label: 'J\'accepte les <a href="">conditions générales de vente</a>',
        validations: [
          {
            name: "required",
            validator: Validators.requiredTrue,
            message: "Veuillez accepter les conditions.",
          },
        ],
      },
    ],
    buttons: [
      {
        type: "submit",
        label: "Se connecter",
        matButtonType: "flat",
        className: "flex1",
      },
    ],
  };
}
