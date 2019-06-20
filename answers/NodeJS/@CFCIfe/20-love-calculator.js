var http = require("http");
var readlineSync = require("readline-sync");

count = string => {
  return string.split("").reduce((acc, el) => {
    if (acc.hasOwnProperty(el)) acc[el]++;
    else acc[el] = 1;
    return acc;
  }, {});
};

function loveCalc() {
  let firstName = readlineSync.question("First name: "),
    secondName = readlineSync.question("Second name: "),
    name = firstName.toLowerCase() + "loves" + secondName.toLowerCase(),
    nameObj = count(name),
    nameArr = name.split(""),
    objCount = [];

  for (let i = 0; i < nameArr.length; i++) {
    let occurArr = nameObj[nameArr[i]];
    objCount.push(occurArr);
  }
  return parseInt(objCount.join(""), 10);
}

function findPercent() {
  let num = loveCalc();
  let arrNum = num
    .toString()
    .split("")
    .map(item => parseInt(item));

  function sumArray(array) {
    let sum = 0,
      numLatest = [];

    if (array.length % 2 === 0) {
      for (
        let x = 0, y = array.length - 1;
        x <= Math.floor((array.length - 1) / 2) &&
        y >= Math.ceil((array.length - 1) / 2);
        x++, y--
      ) {
        sum = array[x] + array[y];
        numLatest.push(sum);
      }
    } else {
      let middleNum = array[Math.ceil((array.length - 1) / 2)];
      for (
        let x = 0, y = array.length - 1;
        x < Math.floor((array.length - 1) / 2) &&
        y > Math.ceil((array.length - 1) / 2);
        x++, y--
      ) {
        sum = array[x] + array[y];
        numLatest.push(sum);
      }
      numLatest = [numLatest, middleNum];
    }
    numLatest =
      numLatest[0].length > 1
        ? numLatest.flat()
        : [
            ...numLatest
              .join("")
              .split("")
              .map(item => parseInt(item))
          ];
    return numLatest;
  }
  while (arrNum.length > 2) {
    arrNum = sumArray(arrNum);
  }
  finalAnswer = arrNum.join("");
  return `The love percentage is ${finalAnswer}%`;
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(findPercent());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
