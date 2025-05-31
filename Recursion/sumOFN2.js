//Sum of N numbers in functional way

function sumOfN2(n) {
  if (n === 0) return 0;

  return n + sumOfN2(n - 1);
}

console.log(sumOfN2(3));
