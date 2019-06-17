const readlineSync = require("readline-sync");

// ES 6
module.exports = function wordReverse(
  str = readlineSync.question("Enter a sentence: ")
) {
  let arrayOfString = str.split(" "),
    newSentence = [],
    arrayLength = arrayOfString.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const reversedStr = arrayOfString[i]
      .split("")
      .reverse()
      .join("");
    newSentence.push(reversedStr);
  }
  return newSentence;
};
