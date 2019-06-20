var http = require("http");
const readlineSync = require("readline-sync");

convertToDecimal = () => {
  let base = readlineSync.questionInt(
    "What base are you converting to base 10? "
  );
  let num = readlineSync.questionInt("Enter the base Number to convert: ");
  let answer = parseInt(num, base).toString(10);
  return `${num} in base ${base} is ${answer} in base 10`;
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(convertToDecimal());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
