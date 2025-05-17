function pattern10(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    //For number
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    // For Space
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      str += " ";
    }
    //For number
    for (let j = i; j >= 1; j--) {
      str += j;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern10(5));
