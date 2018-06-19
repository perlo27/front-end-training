import topSalary from "../../src/8-destructuring/2.js"
import chai from "chai";
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