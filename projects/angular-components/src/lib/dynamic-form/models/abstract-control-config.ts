import {FormGroup} from '@angular/forms';
import {AcValidator} from './validator';
import {AbstractFieldConfig} from './abstract-field-config';
import {DynamicFormData} from "./field-config";

export interface AbstractControlConfig extends AbstractFieldConfig {
  value?: any; // La valeur initiale
  disabled?: boolean; // Permet de définir si le champ est désactivé au moment de l'affichage
  validations?: AcValidator[]; // Permet de définir les validations à effectuer sur ce champ
  onValueChanges?: (value: any, datas: DynamicFormData, group: FormGroup, instancePath?: string) => void; // Permet de définir une méthode qui est appelée à chaque changement de valeur du champ
}
