var http =  require("http");
var fs = require("fs");
var server=http.createServer(function (req,res) {
    console.log(req.headers);
    res.writeHead(200,"下载ing",{'Content-Type':'vvv/jjjj','Content-Disposition':'maning.jpg'});
    fs.createReadStream('./1.jpg').pipe(res);
}).listen(8090,function(){
    console.log("监听中")
});
