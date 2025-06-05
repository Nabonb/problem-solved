function reverseArray(i, arr, n) {
  if (i >= n - 1 - i) return;
  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  reverseArray(i + 1, arr, n);
}
let arr = [1, 2, 3, 4, 5, 6];
reverseArray(0, arr, arr.length);
console.log(arr);
