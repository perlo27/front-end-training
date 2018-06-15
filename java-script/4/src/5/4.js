'use strict';

class Calculator {
    constructor() { }
    sum() {
        console.log(this.expression);
    };
    read(expression) {
        this.expression = expression;
    }
}


export default Calculator;