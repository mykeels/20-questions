function randomRGB() {
  let red = Math.floor(Math.random() * 255),
    blue = Math.floor(Math.random() * 255),
    green = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${blue}, ${green})`;
}

console.log(randomRGB());
