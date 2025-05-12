//59. Plus One

function plusOne(digits) {
  //   let str = "";
  //   for (let i = 0; i < digits.length; i++) {
  //     str += digits[i];
  //   }
  //   return str.map(Number).toString().split("").map(Number);

  let toArr = digits.join("");

  return BigInt(toArr) + 1n.toString().split("").map(Number); // for BigInt add n after the number to recognize the BigInt
}

console.log(plusOne([4, 3, 2, 1]));
