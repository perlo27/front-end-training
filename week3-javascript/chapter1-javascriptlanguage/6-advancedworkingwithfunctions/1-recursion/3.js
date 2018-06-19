function fib(n) {
  let fibLastTwo = [0, 1];

  for(let i = 1; i < n; i++) {
      let nextFibonacci = fibLastTwo[0] + fibLastTwo[1];
      fibLastTwo = [fibLastTwo[1], nextFibonacci];
  }
  return fibLastTwo[1];
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
