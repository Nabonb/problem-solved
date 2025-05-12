//55. Remove duplicates from array

function removeDuplicates(nums) {
  let set = new Set(nums);
  let unique = [...set];

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  console.log(nums, unique);
  return unique.length;
}

console.log(removeDuplicates([1, 1, 2]));
