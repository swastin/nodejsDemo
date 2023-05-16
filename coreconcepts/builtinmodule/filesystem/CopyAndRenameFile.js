const fs = require('node:fs');
const src =  './Nodejs/coreconcepts/builtinmodule/filesystem/';
const dest = './Nodejs/coreconcepts/builtinmodule/filesystem/destination/';

fs.copyFile(src + '/readfile.txt', dest +'/readfile.txt', (err) => {
    if (err) { throw err; }

});
fs.rename(src + '/readfileDemo.txt', src + '/readfile.txt', (err) => {
    if (err) { throw err; }
});
