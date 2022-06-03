/* eslint-disable prettier/prettier */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title><form></form></title></head></html>');
        res.write(
            '<body><form method="post" action="/process"><input name="massage"></input></form></body>',
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Thank you for submitting');
            res.end();
        });
    } else {
        res.write('Not found!');
        res.end();
    }
});

server.listen(5000);
console.log('Listenning on port 5000');

// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`)

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString())
// })
