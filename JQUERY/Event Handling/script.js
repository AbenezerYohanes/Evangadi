// code for switch off the section section
$("#switch_off").on("click",SWITCH_OOF);

function SWITCH_OOF(){
    $(Section_id).hide();
};

// code for Power on the section section

$("#Power_on_Id").on("click",POWER_ON);

function POWER_ON(){
    $(Section_id).show();
};
// code for toggle the section section
$("#Toggle_id").on("click",TOGGLE );

function TOGGLE(){
    $(Section_id).slideToggle();
};

// code for form validation 
$("#form_submit_id").on("click",FORM_SUBMIT);

function FORM_SUBMIT(e){
    e.preventDefault(); // Prevent the default form submission behavior
    let Fname_Input = $("#Fname_input").val();
    let Lname_input = $("#Lname_input").val();
    let Phone_Num = $("#Phone_Num").val();
   
    if(Fname_Input  .length === 0 && Lname_input.length === 0 && Phone_Num.length === 0){
       $("#Label_Fname").append("<p class='error_message'><strong style='color: chocolate' >First name is required</strong></p>");
        $("#Label_Lname").append("<p class='error_message'><strong style='color: chocolate' >Last name is required</strong></p>");
         $("#Label_Pnum").append("<p class='error_message'><strong style='color: chocolate' >phone number is required</strong></p>");

    }
    else 
     {
        $("#form_submit_id").after("<p style='color: green'>Form submitted successfully! </p>");
       $(".error_message").empty(); // Clear the error message
        
        // You can add further processing here, like sending the data to a server
       

     }
    
}