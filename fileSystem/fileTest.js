// var fs = require('fs');

// // 异步打开文件
// console.log("准备打开文件！");
// fs.open('haha.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }

//    //fd代表文件描述符
//    console.log(fd);
//    console.log("文件打开成功！");     
// });


var fs = require("fs");

console.log("准备打开文件！");
fs.stat('haha.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   
   //stats 是 fs.Stats 对象，表示文件信息
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});