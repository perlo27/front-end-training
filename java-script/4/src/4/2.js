
let calculator = {
    read: function () {
        this.a = +prompt("Enter first value: ");
        this.b = +prompt("Enter second value: ");
    },

    sum: function () {
        return this.a + this.b;
    },

    mul: function () {
        return this.a * this.b;
    }

}