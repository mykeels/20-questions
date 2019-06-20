var http = require("http");

const readlineSync = require("readline-sync");
function nameConcatenation() {
  let firstName = readlineSync.question("First Name: ");
  let lastName = readlineSync.question("last name: ");
  let yearOfBirth = readlineSync.questionInt("Year of birth: ");
  let gender = readlineSync.question("binary gender (M/F): ");
  let today = new Date();
  let currentYear = today.getFullYear();
  let age = currentYear - yearOfBirth;
  return !isNaN(age)
    ? `Welcome, ${firstName.toUpperCase()} ${
        gender.toLowerCase() == "m"
          ? "Son"
          : gender.toLowerCase() == "f"
          ? "Daughter"
          : ""
      } of  ${lastName.toUpperCase()}  ${age} years old`
    : " ";
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(nameConcatenation());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
