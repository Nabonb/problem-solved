function palindromeNumber(x) {
  let temp = x;
  let lasDigit = 0;
  let reversedNumber = 0;

  while (x > 0) {
    lasDigit = x % 10; // IT gives the last digit
    x = Math.floor(x / 10); // it gives the other digits excluding last digit
    reversedNumber = reversedNumber * 10 + lasDigit; // Here the number is stored reverse
  }
  return temp === reversedNumber;
}

console.log(palindromeNumber(123));
