// 4. reate an extendable calculator
function Calculator() {
  this.operations = {
    '+': function (leftOperand, rightOperand) { return leftOperand + rightOperand; },
    '-': (leftOperand, rightOperand) => leftOperand - rightOperand,
  };

  this.calculate = function (exp) {
    console.log(`Exp: '${exp}'`);
    const expParts = exp.split(' ');
    const leftOperand = Number(expParts[0]);
    const operation = String(expParts[1]);
    const rightOperand = Number(expParts[2]);

    console.log(`leftOperand: '${leftOperand}'; typeof: '${typeof leftOperand}'`);
    console.log(`operation: '${operation}'; typeof: '${typeof operation}'`);
    console.log(`rightOperand: '${rightOperand}'; typeof: '${typeof rightOperand}'`);

    if (!this.operations[operation] || isNaN(leftOperand) || isNaN(rightOperand)) {
      console.log('Expression malformed');
      return NaN;
    }

    return this.operations[operation](leftOperand, rightOperand);
  };

  this.addOperation = function (name, func) {
    this.operations[name] = func;
  };
}

const calc = new Calculator();
console.log(`Result = ${calc.calculate('1 + 2')}\n`);

calc.addOperation('*', (a, b) => a * b);
calc.addOperation('/', (a, b) => a / b);
calc.addOperation('**', (a, b) => a ** b);

console.log(`Result = ${calc.calculate('5 * 3')}\n`);
console.log(`Result = ${calc.calculate('2 ** 3')}\n`);
console.log(`Result = ${calc.calculate('10 / 2')}\n`);
