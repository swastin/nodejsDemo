
const fs = require('node:fs');
var fileName = './Nodejs/coreconcepts/builtinmodule/filesystem/readfile.txt';

fs.readFile(fileName, (err, data) => {
  if (err) { throw err; }
 console.log(data.toString());

});

