//Print 1 to n by backtracking
function backtracking1(i, n) {
  if (i < 1) return;
  backtracking1(i - 1, n);
  console.log(i);
}

backtracking1(4, 4);
