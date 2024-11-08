import { AbstractFieldConfig } from './abstract-field-config';

export interface AcTextConfig extends AbstractFieldConfig {
  type: 'text';
  description?: string;
}
