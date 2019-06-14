/* 
Ask the user to press any key. Display any 3 random space-separated digits between 0-9 e.g. 6 2 7.
If any of them is 7, output "Congratulations!".
Else, output "Try again! Better luck next time.".
Repeat 
*/

// Variables
let lotteryNumber = prompt("Enter your random number between 0 and 9"),
  num1 = Math.round(Math.random() * 10),
  num2 = Math.round(Math.random() * 10),
  num3 = Math.round(Math.random() * 10),
  check =
    num1 === Number(lotteryNumber) ||
    num2 === Number(lotteryNumber) ||
    num3 === Number(lotteryNumber);

// Vanilla JS
function lotteryGame() {
  if (!isNaN(lotteryNumber) && check) {
    return num1 + " " + num2 + " " + num3 + " \n Congratulations";
  } else {
    return (
      num1 + " " + num2 + " " + num3 + " \n Try again! Better luck next time"
    );
  }
}
lotteryGame();

// ES 6
function lotteryGame() {
  return !isNaN(lotteryNumber) && check
    ? `${num1} ${num2} ${num3} \n Congratulations`
    : `${num1} ${num2} ${num3} \n Try again! Better luck next time`;
}
lotteryGame();
