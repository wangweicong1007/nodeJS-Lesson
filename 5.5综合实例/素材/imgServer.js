const http = require("http");
const fs = require("fs");
const url = require("url");


http.createServer(function(req, res) {
    /**
     *     fs.readFile("./1.png", function(err, data) {
                 console.log(data);
                    res.writeHead(200, { "Content-Type": "image/png" });
                    res.write(data);
                       res.end();
    })
     */


    var urlObj = url.parse(req, url);
    var pathName = urlObj.pathname;
    if (pathName == '/') {

        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fileContent);
        res.end();
    } else if (pathName == '/getdata') {
        var list = [{ "username": "zhangsan", "age": 20 }];
        var str = JSON.stringify(list);
        res.end(str);
    }


}).listen(8082);
console.log('server is listening 8082');