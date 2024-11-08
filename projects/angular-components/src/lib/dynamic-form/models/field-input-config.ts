import {AutocompleteAttribute} from './autocomplete-attribute';
import {AbstractMatformfieldConfig} from './abstract-matformfield-config';

export interface AcFieldInputConfig extends AbstractMatformfieldConfig {
  type: 'input';
  inputType?: string; // Permet de définir le type d'input : text, number, date, ...
  autocomplete?: AutocompleteAttribute; // Permet de définir le statut autocomplete du champ
  readonly?: boolean; // Permet de mettre le champ en lecture seule
  maxlength?: number;
}
