function validPalindrome(i, str, n) {
  if (i >= n - i - 1) return true;
  if (str[i] !== str[n - i - 1]) return false;
  return validPalindrome(i + 1, str, n);
}
let str = "madam";
console.log(validPalindrome(0, str, str.length));
