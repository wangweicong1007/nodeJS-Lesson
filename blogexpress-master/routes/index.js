var express = require('express');
var router = express.Router();
var data=require("../public/data.json")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录' });
});

router.post('/list',function(req,res,next){
  //获取页面的username和pwd值
  console.log(req.body.username,req.body.pwd);
  //获取data.json里的username和pwd
  console.log(data.users[0].username,data.users[0].password);

  var name=req.body.username;
  var pwd=req.body.pwd;
  var dataname=data.users[0].username;
  var datapwd=data.users[0].password;

  //判断用户名密码是否一样
  if(name==dataname && pwd==datapwd){
    // res.end("ok");
    res.render('list',{title:'列表',List:data.chapterList});
  }
  else{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end("账号或密码错误");
  }
})

module.exports = router;
