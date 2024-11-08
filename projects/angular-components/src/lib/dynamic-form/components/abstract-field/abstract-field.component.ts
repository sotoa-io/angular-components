import {Component, inject} from '@angular/core';
import {AcFieldConfig} from "../../models/field-config";
import {AbstractControl, FormGroup, Validators} from '@angular/forms';
import {AbstractFieldConfig} from '../../models/abstract-field-config';
import {DynamicFormService} from "../../services/dynamic-form.service";
import {AcTextConfig} from "../../models/text-config";

@Component({standalone: true, template: ''})
export class AbstractFieldComponent<T extends AbstractFieldConfig> {
  path!: string;
  field!: T;
  group!: FormGroup;
  instancePath?: string;
  protected dynamicFormService: DynamicFormService = inject(DynamicFormService);

  get control(): AbstractControl<any, any> | null {
    return this.group && this.field && this.field.name ? this.group.get(this.field.name) : null;
  }

  get required(): boolean | undefined {
    return this.group.get(this.field.name)?.hasValidator(Validators.required);
  }
}
