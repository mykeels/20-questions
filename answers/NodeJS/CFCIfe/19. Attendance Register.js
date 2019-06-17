var fs = require("fs");
var text = fs.readFileSync("./register.txt");
var nameByLine = text.toString().split(",");
var readlineSync = require("readline-sync");
module.exports = function rollCall() {
  let attendance = [];

  nameByLine
    .map(e => e.trim())
    .forEach(name => {
      let userResp = readlineSync.question(`Is ${name} in class: `);
      if (userResp.toLowerCase() == "yes") {
        present = `${name}:\t\t✅}`;
        attendance.push(present);
      } else {
        absent = `${name}:\t\t❌}`;
        attendance.push(absent);
      }
    });
  attendance;
  return fs.writeFileSync("./updatedRegister.txt", attendance.join("\n"));
};
