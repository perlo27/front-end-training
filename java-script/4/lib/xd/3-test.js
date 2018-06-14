'use strict';

var isEmpty = require('../../src/1/3.js').isEmpty;
var chai = require('chai');

describe("is Empty", function () {
    it("return true when object has no properties", function () {
        var emptyObject = void 0;
        chai.assert.isTrue(isEmpty(emptyObject));
    });
    it("return false when object has at least one proprty", function () {
        var nonEmptyObject = {
            name: "John"
        };
        chai.assert.isFalse(isEmpty(nonEmptyObject));
    });
});