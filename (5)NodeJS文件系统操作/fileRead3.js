const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname, "/file.txt");

//fid文件描述符（唯一标识文件）
//openSync(文件路径，打开方式)
// openSync();指名打开文件的方式，是只读，还是读写
var fid = fs.openSync(filePath, 'r+'); /**读写*/

//实例化了一个buf 30个字节
var buf = Buffer.alloc(30);
var len = fs.statSync(filePath).size; /**得到当前文件的信息 */
fs.readSync(fid, buf, 0, len, 0) /**读到的文件会放到buf里 */
console.log(buf.toString());
fs.closeSync(fid);