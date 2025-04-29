// 13. Richest Customer Wealth

function richestWealth(accounts) {
  let current;
  let sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    current = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      current = accounts[i][j] + current;
      //   console.log("current", current);
      if (sum < current) {
        sum = current;
      }
    }
  }
  return sum;
}

console.log(
  richestWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);

// var maxvalue=0;
//     for(var i=0; i<accounts.length; i++){
//         var sum=0;
//         for(var j=0; j<accounts[i].length; j++){
//             sum=sum+accounts[i][j]
//         }
//         maxvalue = Math.max(maxvalue,sum)
//     }
//     return maxvalue
