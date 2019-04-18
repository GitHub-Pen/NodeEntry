var util = require('util');

function Base(){
    this.name = "张三";
    this.Base = 1991;
    this.sayHello = function(){
        console.log('sayHello' + this.name);
    };
}

Base.prototype.showName = function(){
    console.log("你好" + this.name);
}

function Sub(){
    this.name = "张三孩子";
    this.Base = 1992;
}

util.inherits(Sub, Base);

// console.log(Base);
// console.log(Sub); 

var objBase = new Base(); 
objBase.sayHello(); 
objBase.showName();
console.log(objBase); 

var objSub = new Sub(); 
// objSub.showName();
console.log(objSub);
