$(document).ready(function() {

  $("#loginn").validate({
    rules:{
      email:{
        required: true,
        email: true
      },
      password :{
        required : true,
        minlength: 5,
      }
    },
    messages:{
       email:{
         required: "Please enter your e-mail",
         email: "This error is not an e-mail"
       },
      password:{
          required: "Please enter your password",
          minlength: "Should be your password at least 5 characters",
      }, 
    },
 
  });
});