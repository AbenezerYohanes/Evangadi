
function changebgColor() {
    document.body.style.backgroundColor = "lightblue";
};  

/**
 * Reference to the DOM element with the ID "bgOnHover".
 * Typically used to manipulate or listen for events on this element.
 * 
 */
let x=document.getElementById("colorchange");
x.onmouseover=changeOnHoverColor;

function changeOnHoverColor() {
    document.body.style.backgroundColor = "#452A74";
}; 

let domlistener=document.getElementById("domaddlistener");
domlistener.addEventListener("click", dombackchangen);

function dombackchangen() {
    document.body.style.backgroundColor = "#DA7C2A";
}; 

domlistener.addEventListener("mouseover", secoundchange)

function secoundchange() {
    document.body.style.backgroundColor = "#5392C6";
}