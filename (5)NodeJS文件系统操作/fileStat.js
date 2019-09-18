const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname, "/file.txt");
var statObj = fs.statSync(filePath);
/**
 * stat.isFile()判断当前路径是否为文件
 * stat.isDirectory()判断当前路径是否为文件夹
 */

console.log(statObj.isFile()); /**根据一个对象得到当前路径是否是文件 ，是true*/
console.log(statObj.isDirectory());
console.log(statObj);