//37. Valid Parentheses

function validParen(s) {
  let p = "() {} []";
  let arr = [];
  let i = 0;

  while (i < s.length) {
    arr.push(s[i]);
    let open = arr[arr.length - 2];
    let close = arr[arr.length - 1];
    let merged = open + close;
    if (p.includes(merged)) {
      arr.pop();
      arr.pop();
    }
    i++;
  }
  return arr.length === 0;
}

console.log(validParen("()[]{"));
