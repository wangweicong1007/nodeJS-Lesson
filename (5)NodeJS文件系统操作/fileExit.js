const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname, "/file.txt");
//判断当前文件或文件夹是否存在 true,flase
fs.existsSync(fs.existsSync(filePath));