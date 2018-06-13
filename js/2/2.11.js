"use strict";

// HINT: console.log and console.log return undefined

// What's the result of OR?
console.log( null || 2 || undefined );  // 2

// What's the result of OR'ed console.logs?
console.log( console.log(1) || 2 || console.log(3) ); // 1 and 2;

// What is the result of AND?
console.log( 1 && null && 2 ); // null

// What is the result of AND'ed console.logs?
console.log( console.log(1) && console.log(2) );  // 1 and undefined

// The result of OR AND OR
console.log( null || 2 && 3 || 4 ); // 3

// Check the range between
let age = 44;
// if (age >= 14 && age <= 90)
console.log(age >= 14 && age <= 90);

// Check the range outside
// if (age < 14 || > 90)
console.log(age < 14 || age > 90);
// if (!(age >= 14 && <=90))
console.log(!(age >= 14 && age <=90));

// A question about "if"
if (-1 || 0) console.log( 'first' );  // first
if (-1 && 0) console.log( 'second' ); // <empty_output>
if (null || -1 && 1) console.log( 'third' );  // third
