describe("pow", function(){
   it("2 raised in power of 2 is 4", function () {
       assert.equal(pow(2, 2), 4);
   });

    it("2 raised in power of 3 is 8", function () {
        assert.equal(pow(2, 3), 8);
    });

    it("2 raised in power of 0 is 1", function () {
        assert.equal(pow(2, 0), 1);
    })
});