const readlineSync = require("readline-sync");

// ES 6
function lotteryGame() {
  let lotteryNumber = readlineSync.questionInt(
      "Enter your random number between 0 and 9: "
    ),
    num1 = Math.round(Math.random() * 10),
    num2 = Math.round(Math.random() * 10),
    num3 = Math.round(Math.random() * 10),
    check =
      num1 === Number(lotteryNumber) ||
      num2 === Number(lotteryNumber) ||
      num3 === Number(lotteryNumber);
  return !isNaN(lotteryNumber) && check
    ? ` ${num1} ${num2} ${num3} \n Congratulations`
    : ` ${num1} ${num2} ${num3} \n Try again! Better luck next time`;
}

console.log(lotteryGame());
