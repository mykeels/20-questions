var http = require("http");
var fs = require("fs");

http
  .createServer(function(req, res) {
    fs.readFile("./data/07-read-line-by-line.txt", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
