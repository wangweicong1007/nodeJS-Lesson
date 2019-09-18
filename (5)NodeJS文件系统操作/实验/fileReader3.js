const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req, res) {
    if (fileName == undefined) {
        var reader = fs.createReadStream(ptocess.argv[1]);
        reader.pipe(res);

    } else {
        console.log("该文件不存在");
    }
}).listen(8081);
console.log('server is listening 8081');