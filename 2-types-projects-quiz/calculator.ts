/**
 * Let's make a calculator 🧮
 */

{
  type Operator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

  let calculate = (operator: Operator, num1: number, num2: number) => {
    // if (operator === 'add') return num1 + num2;
    // if (operator === 'substract') return num1 - num2;
    // if (operator === 'multiply') return num1 * num2;
    // if (operator === 'divide') return num1 / num2;
    // if (operator === 'remainder') return num1 % num2;

    switch (operator) {
      case 'add':
        return num1 + num2;
      case 'substract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num1 / num2;
      case 'remainder':
        return num1 % num2;
      default:
        throw new Error(`can't calculate`);
    }
  };

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1
}
