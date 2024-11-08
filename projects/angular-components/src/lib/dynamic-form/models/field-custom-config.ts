import { Type } from '@angular/core';
import { AcCustomComponentField } from '../components/abstract-field/custom-component';
import { AbstractControlConfig } from './abstract-control-config';

export interface AcFieldCustomConfig<T> extends AbstractControlConfig {
  type: 'customField';
  component: Type<AcCustomComponentField>;
  data?: T;
}
