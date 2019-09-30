const cp = require("child_process");

var result = "";
var childProcess = cp.spawn("node", ["childProcess"]); //没有回调函数function
//流可以大规模的接收数据
// childProcess.stdout.on("data", function(chunk) {
//     console.log(chunk);
//     result += chunk;
// })

// childProcess.stdin.on("close", function() {
//     console.log(result);
// })

childProcess.stdout.on("data", function(chunk) {
    console.log(chunk);
})