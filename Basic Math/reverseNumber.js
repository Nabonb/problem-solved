function reverseNumber(x) {
  //   let lastDigit = 0;
  //   let revNum = 0;

  //   while (x > 0) {
  //     lastDigit = x % 10;
  //     x = Math.floor(x / 10);
  //     revNum = revNum * 10 + lastDigit;
  //   }
  //   return revNum;

  //OOOOOOORRRRRR LEETCODEEE MEDIUM PROBLEM SOLIUTION
  let reversed = 0;
  if (x < 0) {
    reversed = Number(x.toString().slice(1).split("").reverse().join("") * -1);
  } else {
    reversed = Number(x.toString().split("").reverse().join(""));
  }
  if (reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) return 0;
  return reversed;
}

console.log(reverseNumber(1534236469));
