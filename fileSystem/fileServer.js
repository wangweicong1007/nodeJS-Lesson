const http = require("http");
const fs = require('fs');
const path = require("path");
const url = require("url");

http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true); //加第二个参数，转化为对象，不再是字符串
    var pathName = urlObj.pathname;

    switch (pathName) {
        //http://localhost:8081/
        case "/":
            showIndex(res); //响应页面
            break;
            /**
             * 网页文件在浏览器解析的过程中，如果需要一些资源，
             * 会再次的向服务器发起请求，图片，视频，音频，js脚本，css文件
             */
        case "/1.png":
            showImg(res); //页面所需的图片响应过去
            break;
        case "/getfilelist":
            showList(res);
            break;
        case "/delfile":
            delFile(urlObj, res); //需要前端传过来的值，在urlObj中
            break;
        case "/getfile": //点开显示文件
            getFile(urlObj, res);
            break;
        case "/getchildfile": //读取当前点击的文件夹，显示文件夹下的文件
            getChildFile(urlObj, res);
            break;
    }
}).listen(8081);
console.log("server is listen 8081");

function showIndex(res) {
    // res.end("index"); 看一下能不能成功
    var indexPath = path.join(__dirname, "index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(fileContent);
    res.end();
}

function showImg(res) {
    var imgPath = path.join(__dirname, "1.png"); //图片地址 二进制的
    var imgContent = fs.readFileSync(imgPath); //将图片地址中的内容读取
    res.writeHead(200, { "content-type": "image/png" });
    res.write(imgContent);
    res.end();
}
var list = [];

function showList(res) {
    //读文件夹下的内容
    var filePath = path.join(__dirname, "fileDir");
    var files = fs.readdirSync(filePath);
    // console.log(files);

    for (var i = 0; i < files.length; i++) { //获取特定文件信息
        var fileObj = {};
        var childPath = path.join(filePath, files[i]);
        var statObj = fs.statSync(childPath);
        //判断得到的是文件还是文件夹
        if (statObj.isFile()) { //文件
            fileObj.fileType = "file";
        } else if (statObj.isDirectory()) { //是文件夹
            fileObj.fileType = "folder";
        }
        fileObj.fileName = files[i]; //当前文件名
        fileObj.fileSize = statObj.size; //当前文件的字节数
        var birthTimer = new Date(statObj.birthtime); //创建时间
        fileObj.createTime = birthTimer.getFullYear() + "-" + (birthTimer.getMonth() + 1) +
            "-" + birthTimer.getDate() + birthTimer.getHours() + ":" +
            birthTimer.getMinutes() + ":" + birthTimer.getSeconds();
        list.push(fileObj); //所有文件信息添加到list里面
    }
    // 将list响应到前端 转换成listStr 转化成JSON字符串方便传输
    var listStr = JSON.stringify(list);
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(listStr);
    res.end();
}

//删除
function delFile(urlObj, res) {
    // console.log(urlObj);
    var timer = urlObj.query.createtime;
    for (var i = 0; i < list.length; i++) {
        if (list[i].createTime == timer) { //传过来的数据与前端数据一样。就删掉
            deleteRealFile(list[i].fileName); //删实际的文件
        }
    }
    res.end("success");

}

function deleteRealFile(fileName) {
    var filePath = path.join(__dirname, "fileDir", fileName);
    var statObj = fs.statSync(filePath);
    if (statObj.isFile()) {
        fs.unlinkSync(filePath);
    } else if (statObj, isDirectory()) {
        delDir(filePath);
    }
    console.log(fileName);
}
//删除这个文件夹
function delDir(filePath) {
    var files = fs.readdirSync(filePath);
    for (var i = 0; i < files.length; i++) {
        var childPath = path.join(filePath.files[i]); //要删除的子文件的目录
        var childstatObj = fs.statSync(childPath);
        if (childstatObj.isFile()) {
            fs.unlinkSync(childPath);

        }
        //如果是文件夹
        else if (childstatObj.isDirectory()) {
            delDir(childPath);
        }
    }
}

//显示文件信息
function getFile(urlObj, res) {
    var createTime = urlObj.query.createtime;
    for (var i = 0; i < list.length; i++) {
        if (list[i].createTime == createTime) {
            showContent(list[i].fileName, res);
        }
    }
}

function showContent(fileName, res) {
    // console.log(fileName);
    var filePath = path.join(__dirname, "fileDir", fileName);
    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.end(data);
        }
    })
}
//显示文件夹
function getChildFile(urlObj, res) {
    var createTime = urlObj.query.createtime;
    for (var i = 0; i < list.length; i++) {
        if (list[i].createTime == createTime) {
            getChildList(list[i].fileName, res); //传文件夹的名字
        }
    }
}

function getChildList(fileName, res) {
    var filePath = path.join(__dirname, "fileDir", fileName);
    var files = fs.readdirSync(filePath); //读文件夹下面的子文件
    var childList = [];
    for (var i = 0; i < files.length; i++) {
        var fileObj = {};
        var statObj = fs.statSync(path.join(filePath, files[i]));
        if (statObj.isFile()) {
            fileObj.fileType = "file";
        } else if (statObj.isDirectory()) {
            fileObj.fileType = "folder";
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime); //创建时间
        fileObj.createTime = birthTimer.getFullYear() + "-" + (birthTimer.getMonth() + 1) +
            "-" + birthTimer.getDate() + "  " + birthTimer.getHours() + ":" +
            birthTimer.getMinutes() + ":" + birthTimer.getSeconds();
        childList.push(fileObj);
    }
    var childStr = JSON.stringify(childList);
    res.end(childStr);
}