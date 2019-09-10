/**
 * 1.传入命令行参数，是一个算数运算式  1*2+3
 * 提示：process.argv[2]
 * 
 * 2.程序将算术运算式计算得到结果，并且在控制台输出
 * 1*2+3=5;  eval():算术运算式计算
 * 3.程序判断一下是否传入了命令行参数，如果没有传入控制台输出，“命令行参数错误！”;
 * 
 */


var arg1 = process.argv[2];
if (arg1 == undefined) {
    console.log("命令行参数错误！");
} else if (arg1 == "-help") {
    console.log("帮助：命令参数需为算术运算式");
} else {
    var result = eval(arg1);
    console.log(arg1 + "=%s", result);
}


//自己打的错误示范
// if (!process.argv) {
//     console.log("命令行参数错误！");
// } else {
//     console.log(1 * 2 + 3);
// }