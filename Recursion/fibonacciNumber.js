function fibo(n) {
  if (n <= 1) return n;
  let last = fibo(n - 1);
  let secondLast = fibo(n - 2);
  return last + secondLast;
}

console.log(fibo(5));
