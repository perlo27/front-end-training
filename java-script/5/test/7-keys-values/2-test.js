import count from "../../src/7-keys-values/2.js"
import chai from "chai";

describe("count", function() {
    it("counts the number of properties", function() {
      chai.assert.equal( count({a: 1, b: 2}), 2 );
    });
  
    it("returns 0 for an empty object", function() {
      chai.assert.equal( count({}), 0 );
    });
  
    it("ignores symbolic properties", function() {
      chai.assert.equal( count({ [Symbol('id')]: 1 }), 0 );
    });
  });