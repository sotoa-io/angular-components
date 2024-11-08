import {AcFieldConfig} from './field-config';
import {AcValidator} from './validator';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

export interface AcDynamicFormModal {
  title: string;
  description?: string;
  fields: AcFieldConfig[];
  initialObject?: any;
  validations?: AcValidator[]; // Permet de définir les validations à effectuer sur le formulaire
  updateOn?: 'change' | 'blur' | 'submit';
  buttons: {
    groupClassName?: string; // Permet de mettre une classe au groupe de boutons (dynamic-form-footer)
    list?: AcModalFormButton[]
  }
}

export interface AcModalFormButton {
  type: 'button' | 'submit' | 'reset';
  disabledIfFormNoValid?: boolean;
  matIcon?: string;
  className?: string; // Permet de rajouter une classe sur le bouton de validation
  label?: string; // Définit le libellé du bouton de validation
  title?: string; // Définit le titre du bouton de validation
  action?: (form: FormGroup, initialObject: any) => Observable<AcModalFormResponse | boolean>;
}

export interface AcModalFormResponse {
  status: 'OK' | 'ERROR';
  message?: string;
}
