var express = require('express');
var app = express();

app.use(express.static('public'));

//主页输出 helloworld
app.get('/', function(request, response){
    console.log('主页 GET 请求');
    response.send('Hello GET');
})

//post请求
app.post('/', function(request,response){
    console.log("主页 POST 请求");
    response.send("Hello POST");
})

//del_user页面响应
app.get('/del_user',function(request,response){
    console.log("/del_user响应 DELETE 请求");
    response.send("删除页面");
})

//list_user页面 GET 请求
app.get('/list_user', function(request, response){
    console.log("/list_user GET 请求");
    response.send('用户列表页面');
})

//对页面 abcd， abxcd， ab123cd，等响应 GET 请求
app.get('/ab*cd', function(request, response){
    console.log('/ab*cd GET 请求');
    response.send('正则匹配');
})

var server = app.listen(1888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("实例访问地址为 http://%s:%s", host, port);
});
