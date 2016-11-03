var http =  require("http");
var fs = require("fs");
var server=http.createServer(function (req,res) {
    console.log(req.headers);
    res.writeHead(301,"重定向到百度",{name:"huwenzhe",age:23,location:"http://www.baidu.com"});
    res.end("end ajax");
}).listen(8080,function(){
    console.log("监听中")
});