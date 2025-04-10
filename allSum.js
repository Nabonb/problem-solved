// Write a function that returns the sum of all numbers regardless of # of params.
function allSum(...params) {
  let total = 0;
  params.forEach((elem) => {
    total += elem;
  });
  return total;
}

console.log(allSum(1, 2, 3));
