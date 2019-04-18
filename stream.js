
/**
 * 实例：reading data from stream
 */

let fs = require("fs");
let data = "";

var readerStream = fs.createReadStream("haha.txt");
readerStream.setEncoding("UTF8");

readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");


/**
 * 实例：writing data in stream
 */
// let fs = require("fs");
// let data = '菜鸟变成大神';

// let writerStream = fs.createWriteStream('output.txt');

// writerStream.write(data, 'UTF8');
// writerStream.end();

// writerStream.on('finish', function(){
//     console.log('写入完成');
// });

// writerStream.on('error', function(err){
//     console.log(err.stack);
// });

// console.log("程序执行完毕");


/**
 * 实例：the stream of pipeline
 */
// let fs = require('fs');

// let readerStream = fs.createReadStream("reader.txt");
// let writeStream = fs.createWriteStream("write.txt");
// readerStream.pipe(writeStream);
// console.log("程序执行完毕");


/**
 * 实例：the chained stream：压缩文件
 */
// let fs = require('fs');
// let zlib = require('zlib');

// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));

// console.log('文件压缩完成');


/**
 * 实例：解压文件
 */
// var fs = require("fs");
// var zlib = require('zlib');

// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('inputjieya.txt'));
  
// console.log("文件解压完成");


/**
 * 实例：读取文件流追加到另一个文件中
 */

// let fs = require('fs');
// let data = '';
// let data2 = 'hahaha';

// let readerStream = fs.createReadStream('haha.txt');
// readerStream.setEncoding('UTF8');

// //chunk => data += chunk是拉姆表达式的写法，相当于 
// /**
//  * function(chunk){ data += chunk; }
//  */
// // readerStream.on('data', chunk => data += chunk);
// //readerStream.on('end', () => writeS(data));

// readerStream.on('data', function(chunk){
//     data += chunk;
// })
// readerStream.on('end', function(){
//     console.log(data);
// });

// readerStream.on("error", err => console.log(err.strck));
// console.log("程序1执行完毕");

// let writerStream = fs.createWriteStream('output.txt');

// writerStream.write(data + data2, 'UTF8');
// writerStream.end();

// writerStream.on('finish', function(){
//     console.log('写入完成');
// });

// writerStream.on('error', function(err){
//     console.log(err.stack);
// });

// // let writeS = dataS =>{
// //     let writeStream = fs.createWriteStream("output.txt"); 
// //     writeStream.write(data2+dataS, "UTF8");
// //     writeStream.end(); 
// //     writeStream.on("finish", () => console.log("写入完成")); 
// //     writeStream.on("error", err => console.log(err.stack));   
// //     console.log("程序2执行完毕");
// // }



