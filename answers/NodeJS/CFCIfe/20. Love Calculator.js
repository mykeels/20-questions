var readlineSync = require("readline-sync");

count = name => {
  var value = {};
  name
    .split("")
    .forEach(letter => (value[letter] ? value[letter]++ : (value[letter] = 1)));
  return value;
};

module.exports = function loveCalc() {
  var firstName = readlineSync.question("First name: ");
  var secondName = readlineSync.question("Second name: ");

  var names = firstName.toLowerCase() + "loves" + secondName.toLowerCase();
  var obj = count(names);
  objCount = [];
  for (let key in obj) {
    objCount.push(obj[key]);
  }

  while (objCount.length > 2) {
    midRange = objCount.length / 2;
    percentValue = [];
    for (
      let i = 0, j = objCount.length - 1;
      i < objCount.length && j >= 0;
      i++, j--
    ) {
      var leftMost = objCount[i];
      var rightMost = objCount[j];
      if (i == midRange) {
        if (objCount.length % 2 === 0) break;
        j = 0;
        rightMost = 0;
      }
      percentValue.push(leftMost + rightMost);
    }
  }
  return percentValue;
};
