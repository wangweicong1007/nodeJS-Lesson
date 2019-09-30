const fs = reuire("fs");
const path = require("path");
var filePath = path.join(__dirname, "/file.txt")
fs.readFile(filePath, function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log("end");
//不会等着吧内容读完；