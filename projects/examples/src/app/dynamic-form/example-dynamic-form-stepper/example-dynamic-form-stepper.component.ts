import {Component} from '@angular/core';
import {AcDynamicFormStepper} from "../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form-stepper";
import {
  AcDynamicFormStepperComponent
} from "../../../../../angular-components/src/lib/dynamic-form/dynamic-form-stepper/dynamic-form-stepper.component";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-example-dynamic-form-stepper',
  standalone: true,
  imports: [
    AcDynamicFormStepperComponent
  ],
  templateUrl: './example-dynamic-form-stepper.component.html',
  styleUrl: './example-dynamic-form-stepper.component.scss'
})
export class ExampleDynamicFormStepperComponent {
  config: AcDynamicFormStepper = {
    linear: false,
    orientation: 'responsive',
    responsiveBreakpoint: '400px',
    steps: [
      {
        type: 'step',
        name: 'step1',
        label: 'step1',
        fields: [
          {
            type: 'input',
            label: 'Input',
            name: 'input',
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'obligatoire',
              }
            ]
          }
        ],
        errorMessage: 'Erreur!!!!'
      },
      {
        type: 'step',
        name: 'step2',
        label: 'step2',
        fields: [
          {
            type: 'input',
            label: 'Input',
            name: 'input'
          }
        ]
      }
    ],
    buttons: {
      list: [
        {
          type: 'previous',
          label: 'Précédent'
        },
        {
          type: 'next',
          label: 'Suivant'
        },
        {
          type: 'submit',
          label: 'Enregistrer'
        }
      ]
    }
  };
}
