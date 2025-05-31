//Sum of N numbers in parameterised way

function sumOfN1(i, sum) {
  if (i < 0) {
    console.log(sum);
    return;
  }
  sumOfN1(i - 1, sum + i);
}

sumOfN1(4, 0);
