var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/indexGet.html', function(req, res){
    res.sendFile(__dirname + '/' + 'indexGet.html');
})

app.get('/process_get', function(req, res){
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(1888, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("实例访问地址为 http://%s:%s", host, port)
})