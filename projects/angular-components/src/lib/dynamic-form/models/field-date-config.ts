import { FormGroup } from '@angular/forms';
import { AcAffix } from './affix';
import { Moment } from 'moment';
import { AbstractControlConfig } from './abstract-control-config';
import {AbstractMatformfieldConfig} from './abstract-matformfield-config';

export interface AcFieldDateConfig extends AbstractMatformfieldConfig {
  type: 'date';
  readonly?: boolean; // Permet de mettre le champ en lecture seule
  onlyPopup?: boolean;
  format?: string; // default 'DD/MM/YYYY'
  minDate?: Moment;
  maxDate?: Moment;
  filter?: (d: Moment | null, field?: AcFieldDateConfig, group?: FormGroup) => boolean;
  touchUi?: boolean;
}
