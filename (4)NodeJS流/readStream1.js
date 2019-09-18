const stream = require("stream");
//一个读流
var reader = new stream.Readable();
//相当于往内存里加
reader.push("hello");
reader.push("world");
//不再赋值
reader.push(null);
reader.pipe(process.stdout);