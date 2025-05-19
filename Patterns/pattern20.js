function pattern20(n) {
  let str = "";

  for (let i = 1; i <= 2 * n - 1; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      let top = i - 1;
      let left = j - 1;
      let bottom = 2 * n - i - 1;
      let right = 2 * n - j - 1;

      //   let minDist = Math.min(top, bottom, left, right);
      //   str += n - minDist;
      str += n - Math.min(top, bottom, right, left);
    }
    str += "\n";
  }
  return str;
}

console.log(pattern20(4));
