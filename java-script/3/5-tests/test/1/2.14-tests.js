'use strict';
let assert = require('assert');
let ageChecker = require('../../src/2.14.js');
describe("Age confirmation", function () {

  it("return true when age is greater than 18", function () {
    assert.equal(ageChecker.checkAge(19),true);
  });

  it("return false when age is lesser than 18", function () {
    assert.equal(ageChecker.checkAge(17),false);
  });

  it("return false when age is equal to 18", function () {
    assert.equal(ageChecker.checkAge(18),false);
  });

});
