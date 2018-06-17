"use strict";

// Last loop value
let i = 3;
while (i) {
  console.log(i--); // 3 2 1
}

// Which values shows the while?
let i1 = 0;
while (++i1 < 5) console.log( i1 ); // 1 2 3 4
i1 = 0;
while (i1++ < 5) console.log( i1 ); // 1 2 3 4 5

// Which values get shown by the "for" loop?
for (let i2 = 0; i2 < 5; i2++) console.log( i2 ); // 0 1 2 3 4
for (let i3 = 0; i3 < 5; ++i3) console.log( i3 ); // 0 1 2 3 4

// Output even numbers in the loop
for(let i4 = 2; i4 <=10; i4++){
  if (i4 % 2 == 0) {
    console.log(i4);
  }
}

// Replace "for" with "while"
let i5 = 0;
while (i5 < 3) {
  console.log( `number ${i5}!` );
  i5++;
}

// Repeat until the input is correct
let number;
do {
  // number = prompt("Insert number.", 0);
  let randomCeiling = 150;
  number = Math.floor((Math.random() * randomCeiling) + 1); // HINT random number <1,randomCeiling)
} while (number && number <= 100);  // HINT when number is null the number <= 100 is evaluated as 0 <= 100; binary AND seeks for "first false"

// Output prime numbers
let range = 10;
for (let i = 2; i <= range; i++) {
  let isPrime = true;
  for(let j = 2; j < i; j++) {
    if (i % j == 0){ // not a prime
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
