// Copy and sort array

function copySorted(arr) {
  return arr.slice().sort();
}

const arr = ['HTML', 'JavaScript', 'CSS'];
const sorted = copySorted(arr);

console.log(`Sorted =\t ${sorted}`);
console.log(`Source array =\t ${arr}`);
