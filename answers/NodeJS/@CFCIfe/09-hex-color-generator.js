var http = require("http");

hexColor = () => {
  let red = Math.floor(Math.random() * 255).toString(16);
  let green = Math.floor(Math.random() * 255).toString(16);
  let blue = Math.floor(Math.random() * 255).toString(16);
  return `#${red}${green}${blue}`;
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(hexColor());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
