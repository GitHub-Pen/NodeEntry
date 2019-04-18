var express = require('express');
var app = express();

//body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/indexPost.html', function(req, res){
    res.sendFile(__dirname + '/' + 'indexPost.html');
})

/**
 * req.param获取pathinfo中参数 /api/users/{id}
 * req.query获取查询参数 /api/users?name=wwx
 * req.body获取form提交参数
 */

app.post('/process_post', urlencodedParser, function(req, res){
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(1888, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("实例访问地址为 http://%s:%s", host, port)
})