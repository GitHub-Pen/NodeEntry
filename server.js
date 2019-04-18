var http = require("http");
var express = require("express");

// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     // response.end('Hello World\n');

//     response.write('hello world');
//     response.end();

// }).listen(1888);
//  console.log("running at http://127.0.0.1:1888/");

function requestResponse(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.end('Hello World\n');

    response.write('hello world');
    response.end();
};

http.createServer(requestResponse).listen(1888);
console.log("running at http://127.0.0.1:1888/");
