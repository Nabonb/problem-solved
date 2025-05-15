//63. Climbing Stairs

function climbingStairs(n) {
  let first = 1;
  let second = 2;

  if (n < 3) return n;

  for (let i = 3; i <= n; i++) {
    let currentStep = first + second;
    first = second;
    second = currentStep;
  }
  return second;
}

console.log(climbingStairs(5));
