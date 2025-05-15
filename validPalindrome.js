//62. Valid Palindrome

function validPalindrome(s) {
  let rmvString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let rmvStringReversed = s
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  //   console.log(rmvString);

  return rmvString === rmvStringReversed;
}

console.log(validPalindrome("ab_a"));
