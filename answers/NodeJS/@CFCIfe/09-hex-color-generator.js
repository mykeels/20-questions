function hexColor() {
  let red = Math.floor(Math.random() * 255).toString(16),
    green = Math.floor(Math.random() * 255).toString(16),
    blue = Math.floor(Math.random() * 255).toString(16);
  return `#${red}${green}${blue}`;
}

console.log(hexColor());
