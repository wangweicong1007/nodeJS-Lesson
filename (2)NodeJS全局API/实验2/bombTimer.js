function Bomb() {};

Bomb.prototype.message = "bomb!!!";
Bomb.prototype.explode = function() {
    console.log(Bomb.prototype.message);
}

var bomb = new Bomb();

setTimeout(function() {
    bomb.explode();
}, 2000)

// 老师打的
function Bomb() {
    this.message = "bomb!!";
}
Bomb.prototype.explode = function() {
    console.log(this.message);
}
var bomb = new Bomb();
//bind 改变this指向
setTimeout(bomb.explode.bind(bomb), 2000);