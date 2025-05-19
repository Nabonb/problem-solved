function pattern17(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    //For starts
    for (let j = 1; j <= n - i + 1; j++) {
      str += "*";
    }
    //For Spaces
    for (let j = 1; j <= (i - 1) * 2; j++) {
      str += " ";
    }
    //For starts
    for (let j = 1; j <= n - i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  for (let i = 1; i <= n; i++) {
    //For Star
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    //For Space
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      str += " ";
    }
    //For Star
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern17(5));
