import {ThemePalette} from '@angular/material/core';
import {MatBadgePosition, MatBadgeSize} from '@angular/material/badge';

export interface AcBadgeOptions {
  position?: MatBadgePosition;
  color?: ThemePalette;
  size?: MatBadgeSize;
  description?: string;
  disabled?: boolean;
  hidden?: boolean;
  noOverlap?: boolean;
}

export type AcDynamicButtonType = 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' | 'menu';

export interface MatIconConfig {
  fontIcon: string;
  fontSet?: string;
  ariaLabel?: string;
}
