const fs = require("fs");
const path = require("path");
//创建文件夹
fs.mkdirSync("hello");

//读取目录
var list = fs.readdirSync(__dirname);
console.log(list);

//删除 
fs.rmdirSync(path.join(__dirname, '/hello'));

//删除文件夹里其他文件。不能直接删除
var files = fs.readdirSync(path.join(__dirname, '/node'));

//判断文件夹里是否有其他文件夹，其他文件夹里是否有其他文件，递归，从最底层开始删
fs.unlinkSync(path.join(__dirname, '/node/' + file[0]));

fs.rmdirSync(path.join(__dirname, '/node'));