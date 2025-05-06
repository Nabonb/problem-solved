//34. Goal Parser Interpretatio

function goalParser(command) {
  let temp = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(" && command[i + 1] === ")") {
      temp = temp + "o";
      i = i + 1;
    } else if (command[i] === "(" && command[i + 1] === "a") {
      temp += "al";
      i = i + 2;
    } else if (command[i] === "G") {
      temp += "G";
    }
  }
  return temp;
}

console.log(goalParser("(al)G(al)()()G"));
