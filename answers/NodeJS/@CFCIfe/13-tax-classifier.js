var http = require("http");
const readlineSync = require("readline-sync");

taxClassifier = () => {
  let salary = readlineSync.questionInt("Enter your salary: ");
  if (Number(salary) !== NaN && Number(salary) > 0) {
    if (Number(salary) < 50000) {
      return `Tax: ${(5 / 100) * Number(salary)}`;
    }
    return Number(salary) < 200000
      ? `Tax: ${(10 / 100) * Number(salary)}`
      : `Tax: ${(15 / 100) * Number(salary)}`;
  }
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(taxClassifier());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
