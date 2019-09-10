// 引入模块的相对路径
var child = require("./childModule.js");
// console.log(child);
child.sayHello();
child.showName(); //报错，私有方法