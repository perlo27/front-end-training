import { Calculator, Accumulator, ExtendableCalculator } from "../4-6";
import chai from "chai";

describe("calculator test", function() {
  it("add two numbers, should sum correctly", () => {
    let calculator = new Calculator();
    calculator.read(4, 5);
    let sum = calculator.sum();
    chai.assert.equal(sum, 9);
  });
});

describe("accumulator test", () => {
  it("add two values, start accumulator with positive value", () => {
    let accumulator = new Accumulator(3);
    accumulator.read(4);
    accumulator.read(-3);
    chai.assert.equal(accumulator.value, 4);
  });

  it("start accumulator with positive value, try to add string", () => {
    let accumulator = new Accumulator(3);
    accumulator.read("hello");
    chai.assert.equal(accumulator.value, 3);
  });

  it("start accumulator with string, try to add number, expect number only", () => {
    let accumulator = new Accumulator("hello");
    accumulator.read(4);
    chai.assert.equal(accumulator.value, 4);
  });
});

describe("extendable calculator test", () => {
  let calculator;
  beforeEach(() => {
    calculator = new ExtendableCalculator();
    calculator.init();
  })

  it("give string with addition, return correct value", () => {
    let operation = "2 + 4";
    chai.assert.equal(calculator.calculate(operation), 6);
  });

  it("give string with subtraction, return correct value", () => {
    let operation = "44 - 22";
    chai.assert.equal(calculator.calculate(operation), 22);
  });

  it("give string with addition, with minus values", () => {
    let operation = "-33 + 33";
    chai.assert.equal(calculator.calculate(operation), 0);
  });

  it("add multiplication operation and perform this operation", () => {
    calculator.addMethod("*", (a, b) => a * b);
    let operation = "3 * 12";
    chai.assert.equal(calculator.calculate(operation), 36);
  });

  it("add exponentiation operation and perform it", () => {
    calculator.addMethod("**", (a, b) => a ** b);
    let operation = "5 ** 3";
    chai.assert.equal(calculator.calculate(operation), 125);
  })
});
