function pattern1(n) {
  let txt = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      txt += j + " ";
    }
    txt += "\n";
  }
  return txt;
}

console.log(pattern1(5));
