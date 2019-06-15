salaryClassifier = () => {
  let salary = prompt("Enter your salary: ");
  if (Number(salary) !== NaN && Number(salary) > 0) {
    if (Number(salary) < 50000) {
      return "Basic Earner";
    } else if (Number(salary) < 200000) {
      return "Mid Earner";
    } else {
      return "High Earner";
    }
  }
};
salaryClassifier();
