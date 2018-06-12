//Two functions – one object
let globalObj = {};

function A() {
    return globalObj;
};

function B() {
    return globalObj;
}

let a = new A();
let b = new B();

console.log(a === b);

// Create new Calculator
function Calculator() {
    this.read = function () {
        // this.a = Number(prompt("Set first value:"));
        // this.b = Number(prompt("Set second value:"));
        this.a = 2;
        this.b = 3;
    },
        this.sum = function () {
            return this.a + this.b;
        },
        this.mul = function () {
            return this.a * this.b;
        }
}

let calculator = new Calculator();

calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

// Create new Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Value to be added:")
        // this.value += 1;
    }
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values

// Create an extendable calculator
function Calculator() {

    let methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = function (math) {
        let operationParts = math.split(" ");
        let a = Number(operationParts[0]);
        let operator = operationParts[1];
        let b = Number(operationParts[2]);
        return methods[operator](a, b);
    };

    this.addMethod = function (name, func) {
        methods[name] = func;
    }
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("3 - 7")); // -4

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8