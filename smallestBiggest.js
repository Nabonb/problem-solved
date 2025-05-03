// 23. Find smallest and biggest number

function smallestBiggest(n) {
  let sortedArr = n.sort();
  let arr = [];
  arr.push(sortedArr[0]);
  arr.push(sortedArr[n.length - 1]);
  return arr;
}

console.log(smallestBiggest([5, 3, 1, 2, 6]));
