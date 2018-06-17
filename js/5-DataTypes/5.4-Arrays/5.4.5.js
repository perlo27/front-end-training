// A maximal subarray
let getMaxSubSum;
exports.getMaxSubSum = getMaxSubSum = function (arr) {
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    let maxSubSum = arr[i];
    let subSum = 0;
    for (let j = i; j < arr.length; j += 1) {
      subSum += arr[j];
      maxSubSum = Math.max(subSum, maxSubSum);
    }
    maxSum = Math.max(maxSubSum, maxSum);
    // console.log(`Sub sum : ${subSum}`);
    // console.log(`Max sub sum : ${maxSubSum}`);
  }
  // console.log(`Global max sum : ${maxSum}`);
  return maxSum;
}


// getMaxSubSum([-1, 2, 3, -9]); // 5
// getMaxSubSum([2, -1, 2, 3, -9]); // 6
// getMaxSubSum([-1, 2, 3, -9, 11]); // 11
// getMaxSubSum([-2, -1, 1, 2]); // 3
// getMaxSubSum([100, -9, 2, -3, 5]); // 100
// getMaxSubSum([1, 2, 3]); // 6
// getMaxSubSum([-1, -2, -3]); // -1
