function pattern6(n) {
  let str = "";

  for (let i = n; i >= 1; i--) {
    //space
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    //star
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    //space
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern6(5));
