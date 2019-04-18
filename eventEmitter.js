var events = require("events");
var emitters = new events.EventEmitter();

emitters.on("some-event", function(t1, t2){
    console.log("listen1", t1, t2);
});

emitters.on("some-event", function(t1, t2){
    console.log("listen2", t1, t2);
});

emitters.emit("some-event", "1", "2");


//设置定时器触发“事件触发属性”

// var eventEmitter = require("events").EventEmitter;
// var event = new eventEmitter();

// event.on("some-event", function(){
//     console.log("some-event事件触发");
// });

// setTimeout(function(){
//     event.emit("some-event");
// }, 5000);

