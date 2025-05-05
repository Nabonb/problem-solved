// 33. Clone a array => [1,2] = [1,2,[1,2]]

const cloneArray = (arr) => [...arr, arr];

console.log(cloneArray([1, 2]));
