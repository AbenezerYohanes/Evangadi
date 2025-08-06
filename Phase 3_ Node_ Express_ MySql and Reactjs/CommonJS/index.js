 let {name, age, add} = require('./varaiable_and_function_export.js');
 let {obj_student} = require('./object_export.js');
console.log("Hello World from CommonJS module! shows the import and export functionality");


console.log("*****************************this is imported from variable and function export module**********************************");
console.log(`Name: ${name}, Age: ${age}`);
console.log(`Sum of 5 and 10 is: ${add(5, 10)}`);

console.log("*****************************this is imported from object export module**********************************");
obj_student.registration("John Doe", 12345);
console.log(`Registered Student: ${obj_student.stud1}, ID: ${obj_student.id}`);
