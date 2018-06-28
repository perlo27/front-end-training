// Reverse the array

function reverse(arr) {
  // console.log(arr);
  for (let i = 0; i < Math.floor(arr.length / 2); i += 1) {
    const leftIdx = i;
    const rightIdx = -i - 1;
    const leftValue = arr.slice(leftIdx, leftIdx + 1)[0];
    const rightValue = (rightIdx === -1 ?
      arr.slice(rightIdx) :
      arr.slice(rightIdx, rightIdx + 1))[0];

    arr.splice(rightIdx, 1, leftValue);
    arr.splice(leftIdx, 1, rightValue);
  }
}

const arr = [5, 3, 8, 1, 3];
console.log(`Before reverse:\t ${arr}`);
reverse(arr);
console.log(`After reverse:\t ${arr}`);


console.log('#############################');
console.log('SORT in reverse order:');
console.log(`Before sort:\t ${arr}`);
arr.sort((a, b) => b - a);
console.log(`After sort:\t ${arr}`);
