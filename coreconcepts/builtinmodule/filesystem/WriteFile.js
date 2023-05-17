const fs = require('node:fs');
var fileName = './Nodejs/coreconcepts/builtinmodule/filesystem/readfile.txt';
var data = "where are you bro ?";
fs.writeFile(fileName, data, (err) => {
    if (err) { throw err; }
    
    

});