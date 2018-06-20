describe("isEmpty", function(){
    it("should return true for empty object", function () {
        assert.equal(isEmpty({}), true);
    });

    it("should return false for an object with an undefined field", function () {
        let user = {};
        user.name = undefined;
        assert.equal(isEmpty(user), false);
    });

    it("should return false for an object with a field", function () {
        let user = {};
        user.name = 'Sebastian';
        assert.equal(isEmpty(user), false);
    });

});