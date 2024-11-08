import { AbstractControlConfig } from './abstract-control-config';

export interface AcFieldFileConfig extends AbstractControlConfig {
  type: 'file';
  multiple?: boolean;
  maxNbRow?: number;
  accept?: string;
  onAddFile?: (file: any) => void; // Permet de définir une méthode qui est appelée à chaque changement de valeur du champ
  onDeleteFile?: (file: any) => void; // Permet de définir une méthode qui est appelée à chaque changement de valeur du champ
}
