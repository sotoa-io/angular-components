import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {
  AcDynamicFormModalComponent
} from '../../../../../angular-components/src/lib/dynamic-form/dynamic-form-modal/dynamic-form-modal.component';
import {
  AcDynamicFormModal
} from '../../../../../angular-components/src/lib/dynamic-form/models/dynamic-form-modal';
import {FormGroup, Validators} from '@angular/forms';
import {of} from 'rxjs';

@Component({
  selector: 'app-example-dynamic-form-modal',
  standalone: true,
  imports: [],
  templateUrl: './example-dynamic-form-modal.component.html',
  styleUrl: './example-dynamic-form-modal.component.scss'
})
export class ExampleDynamicFormModalComponent {
  private readonly dialog: MatDialog = inject(MatDialog);
  private readonly data: AcDynamicFormModal = {
    title: "Titre de la modal",
    description: "Description de la modal",
    buttons: [
      {
        type: 'button',
        label: 'Button',
        action: (form: FormGroup) => {
          console.log('button', form);
          return of(false);
        }
      },
      {
        type: 'submit',
        label: 'Button Submit',
        disabledIfFormNoValid: true,
        action: (form: FormGroup) => {
          console.log('submit', form);
          return of({
            status: 'OK',
            message: 'Enregistrement OK',
          });
        }
      },
      {
        type: 'reset',
        label: 'Button Reset',
      }
    ],
    fields: [
      {
        name: 'inputText',
        type: 'input',
        inputType: 'text',
        label: 'Input type text',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Please enter required field'
          }
        ]
      },
      {
        type: 'select',
        name: 'selectObject',
        label: 'Select d\'une liste d\'objet',
        options: [
          {code: 'Option 1', name: 'Option 1'},
          {code: 'Option 2', name: 'Option 2'},
          {code: 'Option 3', name: 'Option 3'},
        ],
        valueKey: 'code',
        labelKey: 'name'
      },
    ],
  }

  openModal() {
    this.dialog.open(AcDynamicFormModalComponent, {data: this.data, disableClose: true})
  }
}
