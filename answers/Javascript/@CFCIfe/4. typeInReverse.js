// Variables

// Vanilla Js
function typeInReverse(score = 50) {
  words = ["Redominate", "Circumvent", "Dispose"];
  randomWord = words[Math.floor(Math.random() * words.length)];
  userAnswer = prompt(`Write this word in reverse \n ${randomWord}`);
  reversedRandomWord = randomWord
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (userAnswer.toLowerCase() === reversedRandomWord && score > 1) {
    score += 5;
    alert(` ✅ Your score is ${score}`);
    typeInReverse(score);
  } else if (userAnswer.toLowerCase() !== reversedRandomWord && score > 1) {
    score -= 5;
    alert(` ❌ Your is score is reduced to ${score}`);
    typeInReverse(score);
  } else {
    return "Game Over";
  }
}
