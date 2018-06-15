'use strict';

let calculator = {
    value1: 0,
    value2: 0,

    read () {
        this.value1 = prompt("Give first number for operations");
        this.value2 = prompt("Give second number for operations");
    },

    sum() {
        return Number(this.value1) + Number(this.value2);
    },

    mul() {
        return Number(this.value1) * Number(this.value2);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
