function Calculator(){
  this.read = function(){
    this.first = Number(prompt("Enter the first number",""));
    this.second = Number(prompt("Enter the second number",""));
  }

  this.sum = function(){
    return this.first+this.second;
  }

  this.mul = function(){
    return this.first*this.second;
  }
}
let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
