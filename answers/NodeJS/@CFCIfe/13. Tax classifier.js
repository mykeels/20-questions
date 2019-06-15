taxClassifier = () => {
  let salary = prompt("Enter your salary: ");
  if (Number(salary) !== NaN && Number(salary) > 0) {
    if (Number(salary) < 50000) {
      return `Tax: ${(5 / 100) * Number(salary)}`;
    } else if (Number(salary) < 200000) {
      return `Tax: ${(10 / 100) * Number(salary)}`;
    } else {
      return `Tax: ${(15 / 100) * Number(salary)}`;
    }
  }
};
taxClassifier();
