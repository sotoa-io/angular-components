import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AcAffix } from './affix';
import { AbstractControlConfig } from './abstract-control-config';
import {AbstractMatformfieldConfig} from './abstract-matformfield-config';

export interface AcFieldAutocompleteConfig extends AbstractMatformfieldConfig {
  type: 'autocomplete';
  options?: any[];
  asyncOptions?: Observable<any[]>;
  labelKey?: string;
  valueKey?: string;
  matchOption?: boolean;
  externalFilteredOptions?: (value: any, field: AcFieldAutocompleteConfig, group: FormGroup) => Observable<any[]>;
  displayWith?: (value?: any) => string;
}
