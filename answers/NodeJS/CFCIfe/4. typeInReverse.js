const readlineSync = require("readline-sync");

module.exports = function typeInReverse(score = 50) {
  words = ["Redominate", "Circumvent", "Dispose"];
  randomWord = words[Math.floor(Math.random() * words.length)];
  userAnswer = readlineSync.question(
    `Write this word in reverse \n ${randomWord}: `
  );
  reversedRandomWord = randomWord
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (userAnswer.toLowerCase() === reversedRandomWord && score > 1) {
    score += 5;
    console.log(` ✅ Your score is ${score}`);
    typeInReverse(score);
  } else if (userAnswer.toLowerCase() !== reversedRandomWord && score > 1) {
    score -= 5;
    console.log(` ❌ Your is score is reduced to ${score}`);
    typeInReverse(score);
  } else {
    console.log("Game Over");
    return;
  }
};
