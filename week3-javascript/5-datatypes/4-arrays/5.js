function getMaxSubSum(arr) {
  let maxSum = 0;
  let maxSumStartingIndex = 0;
  let maxSumEndIndex = 0;
  let currentSum = 0;
  let sums = [];

  for(let i = 0; i < arr.length; i++) {
      let element = arr[i];

      if(i > 0 && sums[i-1].sum >= 0) {
        sums[i] = {startingIndex:sums[i-1].startingIndex, sum:sums[i-1].sum+element};
      } else {
        sums[i] = {startingIndex:i, sum:element};
      }

      if(sums[i].sum >= maxSum) {
        maxSum = sums[i].sum;
        maxSumStartingIndex = sums[i].startingIndex;
        maxSumEndIndex = i;
      }
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
