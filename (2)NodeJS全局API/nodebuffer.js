// 初始化一个buffer
var buf = Buffer.alloc(10);
console.log(buf);

// 将一个utf-8编码的hello字符串转换成一个二进制的buffer数据
var buf1 = Buffer.from("hello", "utf-8");
console.log(buf1);
// 转化成base64编码，可以作为简单的加密处理
console.log(buf1.toString("base64"));

var base64Str = buf1.toString("base64");

var buf2 = Buffer.from(base64Str, "base64");
console.log(buf2.toString("utf-8"));