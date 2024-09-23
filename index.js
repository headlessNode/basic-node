const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = './';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Read the file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
        } else {
            res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 300');
});
