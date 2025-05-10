//48. Count of matches in tournament

function numberOfMatches(n) {
  let totalMatch = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      totalMatch += n / 2;
      n = n / 2;
    } else {
      totalMatch += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }
  return totalMatch;
}

console.log(numberOfMatches(7));
