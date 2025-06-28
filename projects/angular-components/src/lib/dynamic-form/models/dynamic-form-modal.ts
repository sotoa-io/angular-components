import {AcFieldConfig} from './field-config';
import {AcValidator} from './validator';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {AcButton} from "./dynamic-form";
import {AcButtonType, AcMaterialButtonType} from "../../dynamic-button/dynamic-button";

export interface AcDynamicFormModal {
  title: string;
  description?: string;
  fields: AcFieldConfig[];
  initialObject?: any;
  validations?: AcValidator[]; // Permet de définir les validations à effectuer sur le formulaire
  updateOn?: 'change' | 'blur' | 'submit';
  buttons?: AcModalFormButton[];
  className?: {
    form?: string; // Permet de mettre une classe à la balise form
    formContent?: string; // Permet de mettre du style sur la div du contenu du formulaire
    formButtons?: string; // Permet de mettre une classe au groupe de boutons (dynamic-form-footer)
  }
}

export interface AcModalFormButton {
  type: AcButtonType;
  matButtonType?: AcMaterialButtonType;
  matIcon?: string;
  className?: string; // Permet de rajouter une classe sur le bouton
  label?: string; // Définit le libellé du bouton
  title?: string; // Définit le titre du bouton
  ariaLabel?: string; // Définit le aria-label du bouton
  disabledIfFormNoValid?: boolean;
  action?: (form: FormGroup, initialObject: any) => Observable<AcModalFormResponse | boolean>;
}

export interface AcModalFormResponse {
  status: 'OK' | 'ERROR';
  message?: string;
}
