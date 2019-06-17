// Use papa parse to parse csv to json
// run in node server not console

let fs = require("fs");
let file = "./cgpa.csv";
let content = fs.readFileSync(file, "utf8");
let Papa = require("papaparse");

let result = Papa.parse(content, {
  complete: function(results) {
    results.data;
  }
});
//<name> (<id>): <average-score> <cgpa>
module.exports = function calcCGPA() {
  let { data } = result;
  let cgpaResult = [];
  for (let i = 1; i < data.length - 1; i++) {
    var [, , math, chem, science, physics, geog] = data[i];
    let avgScore =
      Number(math) +
      Number(chem) +
      Number(science) +
      Number(physics) +
      Number(geog) / 5;
    let cgpa = avgScore / 20;
    var res = `${data[i][1]} (${data[i][0]}): ${avgScore.toFixed(
      2
    )} ${cgpa.toFixed(2)}`;
    cgpaResult.push(res);
  }
  return cgpaResult;
};
