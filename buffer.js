/**
 * ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

 * utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

 * utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

 * ucs2 - utf16le 的别名。

 * base64 - Base64 编码。

 * latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

 * binary - latin1 的别名。

 * hex - 将每个字节编码为两个十六进制字符。
 */

 //create buffer object
// const buf = Buffer.from("hahaha", "ascii");

// console.log(buf.toString("hex"));
// console.log(buf.toString("base64"));

// // 0x62 为16进制，转成十进制就是 98，代表的就是字母 b
// const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

// //默认编码是UTF8
// console.log(buf1.toString());

// //以base64编码输出
// console.log(buf1.toString("base64"));

// 创建一个长度为 10、且用 0 填充的 Buffer
// const buf1 = Buffer.alloc(10);

// // 创建一个长度为 10、且用 0x1 填充的 Buffer
// const buf2 = Buffer.alloc(10, 1);

// const buf3 = Buffer.allocUnsafe(10);

// // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer
// const buf4 = Buffer.from([1, 2, 3]);

// // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
// const buf5 = Buffer.from('tést');

// //创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer
// const buf6 = Buffer.from('tést', 'latin1');


/**
 * 实例：writing data to buffer
 */
// const buf = Buffer.alloc(12);
// len = buf.write("hahaha");
// console.log("写入字节数：" + len);


/**
 * 实例：reading data from buffer
 */
// const buf = Buffer.alloc(26);
// for(let i = 0; i < 26; i++)
// {
//     buf[i] = i + 97;
// }


// console.log(buf[1]);
// console.log(buf.toString("utf8"));

// //从第0个读取到第5个，默认是读取到结尾
// console.log(buf.toString("ascii", 0 ,5)); 
// console.log(buf.toString("utf8", 0 ,5));
// console.log(buf.toString(undefined, 0, 5));


/**
 * 实例：The Buffer is converted to a JSON object.
 */
//  const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
//  const json = JSON.stringify(buf);
//  console.log(json);

//  const copy = JSON.parse(json, (key, value) => {
//       return value && value.type === "Buffer" ?
//       Buffer.from(value.data):value;
//  });
//  console.log(copy);


/**
 * 实例：combining Buffer
 */
// let buffer1 = Buffer.from("hahaha");
// let buffer2 = Buffer.from("你好啊");
// let buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log(buffer3.toString());


/**
 * 实例：comparing Buffer
 */
// let buffer1 = Buffer.from("123");
// let buffer2 = Buffer.from("123456");
// let result = buffer1.compare(buffer2);

// if(result == 0){
//     console.log("两者相同");
// }else if(result < 0){
//     console.log(buffer1 + "在" + buffer2 + "前");
// }else if(result > 0){
//     console.log(buffer1 + "在" + buffer2 + "后");
// }


/**
 * 实例：copying Buffer
 */
// var buffer1 = Buffer.from("123456789");
// var buffer2 = Buffer.from("vvv");
// buffer2.copy(buffer1, 1);
// console.log(buffer1.toString());

/**
 * 实例：slicing Buffer
 */
// var buffer1 = Buffer.from("123456789");
// var buffer2 = buffer1.slice(2, 4);
// console.log(buffer2.toString());

/**
 * 实例：the length of Buffer
 */
var buffer1 = Buffer.from("hahaha");
console.log(buffer1.length);

