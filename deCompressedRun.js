//45. Decompressed run length encoded list

function deCompressedRunLength(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    //[1,1,2,3]
    let freq = nums[i]; //2
    let val = nums[i + 1]; //3
    for (let j = 0; j < freq; j++) {
      result.push(val);
    }
  }
  return result;
}

console.log(deCompressedRunLength([1, 2, 3, 4]));
