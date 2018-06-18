import filterRangeInPlace from "../../src/5-array-methods/3.js";
import chai from "chai";
describe("filterRangeInPlace", function() {

    it("returns the filtered values", function() {
  
      let arr = [5, 3, 8, 1];
  
      filterRangeInPlace(arr, 1, 4); 
  
      chai.assert.deepEqual(arr, [3, 1]);
    });
  
    it("doesn't return anything", function() {
      chai.assert.isUndefined(filterRangeInPlace([1,2,3], 1, 4)); 
    });
  
  });