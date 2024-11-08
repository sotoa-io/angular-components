import { AcControlConfig } from "./control-config";
import { AcGroupConfig } from "./group-config";
import { AcArrayConfig } from "./array-config";
import { AcRowConfig } from "./row-config";
import { AcTabsConfig } from "./tabs-config";
import { AcTextConfig } from "./text-config";
import { StepConfig } from "./step-config";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

export type AcFieldConfig = AcControlConfig | AcGroupConfig | AcArrayConfig | AcRowConfig | AcTabsConfig;

export type PathFieldMap = Map<string, FormField>;
export type IdPathMap = Map<string, string | PathArrayInstance[]>;

export type FormField = {
  config: AcFieldConfig | AcTextConfig | StepConfig;
  control: FormControl | FormGroup | FormArray | null;
}

export type PathArrayInstance = {
  path: string;
  arrayCode: string;
  arrayInstance: number;
}

export type UpdateOn = "change" | "blur" | "submit" | undefined;
