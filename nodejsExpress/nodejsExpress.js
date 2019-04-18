var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('hello world');
})

var server = app.listen(1888, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("实例访问地址为 http://%s:%s", host, port);
});
