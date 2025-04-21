// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.

function isSequence(inpArray) {
  for (let i = 1; i < inpArray.length; i++) {
    if (inpArray[i] < inpArray[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSequence([1, 3]));
console.log(isSequence([1, 2, 3, 4, 1]));
console.log(isSequence([4, 1, 3, 2]));
console.log(isSequence([1, 2, 3, 4]));
