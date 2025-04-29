//12. Build Array from Permutation

function permutation(nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}

console.log(permutation([5, 0, 1, 2, 3, 4]));
