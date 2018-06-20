function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "John"
});

console.log(bound.test); //undefined. The result of bind is another object. It does not have the test property.