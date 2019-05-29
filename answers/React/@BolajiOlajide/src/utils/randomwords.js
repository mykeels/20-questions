export function randomWords() {
  var things = ["rock", "paper", "scissor"];
  return things[Math.floor(Math.random() * things.length)];
}
