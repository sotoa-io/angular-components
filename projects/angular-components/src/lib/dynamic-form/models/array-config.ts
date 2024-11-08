import {AcGroupConfig} from "./group-config";
import {AbstractControlConfig} from "./abstract-control-config";
import {FormGroup} from "@angular/forms";
import {AcTextConfig} from "./text-config";
import {AcFieldConfig} from './field-config';

export interface AcArrayConfig extends AbstractControlConfig {
  type: "array";
  field: AcGroupConfig;
  itemLabel?: string;
  description?: string;
  accordion?: boolean;
  opened?: boolean;
  elementClassName?: string | string[];
  elementContentClassName?: string | string[];
  minNbRow?: number;
  maxNbRow?: number;
  addButton?: {
    label?: string;
    matIcon?: string;
    title?: string;
  };
  deleteButton?: {
    label?: string;
    matIcon?: string;
    title?: string;
  };


  instances?: { number: number; group: FormGroup, fields: (AcFieldConfig | AcTextConfig)[] }[];
}
