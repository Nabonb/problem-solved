// 14. Running Sum of 1D array

function runningSum(nums) {
  let runningSum = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]; //1
    runningSum[i] = sum;
  }
  return runningSum;
}

console.log(runningSum([1, 1, 1, 1, 1]));
