// exports.world = function(){
//     console.log('hello world');
// }


function myHello()
{
    // var name;
    // this.setName = function(thyName){
    //     name = thyName;
    // };

    this.sayHello = function(name){
        console.log('干啥呢？' + name);
    };
};

module.exports = myHello;