function pattern9(n) {
  let str = "";
  let start = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) start = 0;
    else start = 1;
    for (let j = 1; j <= i; j++) {
      str += start;
      start = 1 - start;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern9(5));
