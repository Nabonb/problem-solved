function pattern2(n) {
  let txt = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      txt += i + " ";
    }
    txt += "\n";
  }
  return txt;
}

console.log(pattern2(5));
