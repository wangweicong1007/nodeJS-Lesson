//va a = 1;  // SyntaxError 语法错误

/**
 * ReferenceError 引用错误
 * 在某一个位置上使用未定义的变量
 */
//console.log(a);

const http = require("http");
http.createServer(function(req, res) {

    req.write("hello");
}).listen("jbjbjb");