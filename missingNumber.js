//52. Missing Number

function missingNumber(nums) {
  let sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] !== i) {
      return i;
    }
  }
  return nums.length;
}

console.log(missingNumber([0, 1, 2]));
