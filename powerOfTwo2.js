//64. Power of Two updated

function powerOfTwoUpdated(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(powerOfTwoUpdated(12));
