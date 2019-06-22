export function randomWords() {
  var things = ["rock", "paper", "scissor", "cutie", "your", "waist", "traditional", "games"];
  return things[Math.floor(Math.random() * things.length)];
}
