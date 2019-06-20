var http = require("http");
var fs = require("fs");

var readlineSync = require("readline-sync");
function rollCall() {
  var text = fs.readFileSync("./data/19-attendance-register.txt");
  var names = text.toString().split(",\r\n");
  let attendance = [];
  names.forEach(name => {
    var userResp = readlineSync.question(`Is ${name} in class (Yes/No): `);
    if (userResp.toLowerCase() == "yes") {
      present =
        name.length >= 7 ? `${name}:\t &#x2705;` : `${name}:\t\t &#x2705;`;
      attendance.push(present);
    } else {
      absent =
        name.length >= 4 ? `${name}:\t &#x274C;` : `${name}:\t\t &#x274C;`;
      attendance.push(absent);
    }
  });
  return attendance.join("\n");
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(rollCall());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
