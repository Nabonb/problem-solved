//40. Maximum Number of words found in sentences

function mostWordsFound(sentences) {
  let max = 0;

  for (let i = 0; i < sentences.length; i++) {
    if (max < sentences[i].split(" ").length) {
      max = sentences[i].split(" ").length;
    }
  }
  return max;
}

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
