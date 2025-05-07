//41. Maximum Number of words you can type

function canBeTypedWords(text, brokenLetters) {
  let textArr = text.split(" ");
  let letterArr = brokenLetters.split("");
  let count = 0;
  for (let i = 0; i < textArr.length; i++) {
    for (let j = 0; j < letterArr.length; j++) {
      if (textArr[i].toString().includes(letterArr[j])) {
        count++;
        break;
      }
    }
  }
  return textArr.length - count;
}

console.log(canBeTypedWords("leet code", "t"));
