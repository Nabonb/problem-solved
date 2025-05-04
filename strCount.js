// 26. String Count

const stringCount = (str) => {
  let count = str.split("potato");
  return count.length - 1;
};

console.log(stringCount("potatoespotatopotatopotatoe"));
