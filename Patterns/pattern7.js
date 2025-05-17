//This is the combination of pattern 5 and pattern 6

function pattern5(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    //space
    for (let j = 1; j <= n - i; j++) {
      //5-1=4
      str += " ";
    }
    //star
    for (let j = 1; j <= i * 2 - 1; j++) {
      str += "*";
    }
    //space
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}
function pattern6(n) {
  let str = "";

  for (let i = n; i >= 1; i--) {
    //space
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    //star
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    //space
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern5(5) + pattern6(5));
