import camelize from "../../src/5-array-methods/1.js";
import chai from "chai";



describe("removes all dashes, each word after dash becomes uppercased.", function () {
  it("leaves an empty line as is", function() {
    chai.assert.equal(camelize(""), "");
  });

  it("turns background-color into backgroundColor", function() {
    chai.assert.equal(camelize("background-color"), "backgroundColor");
  });

  it("turns list-style-image into listStyleImage", function() {
    chai.assert.equal(camelize("list-style-image"), "listStyleImage");
  });

  it("turns -webkit-transition into WebkitTransition", function() {
    chai.assert.equal(camelize("-webkit-transition"), "WebkitTransition");
  });
});
