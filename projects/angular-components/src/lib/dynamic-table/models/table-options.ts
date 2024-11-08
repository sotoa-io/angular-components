import {SortDirection} from "@angular/material/sort";

export interface AcTableOptions {
  caption: string; // Permet de définir le titre du tableau
  className?: string; // Permet de rajouter une classe au wrapper du tableau

  sorting?: { // Permet de définir un tri des données du tableau (tri interne - pas de requête externe)
    active?: string;
    direction?: SortDirection;
    disabled?: boolean;
    disableClear?: boolean;
    start?: "asc" | "desc";
    sortingDataAccessor?: (data: any, sortHeaderId: string) => string | number;
    ignoreCase?: boolean;
  };

  pagination?: { // Permet de définir une pagination des données du tableau (pagination interne - pas de requête externe)
    pageSize : number;
    pageSizeOptions?: number[];
  }
}
