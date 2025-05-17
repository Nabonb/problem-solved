function pattern8(n) {
  let str = "";

  for (let i = 1; i <= n * 2 - 1; i++) {
    //Upper part
    if (i <= n) {
      for (let j = 1; j <= i; j++) {
        str += "*";
      }
    }
    //Lower Part
    if (i > n) {
      for (let j = 2 * n - i; j >= 1; j--) {
        str += "*";
      }
    }

    str += "\n";
  }
  return str;
}

console.log(pattern8(5));
