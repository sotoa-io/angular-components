import {MatBadgePosition, MatBadgeSize} from '@angular/material/badge';

export interface AcBadgeOptions {
  position?: MatBadgePosition;
  size?: MatBadgeSize;
  description?: string;
  disabled?: boolean;
  hidden?: boolean;
  noOverlap?: boolean;
}

export type AcButtonType = 'submit' | 'reset' | 'button' | 'link';
export type AcMaterialButtonType = 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' | 'menu';

export interface MatIconConfig {
  fontIcon: string;
  fontSet?: string;
  ariaLabel?: string;
}
