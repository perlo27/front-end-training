
// Is it possible to create functions A and B such as new A()==new B()?
let user = {};
function A() { return user };
function B() { return user };

let a = new A;
let b = new B;

console.log(a == b); // true