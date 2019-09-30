//1.引入events模块
const events=require("events");

//2.实例化一个event事件对象
var eventEmitter=new events.EventEmitter();

//3.绑定事件，事件监听，可以进行多次事件的触发，如果不想进行多次事件的触发，把on改成once
eventEmitter.on("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})

//4.触发事件,可以进行参数的传递，可以进行多次事件的触发
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello");