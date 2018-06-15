function Calculator() {
    this.read = function () {
        this.firstValue = +prompt("Enter first value: ");
        this.secondValue = +prompt("Enter second value: ");
    };
    this.sum = function () {
        return this.firstValue + this.secondValue;
    };
    this.mul = function () {
        return this.firstValue * this.secondValue;
    };
}
let calculator = new Calculator();

calculator.read();

console.log("Sum= " + calculator.sum());
console.log("Mul= " + calculator.mul());