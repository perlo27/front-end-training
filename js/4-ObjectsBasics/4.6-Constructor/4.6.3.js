// Create new Calculator

function Accumulator(startingValue) {
  this.value = startingValue;
  console.log(`Initial value: ${this.value}`);

  this.read = () => {
    const randomCeiling = 10;
    const inputNr = Math.floor((Math.random() * randomCeiling) + 1);
    console.log(`Add: ${inputNr}`);
    this.value = this.sum(inputNr);
  };

  this.sum = addition => this.value + addition;
}


const accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values
