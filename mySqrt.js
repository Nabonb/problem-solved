//61. Sqrt(x)

function mySqrt(x) {
  // let sqrt = Math.sqrt(x);
  // return Math.floor(sqrt);
  let ans = 0;

  for (let i = 1; i <= x; i++) {
    if (i * i <= x) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
}

console.log(mySqrt(0));
