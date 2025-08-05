// let x=document.getElementsByTagName("h1");
// console.log(x[1]); 
// x[0].className="text-center" // chaning the class name of bootsrtape name





// creating the HTML element and appending it to the body
// let newElement=document.createElement("h2");
// console.log(newElement);
// newElement.textContent="This is a new heading";
// document.body.appendChild(newElement); // appending the new element to the body
// newElement.className="text-center"// adding class to the new element  


// adding a new fruit in the fruit list
let fruitList = document.getElementById("list_fruit");
console.log(fruitList);
let newlist=document.createElement("li");
newlist.textContent="Manngo";
fruitList.appendChild(newlist);


//*******************************adding element of html through JS *

document.body.innerHTML += "<div><h2 class='text-center'>This html part is add through JS code </h2>  <label> <input type='checkbox' id='checkbox' checked name='apple' value='apple'> <b>apple</b></label></div>";
// this will add the new element at the end of the body