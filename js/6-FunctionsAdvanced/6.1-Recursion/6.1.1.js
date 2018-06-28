// Sum all numbers till the given one

function sumToVer1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}

function sumToVer2(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToVer2(n - 1);
}

// SUM = n(a1 + an)/2
function sumToVer3(n) {
  // eslint-disable-next-line no-mixed-operators
  return n * (n + 1) / 2;
}

console.log(sumToVer1(100)); // 5050
console.log(sumToVer2(100)); // 5050
console.log(sumToVer3(100)); // 5050
