type Operator = string | '&&' | '||' | '>' | '<' | '===';
type Operand = string | number | boolean;
type SingleCondition = string;
type MultipleConditions = Array<MultipleConditions | string | Operator>;
type Query = SingleCondition | MultipleConditions;

function operateLogic(a: Operand, b: Operand, operator: Operator) {
  switch (operator) {
    case '&&':
      return a && b;
    case '||':
      return a || b;
    case '>':
      return Number(a) > Number(b);
    case '<':
      return Number(a) < Number(b);
    case '===':
      return String(a) === String(b);
  }
}

function testConditions<T>(data: T, query: Query) {
  const branchingFlag = Array.isArray(query) ? 'array' : 'string';

  switch (branchingFlag) {
    case 'array':
      const [condition1, conditionOperator, condition2] = query;

      return operateLogic(
        testConditions(data, condition1),
        testConditions(data, condition2),
        conditionOperator as Operator
      );
    case 'string':
      const [operand1, operator, operand2] = (query as SingleCondition).split(
        ' '
      );
      return operateLogic(data[operand1], operand2, operator);
  }
}

export function filterData<T>(data: T[], query: Query) {
  return data.filter((transaction) => {
    return testConditions(transaction, query);
  });
}
