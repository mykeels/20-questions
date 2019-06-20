var http = require("http");
const readlineSync = require("readline-sync");

compoundInterest = () => {
  let principal = readlineSync.questionInt("Enter Principal: "),
    rate = readlineSync.questionInt("Enter rate: "),
    time = readlineSync.questionInt("Enter Time (in years): "),
    simpleInterest = (principal * rate * time) / 100,
    arr = [];
  for (let i = 1; i <= Number(time); i++) {
    var interest = (principal * rate) / 100;
    var statement = "Interest gained in year " + i + " is " + interest;
    arr.push(statement);
  }
  return [
    "The simple interest at the end of " + time + " years is: " + simpleInterest
  ].concat(arr);
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(compoundInterest());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
