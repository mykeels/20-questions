let http = require("http");
let fs = require("fs");

function combineTwoText() {
  let text1 = fs
    .readFileSync("./data/08-combine-two-files-1.txt")
    .toString()
    .split("\n");
  let text2 = fs
    .readFileSync("./data/08-combine-two-files-2.txt")
    .toString()
    .split("\n");

  let firstText = text1.map(text => text.trim());
  let secondText = text2.map(text => text.trim());
  arr = [];
  for (let i = 0; i < firstText.length; i++) {
    let jointText = firstText[i] + " " + secondText[i];
    arr.push(jointText);
  }
  return arr.join("\n");
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(combineTwoText());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
