const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

http.createServer((req, res) => {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    let read_filePath = path.join(__dirname, 'html', filePath);

    const contentType = mime.lookup(read_filePath) || 'application/octet-stream';

    fs.readFile(read_filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}).listen(3000);

console.log('Server running at http://localhost:3000/');
