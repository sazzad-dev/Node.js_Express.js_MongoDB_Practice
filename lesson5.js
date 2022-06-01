// Path Module

const path = require('path');

const myPath =
    'F:/workplace/Web_Dev(practice)/NodeJS/Node.js_Express.js_MongoDB_Practice/lesson5.js';

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));

// OS Module

const os = require('os');

console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());

// Fs(file system) Module

const fs = require('fs');

fs.writeFileSync('myFile.txt', 'Hello! ');
fs.appendFileSync('myFile.txt', ' How are you?');

// sync way
const data = fs.readFileSync('myFile.txt');
console.log(data.toString());

// async way
fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString());
});
