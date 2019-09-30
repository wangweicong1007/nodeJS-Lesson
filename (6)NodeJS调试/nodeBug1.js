// var username = "zhangsan";
// username();

/**
 * 特定方法的参数必须是特定类型的变量
 * TypeError
 */
const fs = require('fs');
fs.readFileSync(true); //必须是一个什么类型的变量，传进来的参数有问题