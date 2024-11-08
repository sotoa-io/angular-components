import {AbstractMatformfieldConfig} from './abstract-matformfield-config';
import {Observable} from 'rxjs';

export interface AcFieldSelectConfig extends AbstractMatformfieldConfig {
  type: 'select';
  options: any[] | Observable<any[]>; //Permet de définir les listes des options si synchrone
  multiple?: boolean;
  groupLabelKey?: string; // nom de l'attribut de l'objet groupe pour le libellé du groupe
  groupOptionsKey?: string; // nom de l'attribut de l'objet groupe pour la liste des options du groupe
  labelKey?: string; // nom de l'attribut de l'option pour le libellé de l'option
  valueKey?: string; // nom de l'attribut de l'option qui sera utilisée comme valeur du select. Si non définit, la valeur sera l'objet
  resetOption?: boolean; // Permet d'ajouter une ligne avec la valeur undefined
  resetOptionLabel?: string; // Permet de définir le libellé de la ligne avec la valeur undefined

}
