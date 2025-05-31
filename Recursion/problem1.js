let count = 0;
function problem1() {
  if (count === 3) return;
  console.log(count);
  count++;
  problem1();
}

problem1();
