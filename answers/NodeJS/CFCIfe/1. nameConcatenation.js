const readlineSync = require("readline-sync");
module.exports = function nameConcatenation() {
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
};
