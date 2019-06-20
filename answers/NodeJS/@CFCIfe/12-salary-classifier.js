var http = require("http");
const readlineSync = require("readline-sync");

salaryClassifier = () => {
  let salary = readlineSync.questionInt("Enter your salary: ");
  if (Number(salary) !== NaN && Number(salary) > 0) {
    if (Number(salary) < 50000) {
      return "Basic Earner";
    }
    return Number(salary) < 200000 ? "Mid Earner" : "High Earner";
  }
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(salaryClassifier());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
