import Calculator from "../../src/5/4.js";
import chai from "chai";

let calculator;
before(function () {
    calculator = new Calculator;
});

describe("calculator tests", function () {
    it("sum two correct numbers", function () {
        let actualResult = calculator.calculate("3 + 17");
        chai.assert.equal(actualResult, 20);
    });

    it("subtract two correct numbers", function () {
        let actualResult = calculator.calculate("20 - 17");
        chai.assert.equal(actualResult, 3);
    });
    it("calculate(12 + 34) = 46", function() {
        chai.assert.equal(calculator.calculate("12 + 34"), 46);
      });

      it("calculate(-33 - 22) = -55", function() {
        chai.assert.equal(calculator.calculate("-33 - 22"), -55);
      });
    
      it("calculate(34 - 12) = 22", function() {
        chai.assert.equal(calculator.calculate("34 - 12"), 22);
      });
    
      it("add multiplication: calculate(2 * 3) = 6", function() {
        calculator.addMethod("*", (a, b) => a * b);
        chai.assert.equal(calculator.calculate("2 * 3"), 6);
      });
    
      it("add power: calculate(2 ** 3) = 8", function() {
        calculator.addMethod("**", (a, b) => a ** b);
        chai.assert.equal(calculator.calculate("2 ** 3"), 8);
      });
});
