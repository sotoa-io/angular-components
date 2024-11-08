import { TabConfig } from './tab-config';
import { AbstractFieldConfig } from './abstract-field-config';

export interface AcTabsConfig extends AbstractFieldConfig {
  type: 'tabs';
  elementClassName?: string | string[];
  tabs: TabConfig[];
}
