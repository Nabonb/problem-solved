function findGcd(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let first = sortedNums[0];
  let last = sortedNums[sortedNums.length - 1];

  while (first > 0 && last > 0) {
    if (first > last) {
      first = first % last;
    } else last = last % first;
  }

  if (first === 0) return last;
  else return first;
}

console.log(findGcd([3, 3]));
