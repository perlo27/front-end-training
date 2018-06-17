// 2. Create new Calculator
function Calculator() {
  this.number1 = null;
  this.number2 = null;

  this.read = function () {
    const randomCeiling = 10;
    this.number1 = Math.floor((Math.random() * randomCeiling) + 1);
    this.number2 = Math.floor((Math.random() * randomCeiling) + 1);
    console.log(`${this.number1} ${this.number2}`);
  };

  this.sum = function () {
    return this.number1 + this.number2;
  };

  this.mul = function () {
    return this.number1 * this.number2;
  };
}

const calculator = new Calculator();
calculator.read();
console.log(`Sum=${calculator.sum()}`);
console.log(`Mul=${calculator.mul()}`);
