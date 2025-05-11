//54. Selft Dividing Numbers

function selfDividingNumbers(left, right) {
  let finalArr = [];
  //   console.log(left.toString().split(""));
  for (let i = left; i <= right; i++) {
    let newArr = i.toString().split("");
    if (newArr.includes("0")) continue;

    let isSelfDivided = true;

    for (let n of newArr) {
      //1,1
      if (i % n !== 0) {
        isSelfDivided = false;
        break;
      }
    }
    if (isSelfDivided) {
      finalArr.push(i);
    }
  }
  return finalArr;
}

console.log(selfDividingNumbers(1, 22));
