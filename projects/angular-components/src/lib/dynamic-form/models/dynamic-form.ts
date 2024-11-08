import {AcTextConfig} from './text-config';
import {AcFieldConfig} from './field-config';
import {AcValidator} from './validator';
import {FormGroup} from '@angular/forms';

export interface AcDynamicForm {
  fields: (AcFieldConfig | AcTextConfig)[]; // les champs du formulaire - visibles dans dynamic-form-content
  className?: string; // Permet de mettre une classe à la balise form
  contentClassName?: string; // Permet de mettre du style sur la div du contenu du formulaire

  buttons?: {
    groupClassName?: string; // Permet de mettre une classe au groupe de boutons (dynamic-form-footer)
    list?: AcButton[]
  }
  updateOn?: 'change' | 'blur' | 'submit'; // Définit quand on détecte le changement de valeur
  debounceTime?: number; // S'il n'y a pas de bouton de validation, définit un temps de latence avant l'envoi des valeurs
  validations?: AcValidator[]; // Permet de définir les validations à effectuer sur le formulaire
}


export interface AcButton {
  type: 'button' | 'submit' | 'reset';
  disabledIfFormNoValid?: boolean;
  matIcon?: string;
  className?: string; // Permet de rajouter une classe sur le bouton de validation
  label?: string; // Définit le libellé du bouton de validation
  title?: string; // Définit le titre du bouton de validation
  action?: (form: FormGroup) => void;
}
