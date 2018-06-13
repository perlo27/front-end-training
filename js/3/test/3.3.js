'use strict'

let assert = require("assert");
let calc = require('../3.1.js');

describe("pow", function() {
    it("raises to n-th power", function() {
      assert.equal(calc.pow(2, 3), 8);
    });
  
  }); 