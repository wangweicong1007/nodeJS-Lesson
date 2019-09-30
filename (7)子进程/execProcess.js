//使用exec来创建一个子进程
const cp = require("child_process"); //原生模块

/**
 * err启动子进程过程异常得到的错误对象
 * stdout子进程输出  (输出buffer数据))
 * stderr子进程执行过程的错误对象
 */
cp.exec("node childProcess.js" + " javascript", function(err, stdout, stderr) {

    if (err) {
        console.log(err);
    } else {
        // console.log(typeof stdout);
        console.log(stdout);
        // console.log(typeof stderr);
        console.log(stderr);
    }

})