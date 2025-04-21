//7. Hollow Rectengle

function hollowRectengle(rows, cols) {
  let star = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (i === 1 || i === rows) {
        star += "*";
      } else {
        if (j > 1 && j < cols) {
          star += " ";
        } else if (j === 1 || j === cols) {
          star += "*";
        }
      }
    }
    star += "\n";
  }
  return star;
}

console.log(hollowRectengle(5, 8));
