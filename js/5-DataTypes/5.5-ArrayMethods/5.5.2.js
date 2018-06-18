// Filter range
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

const arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));
console.log(arr);
