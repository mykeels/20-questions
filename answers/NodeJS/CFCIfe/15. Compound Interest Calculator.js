const readlineSync = require("readline-sync");

module.exports = compoundInterest = () => {
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
