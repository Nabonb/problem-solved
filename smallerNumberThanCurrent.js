//15. How many number are smaller than the current number

function smallerNumberThanCurrent(nums) {
  let count;
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    ans[i] = count;
  }
  return ans;
}

console.log(smallerNumberThanCurrent([7, 7, 7, 7]));
