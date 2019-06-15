function numToWords() {
  let user = prompt("Enter a number: "),
    userNum = Number(user),
    arrOfNumber = user.split(""),
    unit = arrOfNumber.slice(-1),
    tens = arrOfNumber.slice(-2, -1),
    hundreds = arrOfNumber.slice(-3, -2),
    thousands = arrOfNumber.slice(-5, -3);
  let unitNames = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  let tensNames = [
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  if ((arrOfNumber.length === 1 || arrOfNumber.length === 2) && userNum < 20) {
    return unitNames[userNum - 1];
  } else if (
    (arrOfNumber.length === 1 || arrOfNumber.length === 2) &&
    userNum >= 20 &&
    unit == 0
  ) {
    return tensNames[tens - 1];
  } else if (
    (arrOfNumber.length === 1 || arrOfNumber.length === 2) &&
    userNum >= 20 &&
    unit != 0
  ) {
    return `${tensNames[tens - 1]}-${unitNames[unit - 1]}`;
  } else if (arrOfNumber.length === 3) {
    return `${unitNames[hundreds - 1] +
      " hundred" +
      (tens != 0 ? " and " + tensNames[tens - 1] : "") +
      " " +
      (unit != 0 ? unitNames[unit - 1] : "")}`;
  } else if (arrOfNumber.length === 4 || arrOfNumber.length === 5) {
    return `${(thousands.join("").length <= 2 && thousands.join("") < 20
      ? unitNames[thousands.join("") - 1]
      : tensNames[thousands[0] - 1] + " " + unitNames[thousands[1] - 1]) +
      " thousand, " +
      (hundreds != 0 ? unitNames[hundreds - 1] + " hundred" : "") +
      (tens != 0 ? " and " + tensNames[tens - 1] : "") +
      " " +
      (unit != 0 ? unitNames[unit - 1] : "")}`;
  } else {
    return null;
  }
}