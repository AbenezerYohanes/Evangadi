let express =require("express");


let Server = express();

console.log("server is ready");

Server.use(express.static("sport page"));



Server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
    });
