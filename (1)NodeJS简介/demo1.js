/**
 * nodeServer.js
 */

const http = require("http");
/**实例化sever */
var server = new http.Server();
/* sever监听客户端的请求*/
server.on("request", function(req, res) {
        res.end("hello world");
    })
    /** sever监听端口*/
server.listen(8082);
console.log("sever is listening 8082");