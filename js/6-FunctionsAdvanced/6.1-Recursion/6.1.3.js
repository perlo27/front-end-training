// Fibonacci numbers

function fibVer1(n) { // very slow because of duplicated calculation
  return n <= 1 ? n : fibVer1(n - 1) + fibVer1(n - 2);
}

console.log(fibVer1(3)); // 2
console.log(fibVer1(7)); // 13
// fib(77); // will be extremely slow!

function fibVer2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibVer2(3)); // 2
console.log(fibVer2(7)); // 13
console.log(fibVer2(77)); // 5527939700884757
