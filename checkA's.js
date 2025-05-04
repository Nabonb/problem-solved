//28. Check if all A's are before all B's

function checkA(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "b" && str[i + 1] === "a") {
      return false;
    }
  }
  return true;
}
console.log(checkA("abab"));
