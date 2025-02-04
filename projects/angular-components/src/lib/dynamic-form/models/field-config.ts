import { AcControlConfig } from "./control-config";
import { AcGroupConfig } from "./group-config";
import { AcArrayConfig } from "./array-config";
import { AcRowConfig } from "./row-config";
import { AcTabsConfig } from "./tabs-config";
import { AcTextConfig } from "./text-config";
import { StepConfig } from "./step-config";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

export type AcFieldConfig = AcControlConfig | AcGroupConfig | AcArrayConfig | AcRowConfig | AcTabsConfig;

export type DynamicFormData = {
  fields: (AcFieldConfig | AcTextConfig)[] | StepConfig[];
  updateOn: UpdateOnType;
  idPathMap: Map<string, string[]>;
  pathFieldConfigMap: Map<string, AcFieldConfig | AcTextConfig | StepConfig>;
  pathControlMap: Map<string, FormControl | FormGroup | FormArray>;
};

export type PathArrayInstance = {
  path: string;
  arrayCode: string;
  arrayInstance: number;
}

export type UpdateOnType = "change" | "blur" | "submit" | undefined;
