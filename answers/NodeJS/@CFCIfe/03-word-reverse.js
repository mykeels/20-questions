const readlineSync = require("readline-sync");
// ES 6
function wordReverse(str = readlineSync.question("Enter a sentence: ")) {
  let arrayOfString = str.split(" "),
    newSentence = [],
    arrayLength = arrayOfString.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    let reversedStr = arrayOfString[i]
      .split("")
      .reverse()
      .join("");
    newSentence.push(reversedStr);
  }
  return newSentence.join(" ");
}

console.log(wordReverse());
