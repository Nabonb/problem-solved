//53. Majority Element

function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  let index = Math.floor(nums.length / 2);
  return nums[index];
}

console.log(majorityElement([1, 1, 2, 2, 3, 3, 3]));
