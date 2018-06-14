let assert = require("assert");
let isEmpty = require('../../4/4.1.js').isEmpty;
let sum = require('../../4/4.1.js').sum;
let multiplyNumeric = require('../../4/4.1.js').multiplyNumeric;
const chai = require('chai'); 
// import {isEmpty} from '../../4/4.1.js';

describe("isEmpty", function() {
    it("should return true when there are properties", function() {
        let objWithProp = {
            name: "fds"
        };
        chai.assert.isFalse(isEmpty(objWithProp));
    });

    it("should return false when there are not properties", function() {
        let objWithProp = {};
        chai.assert.isTrue(isEmpty(objWithProp));
    });
});

describe("sum of salaries" , function() {
    it("should return 390 for given salaries", function() {
        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        };
        assert.equal(sum(salaries), 390);
    });

    it("should return 0 for given salaries", function() {
        let salaries = {
        };
        assert.equal(sum(salaries), 0);
    });
});

describe("multiply Numeric values", function() {
    it("should multiply values for given properties", function() {
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };
        let expectedOutput = {
            width: 400,
            height: 600,
            title: "My menu"
        };

        assert.deepEqual(multiplyNumeric(menu), expectedOutput);
    });
});