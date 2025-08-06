let x=document.getElementById("container");
console.log(x);

 
let y=document.getElementById("text");
console.log("getElementById");
console.log(y);
y.style.color = "blue";
y.textContent = "This is a new text content!";

 let z=document.querySelectorAll(".instructions");
 console.log("querySelectorAll");
 console.log(z);

let a=document.querySelector(".instructions");
console.log("querySelector");
console.log(a);

let c=document.getElementsByClassName("instructions");
console.log("getElementsByClassName");
console.log(c);


let pink = document.getElementsByTagName("p");
console.log("getElementsByTagName");
console.log(pink);
for(let i=0; i<pink.length; i++){
    pink[i].style.color = "red"; //  Change color to strawberry
}

