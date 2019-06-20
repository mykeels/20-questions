var http = require("http");
const readlineSync = require("readline-sync");

convertFromDecimal = () => {
  let num = readlineSync.questionInt("Enter your base 10 number: ");
  let base = readlineSync.questionInt("Enter base to convert to: ");
  let answer = parseInt(num, 10).toString(base);
  return `${num} in base 10 is ${answer} in base ${base}`;
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(convertFromDecimal());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
