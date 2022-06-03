/* eslint-disable prettier/prettier */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Programmer!');
        res.write('This is home page');
        res.end();
    } else if (req.url === '/about') {
        res.write('this is about-us page');
        res.end();
    } else {
        res.write('Not found!');
        res.end();
    }
});

server.listen(5000);
console.log('Listenning on port 5000');
