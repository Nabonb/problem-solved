// 9. Minimum Sum of Four Digit Number After Splitting Digits

function minSum(num) {
  let splitted = num.toString().split("").sort();
  let res =
    Number(splitted[0] + splitted[2]) + Number(splitted[1] + splitted[3]);
  return res;
}

console.log(minSum(2932));
