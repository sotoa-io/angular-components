import {AcAffix} from './affix';
import {AbstractControlConfig} from './abstract-control-config';

export interface AbstractMatformfieldConfig extends AbstractControlConfig {
  suffixes?: AcAffix[];
  prefixes?: AcAffix[];
  startHint?: string;
  endHint?: string;
  placeholder?: string;
}
