let assert = require("assert");
let calc = require('../../3/3.1.js');

describe("pow", function() {
	    it("2 raised to power 3 is 8", function() {
		          assert.equal(calc.pow(2, 3), 8);
		        });

	    it("3 raised to power 3 is 27", function() {
		          assert.equal(calc.pow(3, 3), 27);
		        });

	    it("for negative n the result is NaN", function() {
		          assert(Number.isNaN(calc.pow(2, -1)));
		        });

	    it("for non-integer n the result is NaN", function() {
		          assert(Number.isNaN(calc.pow(2, 1.5)));
		        });

	  }); 
