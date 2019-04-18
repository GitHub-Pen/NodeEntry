var events = require("events");

//创建事件发起者对象EventEmitter
var eventEmitters = new events.EventEmitter();

/*
    EventEmitter 提供了多个属性，如 on 和 emit
    on 函数用于绑定事件函数，为指定事件注册一个监听器，emit 属性用于触发一个事件,
*/

// var connectHander = function connected(){
//     console.log("连接成功");

//     eventEmitters.emit("receive");
// }

//绑定事件处理程序
// eventEmitters.on("connection", connectHander);


//绑定匿名函数处理程序
eventEmitters.on("connection", function(){
    console.log("连接成功");
    eventEmitters.emit("receive");
});

eventEmitters.on("receive", function(){
    console.log("数据接收成功");
    eventEmitters.emit("end");
});

eventEmitters.on("end",function(){
    console.log("来个结尾");
});

console.log("程序执行完毕");
eventEmitters.emit("connection");


