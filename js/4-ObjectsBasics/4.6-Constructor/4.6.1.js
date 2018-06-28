// Two functions – one object

const commonObj = {};

function A() {
  return commonObj;
}

function B() {
  return commonObj;
}

const a = new A();
const b = new B();

console.log(a === b); // true

