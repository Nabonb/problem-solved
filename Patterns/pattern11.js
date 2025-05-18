function pattern11(n) {
  let str = "";
  let start = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += start + " ";
      start++;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern11(5));
