//11.Roman to Integer
function romanToInteger(s) {
  let sum = 0;
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //   console.log(roman[s[0]]);
  for (let i = 0; i < s.length; i++) {
    let current = roman[s[i]]; //I=1, i =2, L=50, i=3,V=5
    let next = roman[s[i + 1]]; //x =10,V=5

    if (current < next) {
      sum = next - current + sum; //9
      i++;
    } else {
      sum = current + sum; //50+9=59+5=64
    }
  }
  return sum;
}

console.log(romanToInteger("IXLV"));
