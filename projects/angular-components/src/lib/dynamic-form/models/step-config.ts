import { AbstractFieldConfig } from "./abstract-field-config";
import { AcFieldConfig } from "./field-config";
import { AcTextConfig } from "./text-config";

export interface StepConfig extends AbstractFieldConfig {
  type: "step";
  elementClassName?: string | string[];
  disabled?: boolean;
  fields: (AcFieldConfig | AcTextConfig)[];
  errorMessage?: string;
}
