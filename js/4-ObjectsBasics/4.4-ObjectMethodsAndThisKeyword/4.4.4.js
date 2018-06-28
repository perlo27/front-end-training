// Create a calculator

const calculator = {
  number1: null,
  number2: null,
  read() {
    const randomCeiling = 10;
    this.number1 = Math.floor((Math.random() * randomCeiling) + 1);
    this.number2 = Math.floor((Math.random() * randomCeiling) + 1);
    console.log(`${this.number1} ${this.number2}`);
  },
  sum() {
    return this.number1 + this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
