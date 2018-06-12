console.log("\nExercise 1 : https://javascript.info/function-basics#is-else-required\n");
let age = 16;
console.log("Result of the first function for age "+age);
console.log(checkAge(age));
console.log("Result of the first function for age "+age);
console.log(checkAge2(age));


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return 'Did parents allow you?';
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return 'Did parents allow you?';
}

// they both work the same
