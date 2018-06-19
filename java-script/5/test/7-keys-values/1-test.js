import sumSalaries from "../../src/7-keys-values/1.js"
import chai from "chai";
describe("sumSalaries", function() {
    it("returns sum of salaries", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      chai.assert.equal( sumSalaries(salaries), 650 );
    });
  
    it("returns 0 for the empty object", function() {
      chai.assert.strictEqual( sumSalaries({}), 0);
    });
  });