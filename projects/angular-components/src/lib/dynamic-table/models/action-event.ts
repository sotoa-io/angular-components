import { AcTableColumn } from "./table-column";

export interface ActionEvent {
  id: string; // L'id du l'action
  column: AcTableColumn; // la colonne où a été déclenchée l'action
  row: any; // la ligne où a été déclenchée l'action
}
