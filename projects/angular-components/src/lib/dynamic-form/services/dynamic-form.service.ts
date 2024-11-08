import {DestroyRef, inject, Injectable} from "@angular/core";
import {AbstractControlOptions, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

import {AcControlConfig} from "../models/control-config";
import {AcValidator} from "../models/validator";
import {AcTextConfig} from "../models/text-config";
import {AcGroupConfig} from "../models/group-config";
import {AcFieldConfig, IdPathMap, PathArrayInstance, PathFieldMap, UpdateOn} from "../models/field-config";
import {AcArrayConfig} from "../models/array-config";
import {AcRowConfig} from "../models/row-config";
import {StepConfig} from "../models/step-config";
import * as _ from "lodash";
import {AcCondition} from "../models/condition";
import {ConditionsService} from "./conditions.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {isArray} from "lodash";

@Injectable({
  providedIn: null
})
export class DynamicFormService {
  private fb: FormBuilder = inject(FormBuilder);
  private conditionsService: ConditionsService = inject(ConditionsService);
  private destroyRef = inject(DestroyRef);
  private separator: string = ".";
  pathFieldMap: PathFieldMap = new Map();
  idPathMap: IdPathMap = new Map();
  displayConditions: { fieldId: string; condition: AcCondition }[] = [];
  validationConditions: { fieldId: string; validation: AcValidator }[] = [];
  form?: FormGroup;

  createForm(
    fields: (AcFieldConfig | AcTextConfig)[],
    validations: AcValidator[] | undefined,
    updateOn: UpdateOn,
    initialValues: any
  ): void {
    this.pathFieldMap = new Map();
    this.form = this.createGroup(fields, null, updateOn, initialValues, null, null);
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
    updateOn: UpdateOn,
    initialValues: any
  ): void {
    this.pathFieldMap = new Map();
    const config: AbstractControlOptions = updateOn ? {updateOn} : {updateOn: "change"};
    this.form = this.fb.group({}, config);
    steps.forEach((step) => {
      this.form!.addControl(step.name, this.createGroup(step.fields, null, updateOn, initialValues, null, null));
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
      this.conditionsService.checkDisplayConditions(this.displayConditions, this.pathFieldMap, this.idPathMap);
      this.conditionsService.checkValidationConditions(this.validationConditions, this.pathFieldMap, this.idPathMap);
      this.form!.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        if (this.displayConditions.length > 0) {
          this.conditionsService.checkDisplayConditions(this.displayConditions, this.pathFieldMap, this.idPathMap);
        }
        if (this.validationConditions.length > 0) {
          this.conditionsService.checkValidationConditions(this.validationConditions, this.pathFieldMap, this.idPathMap);
        }
      });
    }
  }

  createGroup(
    fields: (AcFieldConfig | AcTextConfig)[],
    parent: string | null,
    updateOn: UpdateOn,
    initialValues: any,
    arrayCode: string | null,
    arrayInstance: number | null
  ) {
    const config: AbstractControlOptions = updateOn ? {updateOn} : {updateOn: "change"};
    const group = this.fb.group({}, config);
    fields.forEach((config) => {
      this.treatField(config, group, parent, updateOn, initialValues, arrayCode, arrayInstance);
    });
    return group;
  }

  treatField(
    config: AcFieldConfig | AcTextConfig,
    group: FormGroup,
    parent: string | null,
    updateOn: UpdateOn,
    initialValues: any,
    arrayCode: string | null,
    arrayInstance: number | null
  ) {
    const path = (parent ? parent + this.separator : "") + config.name;
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
      this.setFormFieldMapItem(path, config, null, arrayCode, arrayInstance);
    } else if (config.type === "group") {
      group.addControl(config.name, this.createGroupField(config, parent, updateOn, initialValues, arrayCode, arrayInstance));
    } else if (config.type === "array") {
      group.addControl(config.name, this.createArray(config as AcArrayConfig, parent, updateOn, initialValues, arrayCode, arrayInstance));
    } else if (config.type === "row") {
      this.setFormFieldMapItem(path, config, null, arrayCode, arrayInstance);
      (config as AcRowConfig).fields.forEach((child) => {
        this.treatField(child, group, parent, updateOn, initialValues, arrayCode, arrayInstance);
      });
    } else if (config.type === "tabs") {
      const control = this.createGroup(
        config.tabs.map((x) => x.field),
        parent,
        updateOn,
        initialValues ? initialValues[config.name] : null,
        arrayCode,
        arrayInstance
      );
      group.addControl(config.name, control);
      this.setFormFieldMapItem(path, config, control, arrayCode, arrayInstance);
    } else {
      const control = this.createControl(config, initialValues);
      this.setFormFieldMapItem(path, config, control, arrayCode, arrayInstance);
      group.addControl(config.name, control);
    }
  }

  createGroupField(
    groupConfig: AcGroupConfig,
    parent: string | null,
    updateOn: UpdateOn,
    initialValues: any,
    arrayCode: string | null,
    arrayInstance: number | null
  ) {
    const path = (parent ? parent + this.separator : "") + groupConfig.name;
    const g: FormGroup = this.createGroup(groupConfig.fields, path, updateOn, initialValues ? initialValues[groupConfig.name] : null, arrayCode, arrayInstance);
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
    this.setFormFieldMapItem(path, groupConfig, g, arrayCode, arrayInstance);
    return g;
  }

  createArray(
    arrayConfig: AcArrayConfig,
    parent: string | null,
    updateOn: UpdateOn,
    initialValues: any,
    arrayCode: string | null,
    arrayInstance: number | null
  ): FormArray {
    const path = (parent ? parent + this.separator : "") + arrayConfig.name;
    arrayConfig.instances = [];
    const list: FormGroup[] = [];
    let value = arrayConfig.value;
    if (initialValues && Object.keys(initialValues).indexOf(arrayConfig.name) !== -1) {
      value = initialValues[arrayConfig.name];
    }
    let i = 0;
    if (value) {
      for (const item of value) {
        const fields = _.cloneDeep(arrayConfig.field.fields);
        const grp = this.createGroup(arrayConfig.field.fields, `${path}[${i}]`, updateOn, item, path, i);
        arrayConfig.instances.push({
          number: i,
          group: grp,
          fields
        });
        list.push(grp);
        i++;
      }
    }
    if (arrayConfig.minNbRow && arrayConfig.minNbRow > list.length) {
      while (arrayConfig.minNbRow > list.length) {
        const fields = _.cloneDeep(arrayConfig.field.fields);
        const grp = this.createGroup(arrayConfig.field.fields, `${path}[${i}]`, updateOn, null, path, i);
        arrayConfig.instances.push({
          number: i,
          group: grp,
          fields
        });
        list.push(grp);
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
    this.setFormFieldMapItem(path, arrayConfig, formArray, arrayCode, arrayInstance);
    return formArray;
  }

  setFormFieldMapItem(
    path: string,
    config: AcFieldConfig | AcTextConfig | StepConfig,
    control: FormControl | FormGroup | FormArray | null,
    arrayCode: string | null,
    arrayInstance: number | null
  ) {
    console.log(config.id);
    this.pathFieldMap.set(path, {config, control});
    if (arrayCode == null) {
      this.idPathMap.set(config.id!, path);
    } else {
      if (!this.idPathMap.get(config.id!)) {
        this.idPathMap.set(config.id!, []);
      }
      if(!isArray((this.idPathMap.get(config.id!)))) {
        throw new Error("Erreur!!!!");
      }
      (this.idPathMap.get(config.id!) as PathArrayInstance[]).push({path, arrayCode, arrayInstance: arrayInstance!});
    }
  }

  createControl(config: AcControlConfig, initialValues: any) {
    let {disabled, validations, value} = config;
    if (initialValues && Object.keys(initialValues).indexOf(config.name) !== -1) {
      value = initialValues[config.name];
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

  /*
  updateForm(fields: (AcFieldConfig | AcTextConfig)[]) {
      if (this.form) {
          this.updateGroup(this.form, fields);
      }
  }

  updateGroup(form: FormGroup, fields: (AcFieldConfig | AcTextConfig)[]) {
      this.removeItems(form, fields);
      this.addItems(form, fields);
      this.updateItems(form, fields);
  }

  removeItems(form: FormGroup, fields: (AcFieldConfig | AcTextConfig)[]) {
      const newControls = (fields.filter(x => x.type !== 'text') as AcFieldConfig[])
          .map(item => item.name);
      Object.keys(form.controls)
          .filter((control) => !newControls.includes(control))
          .forEach((control) => form.removeControl(control));
  }

  addItems(form: FormGroup, fields: (AcFieldConfig | AcTextConfig)[]) {
      const formFields = fields.filter(x => x.type !== 'text') as AcFieldConfig[];
      formFields
          .map((item) => item.name)
          .filter((name) => name && !Object.keys(form.controls).includes(name))
          .forEach((name) => {
              if (name) {
                  const config = formFields.find((control) => control.name === name);
                  if (config && config.type === 'group') {
                      form.addControl(name, this.createGroup((config as AcGroupConfig).fields as AcControlConfig[], "change", null));
                  } else if (config) {
                      form.addControl(name, this.createControl(config as AcControlConfig, null));
                  }
              }
          });
  }

  updateItems(form: FormGroup, fields: (AcFieldConfig | AcTextConfig)[]) {
      const newControls = (fields.filter(x => x.type !== 'text') as AcFieldConfig[]);
      const keys = newControls.map(item => item.name);
      Object.keys(form.controls)
          .filter((control) => keys.includes(control))
          .forEach((control) => {
              const groupItem = (fields.filter(x => x.type === 'group') as AcGroupConfig[]).filter(x => x.name === control)[0];
              if (groupItem) {
                  this.updateGroup(form.get(control) as FormGroup, (groupItem.fields) as AcControlConfig[]);
              } else {
                  const fieldItem = (fields.filter(x => x.type !== 'text' && x.type !== 'group') as AcControlConfig[]).filter(x => x.name === control)[0];
                  const formControl = form.get(control);
                  if (formControl != null && fieldItem && fieldItem.disabled) {
                      formControl.disable();
                  }
                  if (formControl != null && fieldItem && !fieldItem.disabled) {
                      formControl.enable();
                  }
              }
          });
  }

   */
}
