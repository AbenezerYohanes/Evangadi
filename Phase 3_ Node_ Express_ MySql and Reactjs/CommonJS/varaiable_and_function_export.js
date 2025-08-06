// file: variable_and_function_export.js

let name = "abel";
let age = 25;

function add(a, b) {
  return a + b;
}

module.exports = { add, name, age };