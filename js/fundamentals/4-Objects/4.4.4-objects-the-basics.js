'use strict'

let calculator = {
    read: function () {
        this.val1 = prompt('Provide the first value');
        this.val2 = prompt('Provide the first value');
    },

    sum: function () {
        return this.val1*1 + this.val2*1;
    },

    mul: function () {
        return this.val1 * this.val2;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());