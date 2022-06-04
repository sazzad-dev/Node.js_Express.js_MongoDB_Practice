/* eslint-disable prettier/prettier */
const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);
// file write
ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
});

// another way of file write
ourReadStream.pipe(ourWriteStream);

// file write in a server
const http = require('http');
// const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
    myReadStream.pipe(res);
});
server.listen(5000);
