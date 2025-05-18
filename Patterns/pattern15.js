function pattern15(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    //For Space
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    let start = "A".charCodeAt(0);
    //For Alphabet
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += String.fromCharCode(start);
      if (j < i) {
        start++;
      } else {
        start--;
      }
    }

    //For Space
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern15(5));
