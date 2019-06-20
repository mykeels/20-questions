// Used papa parse to parse csv to json
// run in node server not console
let http = require("http");
let fs = require("fs");
let file = "./data/18-simple-cgpa-calculator.csv";
let content = fs.readFileSync(file, "utf8");
let Papa = require("papaparse");

let result = Papa.parse(content, {
  complete: function(results) {
    results.data;
  }
});

//return <name> (<id>): <average-score> <cgpa>
function calcCGPA() {
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
  return cgpaResult.join("\n");
}

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(calcCGPA());
  })
  .listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
