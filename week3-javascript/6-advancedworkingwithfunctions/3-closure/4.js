function sum(n) {
  return function(m) {
      return m + n;
  }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
