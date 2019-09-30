/**
 * fork()专门用来启动node进程
 * 并且父子进程之间可以进行通信
 */
const cp = require("child_process");

var fork1 = cp.fork("childProcess1.js", ["javascript"]); //直接指定一个node程序的路径

fork1.on("close", function(chunk) {
    console.log(chunk.toString());
})

//事件监听,父子进程间看进行通信
fork1.on("message", function(msg) {
    console.log(msg);
})

//父进程发送信息，子进程process接收
fork1.send("parent");