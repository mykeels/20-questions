var http = require("http");
const readlineSync = require("readline-sync");

// ES 6
function wordReverse(str = readlineSync.question("Enter a sentence: ")) {
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
  return newSentence.join("");
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(wordReverse());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
