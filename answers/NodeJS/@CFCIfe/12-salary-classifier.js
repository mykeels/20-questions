const readlineSync = require("readline-sync");

function salaryClassifier() {
  let salary = readlineSync.questionInt("Enter your salary: ");
  if (Number(salary) !== NaN && Number(salary) > 0) {
    if (Number(salary) < 50000) {
      return "Basic Earner";
    }
    return Number(salary) < 200000 ? "Mid Earner" : "High Earner";
  }
}

console.log(salaryClassifier());
