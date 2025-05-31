//43. Fibonacci Number

function fibonacciNumber(n) {
  console.log(n);
  if (n === 0 || n === 1) return n;
  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log(fibonacciNumber(8));
