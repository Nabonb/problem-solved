//35. Transpose  Matrix
// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

function transMatrix(matrix) {
  let transpose = [];
  console.log(matrix.length);
  for (let col = 0; col < matrix[0].length; col++) {
    let rowArr = [];
    for (let row = 0; row < matrix.length; row++) {
      // console.log(matrix[col][row]);
      rowArr.push(matrix[row][col]);
    }
    transpose.push(rowArr);
  }
  return transpose;
}

console.log(
  transMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
