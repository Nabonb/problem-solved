// 10. Palindrome Number
function isPalindrome(num) {
  let numtoString = num.toString();
  let ans;

  for (let i = 0; i < numtoString.length; i++) {
    if (numtoString[i] === numtoString[numtoString.length - 1 - i]) {
      ans = true;
    } else {
      return false;
    }
  }
  return ans;
}

console.log(isPalindrome(-11));
