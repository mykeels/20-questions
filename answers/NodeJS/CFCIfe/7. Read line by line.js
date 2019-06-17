var fs = require("fs");

module.exports = function readText() {
  var text = fs.readFileSync("./sample1.txt");
  var textByLine = text.toString().split("\n");
  return textByLine.map(e => e.trim());
};
