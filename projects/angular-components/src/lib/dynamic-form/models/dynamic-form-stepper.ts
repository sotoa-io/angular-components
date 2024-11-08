import {AcValidator} from "./validator";
import {StepConfig} from "./step-config";
import {FormGroup} from "@angular/forms";

export interface AcDynamicFormStepper {
  steps: StepConfig[]; // les étapes du formulaire
  linear?: boolean;
  orientation?: 'horizontal' | 'vertical' | 'responsive';
  responsiveBreakpoint? : string; // A remplir si orientation = responsive, par défaut 800px
  className?: string; // Permet de mettre une classe à la balise form
  contentClassName?: string; // Permet de mettre du style sur la div du contenu d'une étape

  buttons: {
    groupClassName?: string; // Permet de mettre une classe au groupe de boutons d'une étape
    list?: AcStepperFormButton[]
  }

  updateOn?: 'change' | 'blur' | 'submit'; // Définit quand on détecte le changement de valeur
  debounceTime?: number; // définit un temps de latence avant l'envoi des valeurs à formChange
  validations?: AcValidator[]; // Permet de définir les validations à effectuer sur le formulaire
  onValueChanges?: (formGroup: FormGroup, step: StepConfig[]) => void;
}

export interface AcStepperFormButton {
  type: 'button' | 'submit' | 'previous' | 'next';
  disabledIfFormNoValid?: boolean;
  matIcon?: string;
  className?: string; // Permet de rajouter une classe sur le bouton de validation
  label?: string; // Définit le libellé du bouton de validation
  title?: string; // Définit le titre du bouton de validation
  action?: (form: FormGroup) => void;
}
