function sumTo(n) {
    if (n == 1) {
        return 1;
    };
    return n + sumTo(n - 1);
}

console.log(sumTo(100));
let count = 0;
function makeCounter() {
    // let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
console.log( counter2() ); // ?
  console.log( counter2() ); // ?