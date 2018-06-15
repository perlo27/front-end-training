import { Calculator, Accumulator } from "../4-6";
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
