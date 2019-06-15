compoundInterest = () => {
  let principal = prompt("Enter Principal: ");
  let rate = prompt("Enter rate: ");
  let time = prompt("Enter Time (in years): ");

  let simpleInterest = (principal * rate * time) / 100;
  let arr = [];
  for (let i = 1; i <= Number(time); i++) {
    var interest = (principal * rate) / 100;
    var statement = `
  Interest gained in year ${i} is ${interest}`;
    arr.push(statement);
  }
  return [
    `The simple interest at the end of ${time} years is: ${simpleInterest} \n`
  ]
    .concat(arr)
    .join("");
};

compoundInterest();
