const readlineSync = require("readline-sync");

module.exports = convertFromDecimal = () => {
  let num = readlineSync.questionInt("Enter your base 10 number: ");
  let base = readlineSync.questionInt("Enter base to convert to: ");
  let answer = parseInt(num, 10).toString(base);
  return `${num} in base 10 is ${answer} in base ${base}`;
};
