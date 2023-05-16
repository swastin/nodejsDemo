const fs = require('node:fs');
const rfileName = './Nodejs/coreconcepts/builtinmodule/filesystem/readfile.txt';
const wfileName = './Nodejs/coreconcepts/builtinmodule/filesystem/writeFile.txt';
fs.open(wfileName, 'r+', (err, fd) => {

    if (err) { throw err };

    fs.read(fd, (err, bytesRead, buffer) => {
        if (err) { throw err }; console.log("bytesRead\t " + bytesRead); console.log(buffer.toString('utf-8'));

        fs.write(fd, "this is another world ", (err, written, string) => {
            if (err) { throw err }

            console.log("\n" + written);
            console.log(string);

        });

    })

});