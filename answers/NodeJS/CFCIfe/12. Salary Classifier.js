const readlineSync = require("readline-sync");

module.exports = salaryClassifier = () => {
  let salary = readlineSync.questionInt("Enter your salary: ");
  if (Number(salary) !== NaN && Number(salary) > 0) {
    if (Number(salary) < 50000) {
      return "Basic Earner";
    }
    return Number(salary) < 200000 ? "Mid Earner" : "High Earner";
  }
};
