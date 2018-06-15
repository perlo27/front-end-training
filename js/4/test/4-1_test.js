import { assert } from "chai";
import * as app from "../4-1";

describe("is object empty ?", () => {
  it("if empty return true", () => {
    let schedule = {};
    let result = app.isEmpty(schedule);
    assert.equal(result, true);
  });

  it("if object have some properties return false", () => {
    let schedule = {};
    schedule["8:30"] = "get up";
    let result = app.isEmpty(schedule);
    assert.equal(result, false);
  });
});

describe("summing properties", () => {
  it("sum all properties, expect correct value", () => {
    let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130
    };
    let sum = app.sumProperties(salaries);
    assert.equal(sum, 390);
  });

  it("if salary is empty expect 0", () => {
    let salaries = {};
    let sum = app.sumProperties(salaries);
    assert.equal(sum, 0);
  });
});

describe("multiply numeric", () => {
  it("give obj with both numeric and literal keys, expect numeric multiplied", () => {
    let obj = {
      name: "John",
      age: 40
    };
    let sum = app.multiplyNumeric(obj);
    assert.equal(obj.name, "John");
    assert.equal(obj.age, 80);
  });
  
  it("give obj with two numerics, expect numeric multiplied", () => {
    let obj = {
      price: 200.5,
      age: 40
    };
    let sum = app.multiplyNumeric(obj);
    assert.equal(obj.price, 401);
    assert.equal(obj.age, 80);
  });
});


  