// Can I add a string property?
const str = 'Hello';
// str has created 'wrapper' that gets new property 'test' and assigned value of 5
str.test = 5; // (*)
// here 'str' has no 'test' property. It was destroyed
console.log(str.test); // Here str has created new test property
