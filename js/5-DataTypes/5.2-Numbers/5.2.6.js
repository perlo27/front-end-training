// A random number from <min,max>

function randomInteger(min, max) {
  // (max - min + 1) - the '1' is responsible for closed range
  // eslint-disable-next-line no-mixed-operators
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
