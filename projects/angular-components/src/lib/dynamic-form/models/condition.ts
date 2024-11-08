export interface AcCondition {
  type: 'condition';
  logicOperator?: AcLogicOperatorEnum;
  items: (AcCondition | AcExpression)[];
}

export interface AcExpression {
  type: 'expression';
  fieldId: string;
  operator: AcExpressionOperatorEnum;
  value: string;
}

export enum AcLogicOperatorEnum {
  OR = "OR",
  AND = "AND"
}

export enum AcExpressionOperatorEnum {
  EQUALS = "EQUALS",
}
