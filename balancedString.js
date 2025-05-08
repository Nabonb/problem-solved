//44. Split a string into a balanced string

function splitString(s) {
  let rCount = 0;
  let lCount = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") lCount++;
    else if (s[i] === "R") rCount++;
    if (lCount === rCount) result++;
  }
  return result;
}

console.log(splitString("RLRRRLLRLL"));
