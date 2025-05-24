function countDigits(n) {
  //   let count = 0;

  //   while (n > 0) {
  //     n = Math.floor(n / 10);
  //     count++;
  //   }
  //   return count;

  //OOOOOOOOOOORRRRRRRRRRRRRRRRRRRRRRR

  let count = Math.floor(Math.log10(n) + 1); //Log base 10 beacuse 10 dia divide hocche if its if divided by 2 it is going to be log base 2
  return count;
}
4;

console.log(countDigits(24));
