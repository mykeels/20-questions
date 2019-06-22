const fs = require("fs"),
  readlineSync = require("readline-sync");

function rollCall() {
  let text = fs.readFileSync("./data/19-attendance-register.txt"),
    names = text.toString().split(",\r\n"),
    attendance = [];
  names.forEach(name => {
    let userResp = readlineSync.question(`Is ${name} in class (Yes/No): `);
    if (userResp.toLowerCase() == "yes") {
      present = name.length >= 7 ? `${name}:\t ✅` : `${name}:\t\t ✅`;
      attendance.push(present);
    } else {
      absent = name.length >= 4 ? `${name}:\t ❌` : `${name}:\t\t ❌`;
      attendance.push(absent);
    }
  });
  return fs.writeFileSync(
    "./data/new-attendance-register.txt",
    attendance.join("\n")
  );
}

console.log(rollCall());
