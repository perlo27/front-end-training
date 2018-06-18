const assert = require("assert");
const chai = require('chai');
const importCalc = require('../../4/4.6.js').calculator;
let calculator;

before(function () {
    calculator = new importCalc();
});

describe("should check valid operartions on calculator", function () {
    it("should compute reusult of 3 + 7 operation with result of 10", function () {
        assert.equal(calculator.calculate("3 + 7"), 10);
    });

    it("should compute reusult of 10 - 7 operation with result of 10", function () {
        assert.equal(calculator.calculate("10 - 7"), 3);
    });

    describe("should check addMethod", function () {
        it("should add multiplication method (3 * 2) and return correct result of 6", function () {
            calculator.addMethod("*", (a, b) => a * b);
            assert.equal(calculator.calculate("3 * 2"), 6);
        });

        it("should add divison method (9 / 3) and return correct result of 3", function () {
            calculator.addMethod("/", (a, b) => a / b);
            assert.equal(calculator.calculate("9 / 3"), 3);
        });

        it("should add power method (3 ** 3) and return correct result of 27", function () {
            calculator.addMethod("**", (a, b) => a ** b);
            assert.equal(calculator.calculate("3 ** 3"), 27);
        });

    });
});