//32. Box Count with step number ==> if even then subtract 1 and if odd add +3

function boxCount(step) {
  let boxes = 0;

  for (let i = 1; i <= step; i++) {
    i % 2 === 0 ? (boxes -= 1) : (boxes += 3);
  }
  return boxes;
}

console.log(boxCount(2));
