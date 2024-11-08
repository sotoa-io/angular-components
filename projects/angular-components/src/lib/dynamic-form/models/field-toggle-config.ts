import { AbstractControlConfig } from './abstract-control-config';

export interface AcFieldToggleConfig extends AbstractControlConfig {
  type: 'toggle';
  labelPosition?: 'before' | 'after'; // Place le label à la position demandée par défaut positionne le label à droite
}
