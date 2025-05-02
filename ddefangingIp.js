//16. Defanging an IP Address

function defangingIp(address) {
  let toArr = address.split("");
  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] === ".") {
      toArr[i] = "[.]";
    }
  }
  return toArr.join("");
}

console.log(defangingIp("255.100.50.0"));
