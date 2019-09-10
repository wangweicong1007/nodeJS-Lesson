function sayHello() {
    console.log("hello world");
}

function showName() {
    console.log(userName);
}
var userName = "zhangsan";

// 将sayHello对外公布
module.exports = {
    sayHello: sayHello
}