let events = require("events");
let emitter = new events.EventEmitter();

//监听器 1
let listen1 = function listen1(){
    console.log("监听器1");
};

let listen2 = function listen2(){
    console.log("监听器2");
};

//添加到监听器数组尾部
emitter.addListener("connection", listen1);
emitter.on("connection", listen2);
emitter.emit("connection");

//计算监听器个数
let listenCount1 = events.EventEmitter.listenerCount(emitter, "connection");
console.log("监听器个数 = " + listenCount1);

emitter.removeListener("connection", listen1);
console.log("listen1 不再受到监听")
emitter.emit("connection");

//计算监听器个数
let listenCount2 = events.EventEmitter.listenerCount(emitter, "connection");
console.log("监听器个数 = " + listenCount2);

//移除监听器
emitter.removeAllListeners("connection");
console.log("listen1 and 2 都不再受到监听");
emitter.emit("connection");

//计算监听器个数
let listenCount3 = events.EventEmitter.listenerCount(emitter, "connection");
console.log("监听器个数 = " + listenCount3);


