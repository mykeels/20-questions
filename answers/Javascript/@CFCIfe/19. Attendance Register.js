var fs = require("fs");
var text = fs.readFileSync("./test.txt");
var nameByLine = text.toString().split("\n");

function rollCall() {
  let attendance = [];
  for (let i = 0; i < nameByLine.length; i++) {
    let userRes = prompt(`Is ${nameByLine[i]} in class`);
    if (userRes.toLowerCase() == "yes") {
      present = `${nameByLine[i]}:\t\t✅}`;
      attendance.push(present);
    } else {
      absent = `${nameByLine[i]}:\t\t❌}`;
      attendance.push(absent);
    }
  }
  attendance;
  return fs.writeFileSync("./newtest.txt", attendance.join("\n"));
}
rollCall();
