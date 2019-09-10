const http = require("http");
const fs = require("fs");
const path = require("path");
var htmlPath = path.join(__dirname, "../view/index.html");


var server = http.createServer(function(req, res) {
    // __dirname当前文件所在目录
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");

    res.writeHead(200, { "content-Type": "text/html" });
    res.write(htmlContent);
    res.end();
});



server.listen(8080);
console.log("server is listening 8080");
console.log(htmlPath);



// 老师打的
/*

const http = require("http");
const fs = require("fs");
const path = require("path");
http: createServer(function(req, res) {
    var filePath = path.join(__dirname, "../view/index.html");
    console.log(filePath);
    var fileContent = fs.readFileSync(FilePath);
    fileContent = fileContent.toString("utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fileContent);
    res.end;
}).listen(8080);
console.log("server is listening 8080");

*/