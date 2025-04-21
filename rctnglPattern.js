// 6. Rectengle Pattern
function rectenglePattern(rows, cols) {
  let star = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      star += "*";
    }
    star += "\n";
  }
  return star;
}

console.log(rectenglePattern(5, 8));
