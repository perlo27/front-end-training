// PART 1
function Calculator(){
  this.calculate = function(expression) {
    let [first, operand, second] = expression.split(" ");
    if(operand === "+") {
      return Number(first)+Number(second);
    } else if(operand === "-") {
      return Number(first)-Number(second);
    } else {
      return 0;
    }
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

// PART 2
Calculator = function(){
  this.operands = {};
  this.addMethod = function(name, func){
    this.operands[name] = func;
  }

  this.calculate = function(expression) {
    let [first, operand, second] = expression.split(" ");
    let operation = this.operands[operand];
    if(operation) {
      return operation(Number(first),Number(second));
    } else {
      return 0;
    }
  }
}


let powerCalc = new Calculator;
powerCalc.addMethod("+", (a, b) => a + b);
powerCalc.addMethod("-", (a, b) => a - b);
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
