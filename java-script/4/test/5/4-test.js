import Calculator from "../../src/5/4.js";
import chai from "chai";

let calculator;
before(function () {
    calculator = new Calculator();
});

describe("calculator tests", function () {
    it("sum two correct numbers", function () {
        calculator.read(3,4);
        let result = calculator.sum();
        chai.assert.equal(result, 7);
    });
});
