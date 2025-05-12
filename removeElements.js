//56. Remove Elements

function removeElements(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i = i - 2;
    }
  }
  return nums;
}

console.log(removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2));
