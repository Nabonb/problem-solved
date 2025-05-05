//29. Convert a object to an array

function objToArray(obj) {
  //   return Object.keys(obj).map((k) => [k, obj[k]]);
  // OOOORRRRRRRRR
  return Object.entries(obj);
}

console.log(objToArray({ a: 2, b: 3 }));
