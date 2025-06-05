function factorialNumber(n) {
  if (n === 0) return 1;
  return n * factorialNumber(n - 1);
}

console.log(factorialNumber(4));
