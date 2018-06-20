'use strict'

function Calculator() {
    this.read = function() {
        this.val1 = prompt('Provide the first value');
        this.val2 = prompt('Provide the first value');
    };

    this.sum = function() {
        return this.val1*1 + this.val2*1;
    };

    this.mul = function() {
        return this.val1 * this.val2;
    };
};

let calculator = new Calculator();
calculator.read();
console.log('Sum =', calculator.sum());
console.log('Sum =', calculator.mul());