//49. Suffle String

function suffleString(s, indices) {
  let toArr = s.split("");
  let obj = {};

  for (let i = 0; i < indices.length; i++) {
    console.log(s[indices.indexOf(i)]); // or with this i can solve this problem. This is the alternative
    obj[indices[i]] = toArr[i];
  }
  return Object.values(obj).join("");
}

console.log(suffleString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
