var arg = process.argv[2];
if (arg == undefined) {
    console.log("命令行参数错误");
} else if (arg == "-help") {
    console.log("没有帮助，自己想");
} else {
    var sum = eval(arg);
    console.log(arg + "=", sum);
}