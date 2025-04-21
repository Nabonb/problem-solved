// 8. Inverted Half Pyramid

function halfPyramid(n) {
  let star = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }
  return star;
}

console.log(halfPyramid(6));
