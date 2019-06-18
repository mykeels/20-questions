var fs = require("fs");
var text = fs.readFileSync("./register.txt");
var nameByLine = text.toString().split(",");
var readlineSync = require("readline-sync");
module.exports = function rollCall() {
  let attendance = [];

  nameByLine
    .map(e => e.trim())
    .forEach(name => {
      let userResp = readlineSync.question(`Is ${name} in class (Yes/No): `);
      if (userResp.toLowerCase() == "yes") {
        present = `${name}:\t\t✅}`;
        attendance.push(present);
      } else {
        absent = `${name}:\t\t❌}`;
        attendance.push(absent);
      }
    });
  fs.writeFileSync("./updatedRegister.txt", attendance.join("\n"));
  return "Check updated register for the attendance. Thanks";
};
