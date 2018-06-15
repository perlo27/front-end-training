let user = {
    name: "John",
    money: 1000,

    /* [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }, */
    toString() {
        return `{name: "${this.name}"}`;
    },
    valueOf() {
        return this.money;
    }
};
function User(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("My name is: " + this.name);
    };
};
// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500



let john = new User("John");
john.sayHi;