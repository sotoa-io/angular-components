import { AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import {AcCondition} from "./condition";

export interface AcValidator {
  name: string;
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
  message: string;
  condition?: AcCondition;
}
