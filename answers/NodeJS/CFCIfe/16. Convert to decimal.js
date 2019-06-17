const readlineSync = require("readline-sync");

module.exports = convertToDecimal = () => {
  let num = readlineSync.questionInt("Enter Number to convert: ");
  let base = readlineSync.questionInt("What base are you converting from? ");
  let answer = parseInt(num, base).toString(10);
  return `${num} in base ${base} is ${answer} in base 10`;
};
