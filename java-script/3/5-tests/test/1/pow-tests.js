'use strict';
let assert = require('assert');
let Pow = require('../../src/pow.js');
describe("pow", function() {

    describe("raises x to power n", function() {
  
      function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
          assert.equal(Pow.pow(x, 3), expected);
        });
      }
  
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
      }
  
    });
  
  });