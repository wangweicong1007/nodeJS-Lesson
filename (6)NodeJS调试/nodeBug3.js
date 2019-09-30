const fs = require("fs");

/**
 * try catch 只能捕获同步代码中的异常
 */
try {
    fs.readFileSync(__filrname, function(err, data) {
        if (err) {
            console.log("error");
        } else {
            console.log(data);
        }
    })
} catch (error) {
    console.log(error, message);
}

//捕获全局异常，回调函数中出现异常也可捕获
process.on("uncaughtException", function(err) {
    if (err) {
        console.log(err);
    }
})