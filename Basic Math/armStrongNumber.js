//You are given a 3-digit number n, Find whether it is an Armstrong number or not.

// An Armstrong number of three digits is a number such that the sum of the cubes of its digits is equal to the number itself. 371 is an Armstrong number since 33 + 73 + 13 = 371.

function armStrongNumber(n) {
  let temp = n;
  let lasDigit = 0;
  let sum = 0;

  while (n > 0) {
    lasDigit = n % 10;
    sum = sum + Math.pow(lasDigit, 3);
    n = Math.floor(n / 10);
  }
  return sum === temp;
}

console.log(armStrongNumber(372));
