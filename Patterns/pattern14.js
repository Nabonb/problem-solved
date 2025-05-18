function pattern14(n) {
  let str = "";
  let char;

  for (let i = 0; i < n; i++) {
    char = "A".charCodeAt(0) + i;
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(char) + " ";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern14(5));
