convertFromDecimal = () => {
  let num = prompt("Enter your base 10 number: ");
  let base = prompt("Enter base to convert to: ");
  let answer = parseInt(num, 10).toString(base);
  return `${num} in base 10 is ${answer} in base ${base}`;
};

convertFromDecimal();
