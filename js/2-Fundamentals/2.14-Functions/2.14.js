"use strict";

// Is "else" required?
// Because of return keywords execution flow does not differ.

// Rewrite the function using '?' or '||'
function checkAgeTernaryOperatorVersion(age) {
  return age > 18 ? true : Math.random() >= 0.5;  // random_boolean = Math.random() >= 0.5;
}

function checkAgeBinaryOrVersion(age) {
  return age > 18 || Math.random() >= 0.5;  // random_boolean = Math.random() >= 0.5;
}

let randomCeiling = 30;
let age = Math.floor((Math.random() * randomCeiling) + 1);

console.log(age);
console.log(checkAgeTernaryOperatorVersion(age));
console.log(checkAgeBinaryOrVersion(age));


// Function min(a, b)
function min(a,b) {
  return a < b ? a : b;
}

let randomCeiling1 = 30;
let a = Math.floor((Math.random() * randomCeiling) + 1);
let b = Math.floor((Math.random() * randomCeiling) + 1);

console.log(a);
console.log(b);
console.log(min(a, b));

// Function pow(x,n)
function pow(x,n) {
  return x ** n;
}

console.log(pow(3,4));
