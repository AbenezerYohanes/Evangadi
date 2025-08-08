let http=require("http");
let path=require("path");
let fs=require("fs");




let server=http.createServer(( req, res ) =>{


    let user_eneter_url_end_part =req.url ;
    console.log(user_eneter_url_end_part);

    let requested_file_directory=path.join(__dirname, "html" , user_eneter_url_end_part);
    console.log(requested_file_directory);


    if (user_eneter_url_end_part === "/" || user_eneter_url_end_part === "index.html" ){
        requested_file_directory = path.join(__dirname, "html", "index.html");

     fs.readFile(requested_file_directory, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            // Consider sending an error response to the client
            res.writeHead(404, {"Content-type": "text/plain"});
             res.end("404 Not Found");
        } else{
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(data);
        }
     
    });


 } 
 else if (user_eneter_url_end_part === "/index.html") {

   fs.readFile(requested_file_directory , "utf8", (err, data) => {
        if (err) {
            console.log(err);
            // Consider sending an error response to the client
            res.writeHead(404, {"Content-type": "text/plain"});
             res.end("404 Not Found");
        } else{
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(data);
        }
     
    });


 }
else if (user_eneter_url_end_part === "/rooms.html") {

    fs.readFile(requested_file_directory , "utf8", (err, data) => {
        if (err) {
            console.log(err);
            // Consider sending an error response to the client
            res.writeHead(404, {"Content-type": "text/plain"});
             res.end("404 Not Found");
        } else{
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(data);
        }
     
    });


} else if (user_eneter_url_end_part === "/dining.html") {

    fs.readFile(requested_file_directory , "utf8", (err, data) => {
        if (err) {
            console.log(err);
            // Consider sending an error response to the client
            res.writeHead(404, {"Content-type": "text/plain"});
             res.end("404 Not Found");
        } else{
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(data);
        }
     
    });


} else if (user_eneter_url_end_part === "/spa.html") {

    fs.readFile(requested_file_directory , "utf8", (err, data) => {
        if (err) {
            console.log(err);
            // Consider sending an error response to the client
            res.writeHead(404, {"Content-type": "text/plain"});
             res.end("404 Not Found");
        } else{
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(data);
        }
     
    });


} else if (user_eneter_url_end_part === "/contact.html") {

    fs.readFile(requested_file_directory , "utf8", (err, data) => {
        if (err) {
            console.log(err);
            // Consider sending an error response to the client
            res.writeHead(404, {"Content-type": "text/plain"});
             res.end("404 Not Found");
        } else{
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(data);
        }
     
    });


} else  {

    requested_file_directory = path.join(__dirname, "html", "page not found.html");
    fs.readFile(requested_file_directory , "utf8", (err, data) => {
        if (err) {
            console.log(err);
            // Consider sending an error response to the client
            res.writeHead(404, {"Content-type": "text/plain"});
             res.end("404 Not Found");
        } else{
            res.writeHead(200, {"Content-type": "text/html"});
            res.end(data);
        }
     
    });


} 










});

server.listen(3000, () => {
    console.log("server is listenig on http://localhost:3000");
});