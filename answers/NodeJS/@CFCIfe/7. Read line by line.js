function readFile(file) {
  fetch(file)
    .then(res => res.txt)
    .then(content => console.log(content));
}

//Note: fetch() doesn't support file: in chrome.Try to use expressJS or Chrome Web server
var fs = require("fs");
var text = fs.readFileSync("./test.txt");
var textByLine = text.toString().split("\n");
textByLine;
