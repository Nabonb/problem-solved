//51. Single Number

function singleNumber(nums) {
  let sortedNum = nums.sort();

  for (let i = 0; i < sortedNum.length; i++) {
    if (sortedNum[i] === sortedNum[i + 1]) {
      i++;
    } else {
      return sortedNum[i];
    }
  }
}

console.log(singleNumber([4]));
