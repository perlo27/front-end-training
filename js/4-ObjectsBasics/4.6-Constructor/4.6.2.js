// Create new Calculator

function Calculator() {
  this.number1 = null;
  this.number2 = null;

  this.read = () => {
    const randomCeiling = 10;
    this.number1 = Math.floor((Math.random() * randomCeiling) + 1);
    this.number2 = Math.floor((Math.random() * randomCeiling) + 1);
    console.log(`${this.number1} ${this.number2}`);
  };

  this.sum = () => this.number1 + this.number2;

  this.mul = () => this.number1 * this.number2;
}

const calculator = new Calculator();
calculator.read();
console.log(`Sum=${calculator.sum()}`);
console.log(`Mul=${calculator.mul()}`);
