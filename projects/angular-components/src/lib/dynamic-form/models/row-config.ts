import { AcTextConfig } from './text-config';
import { AcFieldConfig } from './field-config';
import { AbstractFieldConfig } from './abstract-field-config';

export interface AcRowConfig extends AbstractFieldConfig {
  type: 'row';
  fields: (AcFieldConfig | AcTextConfig)[];
}
