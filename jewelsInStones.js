// 46. Jewels And Stones

//function jewelsInStones(jewels, stones) {
//   let splitted = jewels.split("");
//   let count = 0;

//   for (let i = 0; i < splitted.length; i++) {
//     for (let j = 0; j < stones.length; j++) {
//       if (stones[j] === splitted[i]) {
//         count++;
//       }
//     }
//   }
//   return count;
//}

//OOOOOOOOOOORRRRRRRRRRRRRRRRRR

function jewelsInStones(jewels, stones) {
  let count = 0;
  let mappedJewels = new Set(jewels);
  console.log(mappedJewels);

  for (let i = 0; i < stones.length; i++) {
    if (mappedJewels.has(stones[i])) {
      count++;
    }
  }
  return count;
}

console.log(jewelsInStones("aA", "aAAbbbb"));
