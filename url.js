var url = require("url");
var urlObj=url.parse('http://huwenzhe:123@localhost:8080/iogin?username=zfpx&password=123456#top');
console.log(urlObj);
console.log(url.format(urlObj));