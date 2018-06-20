describe("sum of object", function(){
    it("should return 390", function () {
        let salaries = {
            John: 100,
            Ann: 160,
            Pete: 130
        };
        assert.equal(sumOfSalary(salaries), 390);
    });

    it("should return o for empty object", function () {
        let salaries = {};
        assert.equal(sumOfSalary(salaries), 0);
    });
});