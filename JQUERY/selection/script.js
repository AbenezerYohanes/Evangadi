// selection using jQuery $() using id name
let x=$("#eth");
console.log(x);
let y=$("#engla");
console.log(y);

// selection using jQuery $() using class name
 let class_selection=(".EHT");
console.log(class_selection);

//  selection using jQuery $() using class name multiple element with the same class name
let class_mul_name=$(".bg-info");
console.log(class_mul_name);

// filtering from class multiple name selection
let filt_class_name=$(".bg-info:first");
console.log(filt_class_name);


//filtering and change css bg color

$("h6").first().css("background-color", "black");

// Example of changing css using jQuery to remove france
 $("#fran").empty();


// Example of hiding element using jQuery
// $("h6[id=ita]").hide();


 let removed_item= $("#engla");
    removed_item.remove();

// Example of adding element  using jQuery 
let new_element=$("#ita");
new_element.after("<h6 class='m-3 border border-primary rounded p-3 text-center bg-info bg-info'>Brazil</h6>");

// altering the text of an element using jQuery
let altered_text=$("#eth");
altered_text.text("Ethiopia is never colonized  country in Africa.");
altered_text.append("<div ><strong> <label></t><input type='checkbox' name='ethio' value='ethio' > if its true check the checkbox</label></strong></div>");

// Example of adding class to an element using jQuery
let add_class=$("#keny").addClass(" " );