"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var calculator = {
    read: function read() {
        this.a = +prompt("Enter first value: ");
        this.b = +prompt("Enter second value: ");
    },

    sum: function sum() {
        return this.a + this.b;
    },

    mul: function mul() {
        return this.a * this.b;
    }

};

exports.calculator = calculator;