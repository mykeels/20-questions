hexColor = () => {
  let red = Math.floor(Math.random() * 255).toString(16);
  let green = Math.floor(Math.random() * 255).toString(16);
  let blue = Math.floor(Math.random() * 255).toString(16);
  return `#${red}${green}${blue}`;
};
