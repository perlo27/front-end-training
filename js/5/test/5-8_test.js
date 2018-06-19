import { sumSalaries, count, destructuring, topSalary } from "../5-8";
import chai from "chai";

describe("Object.keys, values, entries", () => {
  it("give salary object, expect sum", () => {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250
    };
    let result = sumSalaries(salaries);
    chai.assert.equal(result, 650);
  });

  it("returns 0 for the empty object", function() {
    chai.assert.strictEqual(sumSalaries({}), 0);
  });

  it("counts the number of properties", function() {
    chai.assert.equal(count({ a: 1, b: 2 }), 2);
  });

  it("returns 0 for an empty object", function() {
    chai.assert.equal(count({}), 0);
  });

  it("ignores symbolic properties", function() {
    chai.assert.equal(count({ [Symbol("id")]: 1 }), 0);
  });

  it("destructuring", function() {
    let obj = {
      name: "John",
      years: 30
    };
    destructuring(obj);
    chai.assert.equal();
  });
});


describe("topSalary", function() {
    it("returns top-paid person", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      chai.assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null for the empty object", function() {
      chai.assert.isNull( topSalary({}) );
    });
  });