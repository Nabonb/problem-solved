//Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.

function elementToReplace(inputArray, elementToReplace, subtractionElem) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      console.log(element);
      inputArray[index] = subtractionElem;
    }
  });
  console.log(inputArray);
}

elementToReplace([1, 2, 1], 1, 3);
