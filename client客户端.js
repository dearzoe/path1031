var http =require("http");
var options={
    mothod:'GET',
    path:'/',
    host:'localhost',
    port:8090
};
//是一个流对象，是一个可写流
var client = http.request(options, function (response) {
    console.log(response);
    //response是个流对象，而且是个可读流;
    response.on('data', function (data) {
        console.log(data.toString());
    });
});
//当调用end 方法的时候才会在真正想服务器发送请求
client.end();