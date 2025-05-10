//47. Contains Duplicate

function containsDuplicate(nums) {
  let arr = new Set(nums);
  return arr.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3]));
