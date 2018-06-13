function pow(x,n) {
  let result = 1;
  for (let i=0 ; i < n ; i++) {
      result *= x;
  }
  return result;
}

let x = 5;
let n = 3;

if (n <= 0) {
  console.log(`Power ${n} is not supported,
   please enter an integer number greater than zero`);
} else {
  console.log( pow(x,n) );
}