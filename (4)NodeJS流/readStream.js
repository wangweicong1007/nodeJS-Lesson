/**
 * 流是一种数据的传输方式
 * 可以将数据从哟个地方传输到另哟个地方
 */
const fs = require("fs");
const http = require("http");
const path = require("path");


http.createServer(function(req, res) {

    var filePath = path.join(__dirname, 'stream.txt');
    //得到可读流，从文件读取数据  //streamReader是一个可读流对象 source
    var streamReader = fs.createReadStream();
    //pipe() 管道
    //res是http的响应对象，res是一个可写流对象。（会传输到res上去）
    //destination （数据目标）
    streamReader.pipe(res);

    res.write();
    res.end();

}).listen(8081);

console.log("server is listening 8081");