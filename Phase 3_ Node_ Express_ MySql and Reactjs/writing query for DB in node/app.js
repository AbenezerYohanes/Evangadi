let express=require("express");
let mysql=require("mysql2");



let server=express();

server.use(express.static("html"));


server.use(
    express.urlencoded({
        extended:true
    })
);

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


server.get("/create_table",(req,res) =>{




    //****************student table query ******************

    let student_table_query= `CREATE TABLE if not exists student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    Last_name VARCHAR(100) NOT NULL
);`

DB.query(student_table_query , (err , results , field) =>{

    if (err) console.log(err);
} );






   //****************subject table query ******************
    let subject_table_query= `CREATE TABLE if not exists subject (
    
    subject_id INT AUTO_INCREMENT PRIMARY KEY,

  
    subject_name VARCHAR(255) NOT NULL,

   
   
    credit_hour INT NOT NULL
);`

DB.query(subject_table_query , (err , results , field) =>{

    if (err) console.log(err);
} );




//****************teacher table query ******************

    let teacher_table_query= `CREATE TABLE if not exists teacher (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_name VARCHAR(255) NOT NULL,
    teacher_email VARCHAR(255) UNIQUE NOT NULL
);`

DB.query(teacher_table_query , (err , results , field) =>{

    if (err) console.log(err);
} );

//****************enrollment table query ******************

 let enrollments_table_query= `CREATE TABLE if not exists enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    subject_id INT NOT NULL,
    teacher_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (subject_id) REFERENCES subject(subject_id),
    FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
);`

DB.query(enrollments_table_query , (err , results , field) =>{

    if (err) console.log(err);
} );
let all_table_created="studnet teacher subject  enrollments are created successfully ";
 res.redirect("/");

});



  // ****************inserting student information to the student table accepting from front end 

  server.post("/StudentRegistered" , (req ,res) =>{

     console.log(req.body);
      let { firstName, lastName } = req.body;


     let student_data_inter=`INSERT INTO student (first_name , Last_name) VALUES (?, ?);`
      
     DB.query(student_data_inter , [firstName, lastName], (err ,result, field)=>{
        if(err) console.log(err);
        else console.log(result);
     });
   res.redirect("/");
  });




  // Insert Teacher
server.post("/TeacherRegistered", (req, res) => {
    let { teacher_name, teacher_email } = req.body;
    let query = `INSERT INTO teacher (teacher_name, teacher_email) VALUES (?, ?)`;
    DB.query(query, [teacher_name, teacher_email], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting teacher");
        } else {
           res.redirect("/");
        }
    });
});

// Insert Subject
server.post("/SubjectRegistered", (req, res) => {
    let { subject_name, credit_hour } = req.body;
    let query = `INSERT INTO subject (subject_name, credit_hour) VALUES (?, ?)`;
    DB.query(query, [subject_name, credit_hour], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting subject");
        } else {
           res.redirect("/");
        }
    });
});

// Enroll Student
server.post("/EnrollStudent", (req, res) => {
    let { student_id, subject_id, teacher_id } = req.body;
    let query = `INSERT INTO enrollments (student_id, subject_id, teacher_id) VALUES (?, ?, ?)`;
    DB.query(query, [student_id, subject_id, teacher_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error enrolling student");
        } else {
            res.send("Student enrolled successfully");
        }
    });
});







server.listen(3000,() => {

    console.log("listening on http://localhost:3000/")

});
