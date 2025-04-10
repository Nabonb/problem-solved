// Give a rectangular matrix of characters, add a border of asterisks(*) to it.
function addBorder(arr) {
  let border = "*".repeat(arr[0].length + 2);
  arr.unshift(border);
  arr.push(border);
  for (let i = 1; i < arr.length - 1; i++) {
    // arr[i] = "*".concat(arr[i], "*");
    arr[i] = "*" + arr[i] + "*";
  }
  return arr;
}

console.log(addBorder(["abc", "bdc"]));
