const isEmpty = require('../../src/3.js').isEmpty;
const chai = require('chai');

describe("is Empty", function(){
    it("return true when object has no properties",function(){
        let emptyObject;
        chai.assert.isTrue(isEmpty(emptyObject));
    });
    it("return false when object has at least one proprty",function(){
        let nonEmptyObject = {
            name : "John"
        };
        chai.assert.isFalse(isEmpty(nonEmptyObject));
    });
});