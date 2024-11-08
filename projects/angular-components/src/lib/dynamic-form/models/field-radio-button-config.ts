import { Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { AbstractControlConfig } from './abstract-control-config';

export interface AcFieldRadioButtonConfig extends AbstractControlConfig {
  type: 'radio';
  options: any[];
  description?: string;
  verticalAlign?: boolean;
  labelKey?: string;
  valueKey?: string;
  disabledKey?: string;
  color?: ThemePalette;
}
