import { AcTextConfig } from './text-config';
import { AcFieldConfig } from './field-config';
import { AbstractControlConfig } from './abstract-control-config';

export interface AcGroupConfig extends AbstractControlConfig {
  type: 'group';
  fields: (AcFieldConfig | AcTextConfig)[];
  accordion?: boolean;
  opened?: boolean;
  description?: string;
}
