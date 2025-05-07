//39. Check if two string array are equiavalent

function arrayEquiabalent(word1, word2) {
  return word1.join("") === word2.join("");
}

console.log(arrayEquiabalent(["abc", "d", "defg"], ["abcddefg"]));
