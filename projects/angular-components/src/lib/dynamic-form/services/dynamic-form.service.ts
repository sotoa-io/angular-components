import {DestroyRef, inject, Injectable} from "@angular/core";
import {AbstractControlOptions, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

import {AcControlConfig} from "../models/control-config";
import {AcValidator} from "../models/validator";
import {AcTextConfig} from "../models/text-config";
import {AcGroupConfig} from "../models/group-config";
import {AcFieldConfig, DynamicFormData, UpdateOnType} from "../models/field-config";
import {AcArrayConfig} from "../models/array-config";
import {StepConfig} from "../models/step-config";
import * as _ from "lodash-es";
import {AcCondition} from "../models/condition";
import {ConditionsService} from "./conditions.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: null
})
export class DynamicFormService {
  private fb: FormBuilder = inject(FormBuilder);
  private conditionsService: ConditionsService = inject(ConditionsService);
  private destroyRef = inject(DestroyRef);
  private separator: string = ".";
  data?: DynamicFormData;
  form?: FormGroup;
  displayConditions: { fieldId: string; condition: AcCondition }[] = [];
  validationConditions: { fieldId: string; validation: AcValidator }[] = [];

  createForm(
    fields: (AcFieldConfig | AcTextConfig)[],
    validations: AcValidator[] | undefined,
    updateOn: UpdateOnType,
    initialValues: any
  ): void {
    this.data = {
      fields,
      updateOn,
      idPathMap: new Map(),
      pathFieldConfigMap: new Map(),
      pathControlMap: new Map(),
    };
    this.form = this.createGroup(fields, null, initialValues);
    if (validations) {
      for (const valid of validations) {
        if (valid.validator) {
          this.form.addValidators(valid.validator);
        }
      }
    }
    this.setCondition();
  }

  createFormStepper(
    steps: StepConfig[],
    validations: AcValidator[] | undefined,
    updateOn: UpdateOnType,
    initialValues: any
  ): void {
    this.data = {
      fields: steps,
      updateOn,
      idPathMap: new Map(),
      pathFieldConfigMap: new Map(),
      pathControlMap: new Map(),
    };
    const config: AbstractControlOptions = updateOn ? {updateOn} : {updateOn: "change"};
    this.form = this.fb.group({}, config);
    steps.forEach((step) => {
      this.form!.addControl(step.name, this.createGroup(step.fields, null, initialValues));
    });
    if (validations) {
      for (const valid of validations) {
        if (valid.validator) {
          this.form.addValidators(valid.validator);
        }
      }
    }
    this.setCondition();
  }

  setCondition() {
    if (this.displayConditions.length > 0 || this.validationConditions.length > 0) {
      this.conditionsService.checkDisplayConditions(this.displayConditions, this.data!);
      this.conditionsService.checkValidationConditions(this.validationConditions, this.data!);
      this.form!.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        if (this.displayConditions.length > 0) {
          this.conditionsService.checkDisplayConditions(this.displayConditions, this.data!);
        }
        if (this.validationConditions.length > 0) {
          this.conditionsService.checkValidationConditions(this.validationConditions, this.data!);
        }
      });
    }
  }

  createGroup(
    fields: (AcFieldConfig | AcTextConfig)[],
    parentPath: string | null,
    initialValues: any
  ) {
    const config: AbstractControlOptions = {updateOn: this.data?.updateOn ?? "change"};
    const group = this.fb.group({}, config);
    fields.forEach((config) => {
      this.treatField(config, group, parentPath, initialValues);
    });
    return group;
  }

  treatField(
    config: AcFieldConfig | AcTextConfig,
    group: FormGroup,
    parentPath: string | null,
    initialValues: any
  ) {
    const path = (parentPath ? parentPath + this.separator : "") + config.name;
    if (!config.id) {
      config.id = config.name;
    }
    if (config.displayCondition) {
      this.displayConditions.push({
        fieldId: config.id,
        condition: config.displayCondition
      });
    }
    if (config.type !== "text" && config.type !== "row" && config.type !== "tabs" && config.validations) {
      config.validations.forEach(val => {
        if (val.condition) {
          this.validationConditions.push({
            fieldId: config.id!,
            validation: val
          });
        }
      })
    }
    if (config.type === "text") {
      this.setFormFieldMapItem(path, config, null);
    } else if (config.type === "group") {
      group.addControl(config.name, this.createGroupField(config, parentPath, initialValues));
    } else if (config.type === "array") {
      group.addControl(config.name, this.createArray(config, parentPath, initialValues));
    } else if (config.type === "row") {
      this.setFormFieldMapItem(path, config, null);
      config.fields.forEach((child) => {
        this.treatField(child, group, parentPath, initialValues);
      });
    } else if (config.type === "tabs") {
      const control = this.createGroup(
        config.tabs.map((x) => x.field),
        parentPath,
        initialValues ? initialValues[config.name] : null
      );
      group.addControl(config.name, control);
      this.setFormFieldMapItem(path, config, control);
    } else {
      const control = this.createControl(config, initialValues);
      this.setFormFieldMapItem(path, config, control);
      group.addControl(config.name, control);
    }
  }

  createGroupField(
    groupConfig: AcGroupConfig,
    parentPath: string | null,
    initialValues: any
  ) {
    const path = (parentPath ? parentPath + this.separator : "") + groupConfig.name;
    const g: FormGroup = this.createGroup(groupConfig.fields, path, initialValues ? initialValues[groupConfig.name] : null);
    if (groupConfig.validations) {
      const val = groupConfig.validations.filter((x: AcValidator) => x.validator).map((x: AcValidator) => x.validator);
      if (val) {
        // @ts-ignore
        g.addValidators(val);
      }

      const asyncVal = groupConfig.validations.filter((x: AcValidator) => x.asyncValidator).map((x: AcValidator) => x.asyncValidator);
      if (asyncVal) {
        // @ts-ignore
        g.addAsyncValidators(asyncVal);
      }
    }
    this.setFormFieldMapItem(path, groupConfig, g);
    return g;
  }

  createArrayInstance(arrayConfig: AcArrayConfig, arrayPath: string, instanceNumber: number, initialValues: any): FormGroup {
    const fields = _.cloneDeep(arrayConfig.field.fields);
    const grp = this.createGroup(fields, `${arrayPath}[${instanceNumber}]`, initialValues);
    if (!arrayConfig.instances) {
      arrayConfig.instances = [];
    }
    arrayConfig.instances.push({
      number: instanceNumber,
      group: grp,
      fields,
    });
    return grp;
  }

  createArray(
    arrayConfig: AcArrayConfig,
    parentPath: string | null,
    initialValues: any
  ): FormArray {
    const path = (parentPath ? parentPath + this.separator : "") + arrayConfig.name;
    arrayConfig.instances = [];
    const list: FormGroup[] = [];
    let value = arrayConfig.value;
    if (initialValues && Object.keys(initialValues).indexOf(arrayConfig.name) !== -1) {
      value = initialValues[arrayConfig.name];
    }
    let i = 0;
    if (value) {
      for (const item of value) {
        list.push(this.createArrayInstance(arrayConfig, path, i, item));
        i++;
      }
    }
    if (arrayConfig.minNbRow && arrayConfig.minNbRow > list.length) {
      while (arrayConfig.minNbRow > list.length) {
        list.push(this.createArrayInstance(arrayConfig, path, i, null));
        i++;
      }
    }

    const formArray: FormArray = this.fb.array(list);
    if (arrayConfig.validations) {
      const val = arrayConfig.validations.filter((x: AcValidator) => x.validator).map((x: AcValidator) => x.validator);
      if (val) {
        // @ts-ignore
        formArray.addValidators(val);
      }

      const asyncVal = arrayConfig.validations.filter((x: AcValidator) => x.asyncValidator).map((x: AcValidator) => x.asyncValidator);
      if (asyncVal) {
        // @ts-ignore
        formArray.addAsyncValidators(asyncVal);
      }
    }
    this.setFormFieldMapItem(path, arrayConfig, formArray);
    return formArray;
  }

  setFormFieldMapItem(
    path: string,
    config: AcFieldConfig | AcTextConfig | StepConfig,
    control: FormControl | FormGroup | FormArray | null
  ) {
    if (control) {
      this.data!.pathControlMap.set(path, control);
    }
    this.data!.pathFieldConfigMap.set(path, config);
    if (!this.data!.idPathMap.get(config.id!)) {
      this.data!.idPathMap.set(config.id!, []);
    }
    this.data!.idPathMap.get(config.id!)?.push(path);
  }

  createControl(config: AcControlConfig, initialValues: any) {
    let {disabled, validations, value} = config;
    if (initialValues && Object.keys(initialValues).indexOf(config.name) !== -1) {
      value = initialValues[config.name];
    }
    if (value === undefined) {
      value = null;
    }
    const control = this.fb.control({disabled, value});
    if (validations) {
      const val = validations.filter((x: AcValidator) => x.validator).map((x: AcValidator) => x.validator);
      if (val) {
        // @ts-ignore
        control.addValidators(val);
      }

      const asyncVal = validations.filter((x: AcValidator) => x.asyncValidator).map((x: AcValidator) => x.asyncValidator);
      if (asyncVal) {
        // @ts-ignore
        control.addAsyncValidators(asyncVal);
      }
    }
    return control;
  }

}
