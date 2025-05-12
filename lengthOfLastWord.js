//58. Length of last word

function lengthOfLastWord(s) {
  //   let toArr = s.trim().replace(/\s+/g, " ").split(" ");
  //   console.log(toArr[toArr.length - 1].length);

  //OOORRRRRRRRRRRRR

  return s.trim().split(" ").pop().length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
