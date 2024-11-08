import {AbstractMatformfieldConfig} from './abstract-matformfield-config';

export interface AcFieldTextareaConfig extends AbstractMatformfieldConfig {
  type: 'textarea';
  readonly?: boolean; // Permet de mettre le champ en lecture seule
}
