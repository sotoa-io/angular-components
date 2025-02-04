import {Component} from '@angular/core';
import {
  AcDynamicFormComponent
} from "../../../../../angular-components/src/lib/dynamic-form/dynamic-form/dynamic-form.component";
import {AcDynamicForm} from "../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [AcDynamicFormComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  /*
  config: AcDynamicForm = {
    fields: [
      {
        id: "level1-condition",
        type: "group",
        hostClassName: "field-condition-form",
        name: "condition",
        label: "Conditions - Niveau 1",
        fields: [
          {
            id: "level1-logic-operator",
            type: "radio",
            name: "operator",
            label: "Opérateur logique",
            options: [
              {value: "AND", label: "ET"},
              {value: "OR", label: "OU"}
            ],
            valueKey: "value",
            labelKey: "label"
          },
          {
            id: "level1-conditions",
            type: "array",
            name: "conditions",
            label: "Liste des conditions",
            itemLabel: "Niveau 1 - Item",
            field: {
              type: "group",
              name: "conditions",
              label: "",
              fields: [
                {
                  type: "radio",
                  name: "type",
                  label: "Type de comparaison",
                  options: [
                    {value: "equation", label: "Equation"},
                    {value: "condition", label: "Nouveau niveau de condition"}
                  ],
                  valueKey: "value",
                  labelKey: "label",
                },
                {
                  type: "group",
                  name: "equation",
                  label: "Equation",
                  fields: [
                    {
                      type: "input",
                      name: "component",
                      label: "Champ de référence"
                    },
                    {
                      id: "level1-expression-operator",
                      type: "select",
                      name: "operator",
                      label: "Opérateur",
                      options: [
                        {value: "EQUALS", label: "Egal"}
                      ],
                      valueKey: "value",
                      labelKey: "label"
                    },
                    {
                      type: "select",
                      name: "compareTo",
                      label: "A comparer avec",
                      options: [
                        {value: "REFERENCE", label: "Un autre champ"},
                        {value: "VALUE", label: "Une valeur"}
                      ],
                      valueKey: "value",
                      labelKey: "label"
                    },
                    {
                      type: "input",
                      name: "value",
                      label: "Référence/Valeur",
                      hostClassName: "flex1"
                    }
                  ]
                },
                {
                  id: "level2-condition",
                  type: "group",
                  name: "condition",
                  label: "Condition - Niveau 2",
                  fields: [
                    {
                      id: "level2-logic-operator",
                      type: "radio",
                      name: "operator",
                      label: "Opérateur logique",
                      options: [
                        {value: "AND", label: "ET"},
                        {value: "OR", label: "OU"}
                      ],
                      valueKey: "value",
                      labelKey: "label"
                    },
                    {
                      id: "level2-conditions",
                      type: "array",
                      name: "conditions",
                      label: "Liste des conditions",
                      itemLabel: "Niveau 2 - Item",
                      field: {
                        type: "group",
                        name: "conditions",
                        label: "",
                        fields: [
                          {
                            type: "input",
                            name: "component",
                            label: "Champ de référence"
                          },
                          {
                            id: "level2-expression-operator",
                            type: "select",
                            name: "operator",
                            label: "Opérateur",
                            options: [
                              {value: "EQUALS", label: "Egal"}
                            ],
                            valueKey: "value",
                            labelKey: "label"
                          },
                          {
                            type: "select",
                            name: "compareTo",
                            label: "A comparer avec",
                            options: [
                              {value: "REFERENCE", label: "Un autre champ"},
                              {value: "VALUE", label: "Une valeur"}
                            ],
                            valueKey: "value",
                            labelKey: "label"
                          },
                          {
                            type: "input",
                            name: "value",
                            label: "Référence/Valeur",
                            hostClassName: "flex1"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
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

   */

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
    buttons: [{
      type: "submit",
      label: "Se connecter",
      matButtonType: 'flat'
    }]
  };
}
