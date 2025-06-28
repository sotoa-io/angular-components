import {AbstractControlConfig} from './abstract-control-config';

export interface AcFieldRadioButtonConfig extends AbstractControlConfig {
  type: 'radio';
  options: any[];
  description?: string;
  verticalAlign?: boolean;
  labelKey?: string;
  valueKey?: string;
  descriptionKey?: string;
  disabledKey?: string;
  radioButtonClassName?: string;
}
