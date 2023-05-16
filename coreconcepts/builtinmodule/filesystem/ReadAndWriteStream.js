const fs = require('node:fs');
const rfileName = './Nodejs/coreconcepts/builtinmodule/filesystem/readfile.txt';
const wfileName = './Nodejs/coreconcepts/builtinmodule/filesystem/writeFile.txt';
/**
 * copy the conent from readfile.txt to writeFile.txt
 */
const readStream = fs.createReadStream(rfileName);
const writeStream = fs.createWriteStream(wfileName);
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
    console.log(chunk.toString());

});


