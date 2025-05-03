// 19. Power of Two

function powerOfTwo(n) {
  if (n === 1) {
    return true;
  }
  for (let i = 1; i <= n; i *= 2) {
    if (i === n) {
      return true;
    }
  }
  return false;
}

console.log(powerOfTwo(12));
