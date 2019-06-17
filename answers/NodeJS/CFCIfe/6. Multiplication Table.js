const readlineSync = require("readline-Sync");
//Simple multiplication table. Sends all the values to an array
function multiplicationTable() {
  let emptyArr = [];
  for (let i = 1; i <= 12; i++) {
    for (let j = 2; j <= 12; j++) {
      emptyArr.push(i * j);
    }
  }
  return emptyArr;
}

//A little bit advanced. Read on array.reduce(), and Array.from(Array(length)) was destructured to Array.from({length: len})

module.exports = function multiplicationTable(
  length = readlineSync.questionInt("Input a number between 2-12: ")
) {
  let len = length;
  let arr = Array.from({ length: len }, (current, index) => index + 1);

  let table;

  table = arr.reduce((acc, index) => {
    const acc1 = arr.reduce((acc, index1) => {
      acc.push(index * index1);
      return acc;
    }, []);
    acc.push(acc1);
    return acc;
  }, []);

  return table;
};
