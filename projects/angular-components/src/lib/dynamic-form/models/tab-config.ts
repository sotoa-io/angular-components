import { AcGroupConfig } from './group-config';
import { AbstractFieldConfig } from './abstract-field-config';

export interface TabConfig extends AbstractFieldConfig {
  elementClassName?: string | string[];
  disabled?: boolean;
  field: AcGroupConfig;
}
