import {PipeTransform, Type} from '@angular/core';
import {AcTableCell} from './table-cell';
import {AcDynamicButtonType} from "../../dynamic-button/dynamic-button";
import {ThemePalette} from "@angular/material/core";

export interface AcTableColumn {
  key: string; // La clé de la colonne - attribut de l'objet à afficher ex: user.nom => on affiche la valeur de row.user.nom
  label: string; // Le titre de la colonne
  headerClassName?: string; // Permet de rajouter une classe au titre de la colonne
  className?: string; // Permet de rajouter une classe aux cellules (hors titre) de la colonne

  getValue?: (element: any, column?: AcTableColumn) => any; // Méthode pour définir la valeur de la cellule
  pipe?: {
    // Pipe pour formatter la valeur de la cellule
    token?: Type<PipeTransform>; // ex : DatePipe => le pipe doit être préalablement déclaré dans un provider
    args?: any[]; // ex : 'dd/MM/yyyy'
  };

  buttonsGroupClassName?: string; // Permet de rajouter une classe au groupe de boutons de la cellule
  buttons?: { // Permet de rajouter x boutons à la cellule
    matIcon?: string;
    matType?: AcDynamicButtonType;
    label?: string;
    title?: string;
    ariaLabel?: string;
    link?: boolean;
    color?: ThemePalette;
    getLabel?: (element: any, column?: AcTableColumn) => string;
    visible?: (element?: any, column?: AcTableColumn) => boolean;
    disabled?: (element?: any, column?: AcTableColumn) => boolean;
    action: (element: any, column?: AcTableColumn) => void; // Permet de définir l'action réalisée au clic du bouton
  }[];

  component?: Type<AcTableCell>; // Permet de mettre un composant comme contenu de la cellule
  data?: any;

  sortName?: string; // Permet de définir la clé pour le tri. Si non définit, c'est le champ key qui est utilisé
  skipSorting?: boolean; // Annuler le tri sur la colonne

  hide?: boolean;
}
