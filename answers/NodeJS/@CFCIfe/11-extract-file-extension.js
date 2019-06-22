const readlineSync = require("readline-sync");

function extractExt() {
  let extension = readlineSync.question("Enter Valid Path: "),
    extName = extension.split(".");

  return `Extension name is .${extName[extName.length - 1]}`;
}

console.log(extractExt());
