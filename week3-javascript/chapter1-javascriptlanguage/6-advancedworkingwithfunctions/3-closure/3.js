let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();

// prints Hello, John. The variables in the sayHi() function call
// are found in the outer environments. If there was a phrase in the if
// block, this variable would be used instead of the one in the outer environment
