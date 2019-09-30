const events=require("events");
const EventEmitter=events.EventEmitter;

function Dog(dogName){
    //1.ִ��һ�鸸���캯��������thisָ�����ӹ��캯����
    EventEmitter.call(this);
    this.dogName=dogName;
    var that=this;
    setTimeout(function(){
        that.emit("bark");
    },3000);
}

//2.�ӹ��캯���̳и����캯��prototype�������ط���
//���̳У���ԭ������ԭ���ϵĹ��캯�����̳й���
Dog.prototype.__proto__=EventEmitter.prototype;
var dog=new Dog("kitty");
dog.on("bark",function(){
    console.log(this.dogName+"can bark");
})