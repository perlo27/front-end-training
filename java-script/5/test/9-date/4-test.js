import getDateAgo from "../../src/9-date/4.js"
import chai from "chai";

describe("getDateAgo", function() {

    it("1 day before 02.01.2015 -> day 1", function() {
      chai.assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
    });
  
  
    it("2 days before 02.01.2015 -> day 31", function() {
      chai.assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
    });
  
    it("100 days before 02.01.2015 -> day 24", function() {
      chai.assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
    });
  
    it("365 days before 02.01.2015 -> day 2", function() {
      chai.assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
    });
  
    it("does not modify the given date", function() {
      let date = new Date(2015, 0, 2);
      let dateCopy = new Date(date);
      getDateAgo(dateCopy, 100);
      chai.assert.equal(date.getTime(), dateCopy.getTime());
    });
  
  });