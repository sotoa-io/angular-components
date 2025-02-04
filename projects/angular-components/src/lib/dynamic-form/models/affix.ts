import {FormGroup} from '@angular/forms';
import {AcFieldConfig, DynamicFormData} from "./field-config";
import {AcMaterialButtonType} from "../../dynamic-button/dynamic-button";

export interface AcAffix {
  label?: string;
  action?: (field: AcFieldConfig, group: FormGroup, datas: DynamicFormData) => void;
  actionAriaLabel?: string;
  matButtonType?: AcMaterialButtonType;
}
