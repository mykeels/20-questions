convertToDecimal = () => {
  let num = prompt("Enter Number to convert: ");
  let base = prompt("What base are you converting from? ");
  let answer = parseInt(num, base).toString(10);
  return `${num} in base ${base} is ${answer} in base 10`;
};
convertToDecimal();
