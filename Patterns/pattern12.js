function pattern12(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    for (let ch = "A".charCodeAt(0); ch < "A".charCodeAt(0) + i; ch++) {
      //   console.log(String.fromCharCode(ch));
      str += String.fromCharCode(ch) + " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern12(5));
