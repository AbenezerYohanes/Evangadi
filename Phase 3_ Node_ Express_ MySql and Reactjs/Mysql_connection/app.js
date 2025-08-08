let express=require("express");
let mysql=require("mysql2");



let server=express();

let DB=mysql.createConnection({

    user : "abenezer_mamp",
    password : "abenezer",
    database : "abenezer_mamp"
});

DB.connect((err) =>{
    if(err){
        console.log("connection to the DB failed" , err.message);
    }
    else
    {
        console.log("connection to the DB is successful   ");
    }
});












server.listen(3000,() => {

    console.log("listening on http://localhost:3000/")

});
