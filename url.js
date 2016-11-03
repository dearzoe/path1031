var url = require("url");
var urlObj=url.parse('http://huwenzhe:123@localhostL8080/iogin?username=zfpx&password=123456#top');
console.log(urlObj);
console.log(url.format(urlObj));