//THIS IS VERY IMPORTANT TO UNDERSTAND THE MATH

function extractionDigits(n) {
  let lastDigit;

  while (n > 0) {
    lastDigit = n % 10;
    n = Math.floor(n / 10);
    console.log(lastDigit);
  }
}

console.log(extractionDigits(6758));
