let form = document.getElementById("from_id");
let first = document.getElementById("firstName").value;


form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    if (first.length === 0) {
        alert("Please enter your first name.");
        return;
    }   
    if (first !=0){
        alert("hello " + first);
        return;
    }// You can add more form handling logic here    
    alert("Form submitted with First Name: " + first);
});

console.log(first);

