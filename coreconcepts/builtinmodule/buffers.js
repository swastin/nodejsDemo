const buffer = require('node:buffer');
const buf = Buffer.from([1, 2, 3,]);
console.log(buf);
var buf1 = new Buffer(10);
buf1.write([10, 11, 12, 122, 1222, 13, 133, 14, 15].toString());
console.log(buf1);
console.log([10, 11, 12, 122, 1222, 13, 133, 14, 15].toString());