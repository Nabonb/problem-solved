// 25. Number system

function decToBinOctHex(number, system) {
  let str = "";
  let temp = number;

  while (number > 0) {
    let reminder = number % system;
    str = reminder + str;
    number = Math.floor(number / system);
  }
  let forInt = parseInt(str);
  if (system === 16 && !(temp >= 16)) {
    if (forInt === 10) forInt = "A";
    else if (forInt === 11) forInt = "B";
    else if (forInt === 12) forInt = "C";
    else if (forInt === 13) forInt = "D";
    else if (forInt === 14) forInt = "E";
    else if (forInt === 15) forInt = "F";
  }
  return forInt;
}

console.log(decToBinOctHex(14, 2));

// FOOOOOOOOOOOOR EAAAAASYYYYYYYY MEEETHOOOOOODDDDDDDDDDD

// const decToBinOctHex = (number, system) => number.toString(system);

// console.log(decToBinOctHex(10, 8));
