const readlineSync = require("readline-sync");
function nameConcatenation() {
  let firstName = readlineSync.question("First Name: "),
    lastName = readlineSync.question("last name: "),
    yearOfBirth = readlineSync.questionInt("Year of birth: "),
    gender = readlineSync.question("binary gender (M/F): "),
    today = new Date(),
    currentYear = today.getFullYear(),
    age = currentYear - yearOfBirth;

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

console.log(nameConcatenation());
