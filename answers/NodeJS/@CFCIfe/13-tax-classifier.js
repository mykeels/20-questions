const readlineSync = require("readline-sync");

function taxClassifier() {
  let salary = readlineSync.questionInt("Enter your salary: ");
  if (Number(salary) !== NaN && Number(salary) > 0) {
    if (Number(salary) < 50000) {
      return `Tax: ${(5 / 100) * Number(salary)}`;
    }
    return Number(salary) < 200000
      ? `Tax: ${(10 / 100) * Number(salary)}`
      : `Tax: ${(15 / 100) * Number(salary)}`;
  }
}

console.log(taxClassifier());
