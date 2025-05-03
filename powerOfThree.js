// 20. Power of Three

function powerOfThree(n) {
  if (n === 1) {
    return true;
  }

  for (let i = 1; i <= n; i = i * 3) {
    console.log(i);
    if (i === n) {
      return true;
    }
  }
  return false;
}

console.log(powerOfThree(6));
