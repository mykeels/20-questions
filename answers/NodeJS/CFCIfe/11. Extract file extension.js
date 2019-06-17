var readlineSync = require("readline-sync");

module.exports = function extractExt() {
  var extension = readlineSync.question("Enter Valid Path: ");
  var extName = extension.split(".");
  return `Extension name is .${extName[extName.length - 1]}`;
};
