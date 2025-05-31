// Print N to 1 by using backtrakcing
function backtracking2(i, n) {
  if (i > n) return;
  backtracking2(i + 1, n);
  console.log(i);
}

backtracking2(1, 4);
