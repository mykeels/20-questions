let fs = require("fs");

function combineTwoText() {
  let text1 = fs
      .readFileSync("./data/08-combine-two-files-1.txt")
      .toString()
      .split("\n"),
    text2 = fs
      .readFileSync("./data/08-combine-two-files-2.txt")
      .toString()
      .split("\n"),
    firstText = text1.map(text => text.trim()),
    secondText = text2.map(text => text.trim()),
    arr = [];

  for (let i = 0; i < firstText.length; i++) {
    let jointText = firstText[i] + " " + secondText[i];
    arr.push(jointText);
  }
  return arr.join("\n");
}

console.log(combineTwoText());
