function printDivisors(n) {
  //   let arr = [];
  //   for (let i = 1; i <= n; i++) {
  //     if (n % i === 0) {
  //       arr.push(i);
  //     }
  //   }
  //   return arr;
  //OORRRRRRRRRRRRRRRRRR In An Efficient Way
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push(i);
      if (n / i !== i) {
        arr.push(n / i);
      }
    }
  }
  return arr.sort((a, b) => a - b);
}

console.log(printDivisors(36));
