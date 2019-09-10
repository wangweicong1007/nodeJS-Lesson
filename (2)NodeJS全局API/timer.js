var timerId = setInterval(function() {
    console.log("game out");
}, 1000);
//阻止延时执行或者定时执行，回调函数的执行
//不执行
timerId.unref();
// 执行
timerId.ref();