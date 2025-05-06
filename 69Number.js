//36. Maximum 69 Number
// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

function maxNumber(num) {
  let toStr = num.toString();
  let count = 0;
  let tempStr = "";

  for (let i = 0; i < toStr.length; i++) {
    if (toStr[i] === "6" && count === 0) {
      tempStr = tempStr + "9";
      count = 1;
    } else {
      tempStr = tempStr + toStr[i];
    }
  }

  return parseInt(tempStr);
}

//OOOOOOOOOOOOOOOORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// function maxNumber(num) {
//   let toStr = num.toString();

//   for (let i = 0; i < toStr.length; i++) {
//     return parseInt(toStr.replace("6", "9"));
//   }
// }

console.log(maxNumber(66669));
