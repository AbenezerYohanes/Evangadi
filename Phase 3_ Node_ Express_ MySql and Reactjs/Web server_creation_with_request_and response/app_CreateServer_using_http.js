const http=require('http');

let server=http.createServer((req, respo)=>{

    
    console.log("hellow the server is ready")

   // console.log(req) // this will give all the request object information 

    console.log(req.url)  // the url of request 
    console.log(req.method) // mostly get and for form there is post
    console.log(req.headers) // this give meta data about the request 



    // we can send response to the client
    respo.write("<h1 style='text-align: center; color: white; background-color: green;' >hello User this messsage is from server </h1>")
    respo.end(); // this will end the response and send it to the client


    // information about the response
    respo.writeHead("content-type", "text/html"); // this will set the content type of the response
    
    // also we can use this method to set the status code and status message of the response
    respo.writeHead(200 , {
        "content-type": "text/html"
    }); // this will set the status code and status message of the response 

});

server.listen(3000);
