function pattern13(n) {
  let str = "";

  for (let i = n; i >= 1; i--) {
    for (let ch = "A".charCodeAt(0); ch < "A".charCodeAt(0) + i; ch++) {
      //   console.log(String.fromCharCode(ch));
      str += String.fromCharCode(ch) + " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern13(5));
