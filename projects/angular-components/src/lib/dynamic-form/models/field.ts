import { FormGroup } from "@angular/forms";
import { AcTextConfig } from "./text-config";
import { AcFieldConfig, PathFieldMap } from "./field-config";
import {input, InputSignal} from "@angular/core";

export interface AcField {
  path: string;
  field: AcFieldConfig | AcTextConfig;
  group: FormGroup;
  instancePath?: string;
}
