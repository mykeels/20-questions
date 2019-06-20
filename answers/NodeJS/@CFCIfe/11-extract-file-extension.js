var http = require("http");
var readlineSync = require("readline-sync");

function extractExt() {
  var extension = readlineSync.question("Enter Valid Path: ");
  var extName = extension.split(".");
  return `Extension name is .${extName[extName.length - 1]}`;
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(extractExt());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
