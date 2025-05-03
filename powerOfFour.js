//21. Power of Four

function powerOfFour(n) {
  if (n === 1) {
    return true;
  }

  for (let i = 1; i <= n; i = i * 4) {
    if (i === n) {
      return true;
    }
  }
  return false;
}

console.log(powerOfFour(1));
