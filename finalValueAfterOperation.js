//38. Final Value of Variable After Performing Operations

function finalValue(operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == "--X" || operations[i] == "X--") x--;
    else x++;
  }
  return x;
}

console.log(finalValue(["--X", "X++", "X++"]));
