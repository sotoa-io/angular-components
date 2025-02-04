import {FormGroup} from "@angular/forms";
import {AcTextConfig} from "./text-config";
import {AcFieldConfig} from "./field-config";

export interface AcField {
  path: string;
  field: AcFieldConfig | AcTextConfig;
  group: FormGroup;
  instancePath?: string;
}
