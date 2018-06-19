import getLastDayOfMonth from "../../src/9-date/5.js"
import chai from "chai";

describe("getLastDayOfMonth", function() {
    it("last day of 01.01.2012 - 31", function() {
      chai.assert.equal(getLastDayOfMonth(2012, 0), 31);
    });
  
    it("last day of 01.02.2012 - 29 (leap year)", function() {
      chai.assert.equal(getLastDayOfMonth(2012, 1), 29);
    });
  
    it("last day of 01.02.2013 - 28", function() {
      chai.assert.equal(getLastDayOfMonth(2013, 1), 28);
    });
  });