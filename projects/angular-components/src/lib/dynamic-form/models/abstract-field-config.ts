import {AcCondition} from "./condition";

export interface AbstractFieldConfig {
  type: string;
  name: string;
  id?: string; // identifiant unique. Si non renseigné c'est égal au name
  label?: string; // Le libellé du champ
  className?: string | string[]; // Permet de mettre une classe au container du champ
  hostClassName?: string | string[];
  hidden?: boolean; // Permet de cacher le champs
  displayCondition?: AcCondition; // Permet de définir les conditions d'affichage du champ
}
