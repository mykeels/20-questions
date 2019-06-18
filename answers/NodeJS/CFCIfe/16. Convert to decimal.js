const readlineSync = require("readline-sync");

module.exports = convertToDecimal = () => {
  let base = readlineSync.questionInt(
    "What base are you converting to base 10? "
  );
  let num = readlineSync.questionInt("Enter the base Number to convert: ");
  let answer = parseInt(num, base).toString(10);
  return `${num} in base ${base} is ${answer} in base 10`;
};
