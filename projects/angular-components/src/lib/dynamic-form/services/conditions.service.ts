import {Injectable} from '@angular/core';
import {AcCondition, AcExpression, AcExpressionOperatorEnum, AcLogicOperatorEnum} from "../models/condition";
import {FormField, IdPathMap, PathFieldMap} from "../models/field-config";
import {isArray} from "lodash";
import {AcValidator} from "../models/validator";

@Injectable({
  providedIn: 'root'
})
export class ConditionsService {

  constructor() {
  }

  checkValidationConditions(
    validationConditions: { fieldId: string; validation: AcValidator }[],
    pathFieldMap: PathFieldMap,
    idPathMap: IdPathMap
  ) {
    for (const cond of validationConditions) {
      const fieldPath = idPathMap.get(cond.fieldId);
      if (isArray(fieldPath)) {
        for (let instance of fieldPath) {
          const field = pathFieldMap.get(instance.path);
          if (field) {
            const isConditionOk = this.checkCondition(cond.validation.condition!, pathFieldMap, idPathMap, instance.arrayCode, instance.arrayInstance);
            this.setValidation(field, cond.validation, isConditionOk);
          }
        }
      } else if (fieldPath) {
        const field = pathFieldMap.get(fieldPath);
        if (field && field.control) {
          const isConditionOk = this.checkCondition(cond.validation.condition!, pathFieldMap, idPathMap, null, null);
          this.setValidation(field, cond.validation, isConditionOk);
        }
      }
    }
  }

  setValidation(field: FormField, validation: AcValidator, isConditionOk: boolean) {
    if (isConditionOk) {
      field.control!.addValidators(validation.validator!);
    } else {
      field.control!.removeValidators(validation.validator!);
    }
    field.control!.updateValueAndValidity({emitEvent: false});
  }

  checkDisplayConditions(
    displayConditions: { fieldId: string; condition: AcCondition }[],
    pathFieldMap: PathFieldMap,
    idPathMap: IdPathMap
  ) {
    for (const cond of displayConditions) {
      const fieldPath = idPathMap.get(cond.fieldId);
      if (isArray(fieldPath)) {
        for (let instance of fieldPath) {
          const field = pathFieldMap.get(instance.path);
          if (field) {
            const isConditionKo = !this.checkCondition(cond.condition, pathFieldMap, idPathMap, instance.arrayCode, instance.arrayInstance);
            this.setHidden(field, isConditionKo);
          }
        }
      } else if (fieldPath) {
        const field = pathFieldMap.get(fieldPath);
        if (field) {
          const isConditionKo = !this.checkCondition(cond.condition, pathFieldMap, idPathMap, null, null);
          this.setHidden(field, isConditionKo);
        }
      }
    }
  }

  setHidden(field: FormField, isConditionKo: boolean) {
    if (isConditionKo != field.config.hidden) {
      field.config.hidden = isConditionKo;
      if (isConditionKo) {
        field.control?.reset();
      }
    }
  }

  checkCondition(condition: AcCondition,
                 pathFieldMap: PathFieldMap,
                 idPathMap: IdPathMap,
                 arrayCode: string | null,
                 arrayInstance: number | null): boolean {
    let isOk = false;
    for (const item of condition.items) { // AcCondition | AcExpression
      if (item.type === 'expression') {
        isOk = this.checkExpression(item as AcExpression, pathFieldMap, idPathMap, arrayCode, arrayInstance);
      } else {
        isOk = this.checkCondition(item as AcCondition, pathFieldMap, idPathMap, arrayCode, arrayInstance);
      }
      if ((condition.logicOperator === AcLogicOperatorEnum.OR && isOk)
        || (condition.logicOperator === AcLogicOperatorEnum.AND && !isOk)) {
        break;
      }
    }
    return isOk;
  }

  checkExpression(item: AcExpression,
                  pathFieldMap: PathFieldMap,
                  idPathMap: IdPathMap,
                  arrayCode: string | null,
                  arrayInstance: number | null): boolean {
    let isOk = false;
    const fieldPath = idPathMap.get(item.fieldId);
    let path;
    if (isArray(fieldPath)) {
      const f = fieldPath.filter(x => x.arrayInstance === arrayInstance && x.arrayCode === arrayCode)[0];
      path = f.path;
    } else {
      path = fieldPath;
    }
    if (path && pathFieldMap.get(path)) {
      isOk = this.evalExpression(pathFieldMap.get(path)!, item.operator, item.value);
    }
    return isOk;
  }

  evalExpression(field: FormField, operator: AcExpressionOperatorEnum, refValue: any): boolean {
    let isOk = false;
    const fieldValue = field.control?.value;
    if (operator === AcExpressionOperatorEnum.EQUALS) {
      if (refValue === fieldValue) {
        isOk = true;
      }
    }
    return isOk;
  }
}
