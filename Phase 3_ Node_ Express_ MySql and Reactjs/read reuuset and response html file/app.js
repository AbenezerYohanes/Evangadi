let http = require("http");
let path = require("path");
let fs = require("fs");
const mime = require('mime-types');

// Base directory for your HTML files
const htmlDirectory = path.join(__dirname, "html");

let server = http.createServer((req, res) => {
    let requestedUrl = req.url;
    let filePath;

    // Handle the root URL and index.html
    if (requestedUrl === "/" || requestedUrl === "/index.html") {
        filePath = path.join(htmlDirectory, "index.html");
    } else {
        // Construct the file path for other requests
        filePath = path.join(htmlDirectory, requestedUrl);
    }
    
    // Check if the file exists and is readable
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Log the error for debugging
            console.error(`Error reading file: ${err.message}`);
            
            // Serve a 404 page for any file not found
            fs.readFile(path.join(htmlDirectory, "page not found.html"), "utf8", (error, notFoundData) => {
                if (error) {
                    res.writeHead(404, { "Content-type": "text/plain" });
                    res.end("404 Not Found");
                } else {
                    res.writeHead(404, { "Content-type": "text/html" });
                    res.end(notFoundData);
                }
            });
        } else {
            // Determine the content type based on the file extension
            const contentType = mime.lookup(filePath) || 'application/octet-stream';
            
            // Send the file with the correct content type
            res.writeHead(200, { "Content-type": contentType });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
});