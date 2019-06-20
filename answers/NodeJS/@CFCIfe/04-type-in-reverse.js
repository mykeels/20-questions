var http = require("http");
const readlineSync = require("readline-sync");

function typeInReverse(score = 50) {
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
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(typeInReverse((score = 50)));
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
