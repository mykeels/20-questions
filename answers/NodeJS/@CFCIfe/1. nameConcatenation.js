/* Print out Welcome, <First-Name> <Last-Name> (<Year-Of-Birth>), where Year-of-Birth is derived as Age subtracted from Current-Year. 
Request the user's gender.

Print out Welcome, <First-Name> [Son/Daughter] of <Last-Name> (<Year-Of-Birth>), where Son is printed out if male, and Daughter if female.
*/

// Variables
const firstName = prompt("Enter your First Name"),
  lastName = prompt("Enter your Last Name"),
  yearOfBirth = prompt("Enter year of birth (Number)"),
  today = new Date(),
  age = today.getFullYear() - yearOfBirth,
  gender = prompt("Gender? (Male/Female)");

// Vanilla JS
function nameConcatenation() {
  if (!isNaN(age) && gender.toLowerCase() === "male") {
    return (
      "Welcome," +
      firstName.toUpperCase() +
      " " +
      "Son Of " +
      lastName.toUpperCase() +
      " " +
      age +
      " years old"
    );
  } else if (!isNaN(age) && gender.toLowerCase() === "female") {
    return (
      "Welcome," +
      firstName.toUpperCase() +
      " " +
      "Daughter Of " +
      lastName.toUpperCase() +
      " " +
      age +
      " years old"
    );
  }
  return;
}
nameConcatenation();

// ES6 - ESNext
nameConcatenation = () => {
  return !isNaN(age)
    ? `Welcome, ${firstName.toUpperCase()} ${
        gender.toLowerCase() === "male"
          ? "Son"
          : gender.toLowerCase() === "female"
          ? "Daughter"
          : ""
      } of  ${lastName.toUpperCase()}  ${age} years old`
    : " ";
};
nameConcatenation();
