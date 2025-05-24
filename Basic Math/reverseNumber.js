function reverseNumber(n) {
  let lastDigit = 0;
  let revNum = 0;

  while (n > 0) {
    lastDigit = n % 10;
    n = Math.floor(n / 10);
    revNum = revNum * 10 + lastDigit;
  }
  return revNum;
}

console.log(reverseNumber(1));
