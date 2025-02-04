import {AcTextConfig} from './text-config';
import {AcFieldConfig} from './field-config';
import {AcValidator} from './validator';
import {FormGroup} from '@angular/forms';
import {AcButtonType, AcMaterialButtonType} from "../../dynamic-button/dynamic-button";

export interface AcDynamicForm {
  fields: (AcFieldConfig | AcTextConfig)[]; // les champs du formulaire - visibles dans dynamic-form-content
  buttons?: AcButton[];
  className?: {
    form?: string; // Permet de mettre une classe à la balise form
    formContent?: string; // Permet de mettre du style sur la div du contenu du formulaire
    formButtons?: string; // Permet de mettre une classe au groupe de boutons (dynamic-form-footer)
  }
  updateOn?: 'change' | 'blur' | 'submit'; // Définit quand on détecte le changement de valeur
  debounceTime?: number; // S'il n'y a pas de bouton de validation, définit un temps de latence avant l'envoi des valeurs
  validations?: AcValidator[]; // Permet de définir les validations à effectuer sur le formulaire
}


export interface AcButton {
  type: AcButtonType;
  matButtonType?: AcMaterialButtonType;
  matIcon?: string;
  className?: string; // Permet de rajouter une classe sur le bouton
  label?: string; // Définit le libellé du bouton
  title?: string; // Définit le titre du bouton
  ariaLabel?: string; // Définit le aria-label du bouton
  disabledIfFormNoValid?: boolean;
  action?: (form: FormGroup) => void;
}
