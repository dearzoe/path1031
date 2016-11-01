var path=require("path");

//normalize 将非标准的路径字符串转化为标准路径字符串
/*
* 1.可以
*
* */
console.log(path.normalize('a/../b/j'));
console.log(path.resolve());
console.log(path.relative(__dirname,"/"))