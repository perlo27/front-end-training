import filterRange from "../../src/5-array-methods/2.js";
import chai from "chai";
describe("filterRange", function() {

    it("returns the filtered values", function() {
  
      let arr = [5, 3, 8, 1];
  
      let filtered = filterRange(arr, 1, 4); 
  
      chai.assert.deepEqual(filtered, [3, 1]);
    });
  
    it("doesn't change the array", function() {
  
      let arr = [5, 3, 8, 1];
  
      let filtered = filterRange(arr, 1, 4); 
  
      chai.assert.deepEqual(arr, [5,3,8,1]);
    });
  
  });