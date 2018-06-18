//4.6.1
function User() {
    this.hi = function() {
    };
}

let userA = new User();
let userB = new User();

console.log(userA.hi() == userB.hi());

//4.6.2
function Calculator() {
    this.read = function() {
        this.a = Math.floor(Math.random() * 100);
        this.b = Math.floor(Math.random() * 100);
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//4.6.3
function Accumulator(number) {
    this.sum = number;

    this.read = function() {
        return this.sum = this.sum + Math.floor(Math.random() * 100);
    }
}

let acc = new Accumulator(1);
console.log(acc.read());
console.log(acc.read());
console.log(acc.read());

//4.6.4
exports.calculator = function CalculatorExt() {

    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    
    this.calculate = function(expression) {
        let split = expression.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        methods[name] = func;
    };
}