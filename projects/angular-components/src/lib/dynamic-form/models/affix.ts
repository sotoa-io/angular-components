import {FormGroup} from '@angular/forms';
import { AcFieldConfig, PathFieldMap } from "./field-config";
import {AcTextConfig} from './text-config';
import {AcDynamicButtonType} from "../../dynamic-button/dynamic-button";

export interface AcAffix {
    label?: string;
    action?: (field: AcFieldConfig, group: FormGroup, formFieldMap: PathFieldMap) => void;
    actionAriaLabel?: string;
    matButtonType?: AcDynamicButtonType;
}
