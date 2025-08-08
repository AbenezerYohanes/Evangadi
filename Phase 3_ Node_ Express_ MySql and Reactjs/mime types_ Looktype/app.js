const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

http.createServer((req, res) => {



console.log(req.url);


  if (req.url === '/') {
    
      



    let read_filePath =path.join(__dirname , "html/index.html")
    console.log(read_filePath);

    console.log(read_filePath);

    const contentType = mime.lookup(read_filePath) || 'application/octet-stream';

    fs.readFile(read_filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            const contentType = mime.lookup(read_filePath) || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });

}
else
{
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    }

}).listen(3000);

console.log('Server running at http://localhost:3000/');
