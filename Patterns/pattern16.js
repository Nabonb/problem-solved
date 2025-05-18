function pattern16(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    for (
      let ch = "A".charCodeAt(0) + (n - 1) - (i - 1);
      ch <= "A".charCodeAt(0) + (n - 1);
      ch++
    ) {
      str += String.fromCharCode(ch) + " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern16(6));
