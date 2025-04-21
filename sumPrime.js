// Sum all the prime numbers
function sumPrime(num) {
  let totalPrime = 0;
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    for (let j = 2; j < num; j++) {
      console.log(i, j);
      if (i === j) {
        totalPrime += i; //2,5,10
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return totalPrime;
}

console.log(sumPrime(6));
