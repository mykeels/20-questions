var fs = require("fs");

console.log(
  fs
    .readFileSync("./data/07-read-line-by-line.txt")
    .toString()
    .split("\r\n")
);
