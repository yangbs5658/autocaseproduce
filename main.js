#!/usr/bin/env node
/**
 * Created by hzyangbaosong on 2016-03-25.
 */
var xlsx = require('node-xlsx');
var listmerge = require('./merge');
var fs = require('fs');
var res = [];
var reslist = [];
var finallist = [];
var obj = xlsx.parse(__dirname + '/test.xlsx');
var title = obj[0].data[0];
var truecase = obj[0].data[1];
for (var i = 1; i < obj[0].data.length; i++) {
    res.push(obj[0].data[i]);
}
var falsecase = res[1];
var mes = listmerge(truecase, falsecase);
for (var m in mes) {
    reslist = reslist + mes[m] + '\n'
}
finallist.push(title);
finallist.push('\n' + reslist);
console.log("共生成" + m + "条case~");
fs.writeFileSync('./test.csv', finallist, 'utf-8');
console.log("已经将生成的用例生成至根目录下的test.csv文件中~");