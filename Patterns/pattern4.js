function pattern4(n) {
  let str = "";
  for (let i = n; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern4(5));
