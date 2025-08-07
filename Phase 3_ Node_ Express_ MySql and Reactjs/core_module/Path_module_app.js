let Path_module=require('path');

console.log(__dirname);// __dirname gives the directory name of the current module
console.log(__filename);// __filename gives the file name of the current module
let path_join=Path_module.join(__dirname,'example.html'); // join() method joins all given path segments together
console.log(`Path joined: ${path_join}`);
