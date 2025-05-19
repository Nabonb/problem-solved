function pattern18(n) {
  let str = "";

  for (let i = 1; i <= 2 * n - 1; i++) {
    //For Upper Part
    if (i <= n) {
      //For Starts
      for (let j = 1; j <= i; j++) {
        str += "*";
      }
      //For Spaces
      for (let j = 1; j <= 2 * n - 2 * i; j++) {
        str += " ";
      }
      //For Starts
      for (let j = 1; j <= i; j++) {
        str += "*";
      }
      str += "\n";
    }
    //For Lower Part
    else {
      //For Start
      for (let j = 1; j <= 2 * n - i; j++) {
        str += "*";
      }
      //For Space
      for (let j = 1; j <= i - (2 * n - i); j++) {
        str += " ";
      }

      //For Start
      for (let j = 1; j <= 2 * n - i; j++) {
        str += "*";
      }
      str += "\n";
    }
  }
  return str;
}

console.log(pattern18(6));
