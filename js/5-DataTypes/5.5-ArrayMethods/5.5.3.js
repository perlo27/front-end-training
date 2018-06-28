// Filter range "in place"

function filterRangeInPlace(arr, a, b) {
  arr.forEach((item, idx, array) => {
    if (item < a || item > b) {
      array.splice(idx, 1);
    }
  });
}

const arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
