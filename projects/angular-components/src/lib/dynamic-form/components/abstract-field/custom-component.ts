import { ControlValueAccessor, FormGroup } from "@angular/forms";
import { AcFieldCustomConfig } from "../../models/field-custom-config";

export class AcCustomComponentField implements ControlValueAccessor {
  field!: AcFieldCustomConfig<any>;
  group!: FormGroup;

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

}
