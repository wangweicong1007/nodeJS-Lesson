const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname, "/file.txt");
var filePath1 = path.join(__dirname, "/file1.txt");
console.time("boring")
console.time("test");
// readFileSync() 同步读取
var fileContent = fs.readFileSync(filePath);
console.timeEnd("test");
console.time("test1");
var fileContent1 = fs.readFileSync(filePath1);
console.timeEnd("test1");
console.timeEnd("boring");
// console.log(fileContent.toString());
// console.log(fileContent1.toString());
console.log('read end');