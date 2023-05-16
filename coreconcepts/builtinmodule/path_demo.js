const path = require('node:path');

console.log(__dirname);
console.log(__filename);
console.log(path.delimiter);
console.log(path.sep);
console.log(path.basename(__filename));
console.log(path.extname(__filename));