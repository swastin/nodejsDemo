const fs = require('node:fs');
const { join } =require('node:path');
const { tmpdir } = require('node:os');
/* create directory in provided path */
const path = './Nodejs/coreconcepts/builtinmodule/filesystem';
fs.mkdir(path + '/destination', { recursive: true }, (err) => {
    if (err) throw err;
});



/*create temporary directory */
fs.mkdtemp(join(tmpdir(), 'foo-'), (err, directory) => {
    if (err) throw err;
    console.log(directory);
    // Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2
});