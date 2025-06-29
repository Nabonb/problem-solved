//Euclidean algorithm to find the gcd

function gcdEuclidean(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) {
      n1 = n1 % n2;
    } else {
      n2 = n2 % n1;
    }
  }
  if (n1 === 0) return n2;
  else return n1;
}

console.log(gcdEuclidean(11, 13));
