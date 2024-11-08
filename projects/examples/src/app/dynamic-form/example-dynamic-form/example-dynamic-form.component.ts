import {Component} from '@angular/core';
import {AcDynamicForm} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form';
import {
  AcDynamicFormComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component';
import {FormGroup, Validators} from '@angular/forms';
import {
  AcExpressionOperatorEnum,
  AcLogicOperatorEnum
} from "../../../../../angular-components/src/lib/dynamic-form/models/condition";

@Component({
  selector: 'app-example-dynamic-form',
  standalone: true,
  imports: [AcDynamicFormComponent],
  templateUrl: './example-dynamic-form.component.html',
  styleUrl: './example-dynamic-form.component.scss'
})
export class ExampleDynamicFormComponent {
  config: AcDynamicForm = {
    fields: [
      {
        type: 'radio',
        name: 'selectObject',
        label: 'Afficher champ ?',
        options: [
          {code: 'OUI', name: 'Oui'},
          {code: 'NON', name: 'Non'},
        ],
        valueKey: 'code',
        labelKey: 'name'
      },
      {
        name: 'inputText',
        type: 'input',
        inputType: 'text',
        label: 'Input type text',
        /*
        displayCondition: {
          type: 'condition',
          items: [
            {
              type: 'expression',
              fieldId: 'selectObject',
              operator: AcExpressionOperatorEnum.EQUALS,
              value: 'OUI'
            }
          ]
        },
         */
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Please enter required field',
            condition: {
              type: 'condition',
              items: [
                {
                  type: 'expression',
                  fieldId: 'selectObject',
                  operator: AcExpressionOperatorEnum.EQUALS,
                  value: 'OUI'
                }
              ]
            }
          }
        ]
      },
      {
        type: 'array',
        name: 'array',
        label: 'Array',
        field: {
          type: 'group',
          name: 'array',
          label: 'Array',
          fields: [
            {
              type: 'radio',
              name: 'arrayRadio',
              label: 'Afficher champ ?',
              options: [
                {code: 'OUI', name: 'Oui'},
                {code: 'NON', name: 'Non'},
              ],
              valueKey: 'code',
              labelKey: 'name'
            },
            {
              type: 'input',
              name: 'arrayInput',
              inputType: 'text',
              label: 'Input type text',
              displayCondition: {
                type: 'condition',
                logicOperator: AcLogicOperatorEnum.AND,
                items: [
                  {
                    type: 'expression',
                    fieldId: 'selectObject',
                    operator: AcExpressionOperatorEnum.EQUALS,
                    value: 'OUI'
                  },
                  {
                    type: 'expression',
                    fieldId: 'arrayRadio',
                    operator: AcExpressionOperatorEnum.EQUALS,
                    value: 'OUI'
                  }
                ]
              },
            }
          ]
        }
      }
    ],
    buttons: {
      list: [
        {
          type: 'button',
          label: 'Button',
          action: (form: FormGroup) => {
            console.log('button', form);
          }
        },
        {
          type: 'submit',
          label: 'Button Submit',
          action: (form: FormGroup) => {
            console.log('submit', form);
          }
        },
        {
          type: 'reset',
          label: 'Button Reset',
          action: (form: FormGroup) => {
            console.log('reset', form);
          }
        }
      ]
    }
  }
}
