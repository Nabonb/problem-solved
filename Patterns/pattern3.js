function pattern3(n) {
  let str = "";

  for (let i = n; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern3(4));
