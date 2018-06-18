'use strict';

function Calculator() {

    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.addMethod = function (name, func) {
        methods[name] = func;
    };

    this.calculate = function (expression) {
        let splitted = expression.split(" ");
        let firstValue = Number(splitted[0]);
        let secondValue = Number(splitted[2]);
        let sign = splitted[1];

        return methods[sign](firstValue, secondValue);
    }
}


export default Calculator;