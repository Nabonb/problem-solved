// 42. Create a target array in given order

function createTargetArray(nums, index) {
  let targetArr = [];
  for (let i = 0; i < nums.length; i++) {
    targetArr.splice(index[i], 0, nums[i]);
  }
  return targetArr;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
