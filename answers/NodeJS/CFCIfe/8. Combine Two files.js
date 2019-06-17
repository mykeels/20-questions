var fs = require("fs");
var text1 = fs
  .readFileSync("./sample1.txt")
  .toString()
  .split("\n");
var text2 = fs
  .readFileSync("./sample2.txt")
  .toString()
  .split("\n");

var firstText = text1.map(text => text.trim());
var secondText = text2.map(text => text.trim());

module.exports = function combineTwoText() {
  arr = [];
  for (let i = 0; i < firstText.length; i++) {
    let jointText = firstText[i] + " " + secondText[i];
    arr.push(jointText);
  }
  return arr;
};
