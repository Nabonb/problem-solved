// 18. Add up the numbers from single number

function addNumberFromSingle(num) {
  let sum = 0;
  if (num === 0) return 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(addNumberFromSingle(4));
