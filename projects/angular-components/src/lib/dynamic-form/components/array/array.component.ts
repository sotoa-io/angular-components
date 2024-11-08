import {ChangeDetectorRef, Component, forwardRef, inject} from "@angular/core";
import {FormArray, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AcArrayConfig} from "../../models/array-config";
import {DynamicFormService} from "../../services/dynamic-form.service";
import {AcDynamicFieldDirective} from "../dynamic-field.directive";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgClass, NgTemplateOutlet} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatError} from "@angular/material/form-field";
import {AbstractControlFieldComponent} from "../abstract-field/abstract-control-field.component";
import {AcFieldConfig, PathFieldMap} from "../../models/field-config";
import {AcTextConfig} from "../../models/text-config";
import * as _ from "lodash";

@Component({
  selector: "ac-array",
  standalone: true,
  imports: [
    forwardRef(() => AcDynamicFieldDirective),
    MatExpansionModule,
    NgClass,
    MatIcon,
    MatButton,
    MatCardModule,
    ReactiveFormsModule,
    MatError,
    NgTemplateOutlet
  ],
  templateUrl: "./array.component.html",
  styleUrls: ["./array.component.scss"]
})
export class AcArrayComponent extends AbstractControlFieldComponent<AcArrayConfig> {
  private dynamicService: DynamicFormService = inject(DynamicFormService);
  private ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  get array() {
    return this.group.controls[this.field.name] as FormArray;
  }

  constructor() {
    super();
  }

  addItem() {
    const i = this.field.instances!.length > 0 ? this.field.instances![this.field.instances!.length - 1].number + 1 : 0;
    const map: PathFieldMap = new Map();
    const fields = _.cloneDeep(this.field.field.fields);
    const grp = this.dynamicService.createGroup(fields, `${this.path}[${i}]`, undefined, null, this.path, i);
    this.field.instances!.push({
      number: i,
      group: grp,
      fields
    });
    this.array.push(grp);
    this.ref.detectChanges();
  }

  deleteItem(index: number, inst: { number: number; group: FormGroup, fields: (AcFieldConfig | AcTextConfig)[] }) {
    this.field.instances!.splice(index, 1);
    for (const key of this.dynamicService.pathFieldMap.keys()) {
      if (key.startsWith(`${this.path}[${inst.number}]`)) {
        this.dynamicFormService.pathFieldMap.delete(key);
      }
    }
    this.array.removeAt(index);
    this.ref.detectChanges();
  }

}
