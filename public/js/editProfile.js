$(document).ready(function(){
  $("#idUserName").hide(0);
  $('body').on('click','#idEditUserName', function(){
   $("#idUserName").show(300);
   $("#idPhoneNumber").hide(300);
   $("#idPassword").hide(300);
   $("#idEmail").hide(300);
   
  });
  $('body').on('click','#idCancelUserName', function(){
   $("#idUserName").hide(300);
  });
  /////////
  $("#idPassword").hide(0);
  $('body').on('click','#idEditPassword', function(){
   $("#idPassword").show(300);
   $("#idUserName").hide(300);
   $("#idPhoneNumber").hide(300);
   $("#idEmail").hide(300);
   
  });
  $('body').on('click','#idCancelPassword', function(){
   $("#idPassword").hide(300);
  });
  ///////////////
  $("#idEmail").hide(0);
  $('body').on('click','#idEditEmail', function(){
   $("#idEmail").show(300);
   $("#idPassword").hide(300);
   $("#idUserName").hide(300);
   $("#idPhoneNumber").hide(300);
   
  });
  $('body').on('click','#idCancelEmail', function(){
   $("#idEmail").hide(300);
  });
  ////////////////
  $("#idPhoneNumber").hide(0);
  $('body').on('click','#idEditPhoneNumber', function(){
   $("#idPhoneNumber").show(300);
   $("#idEmail").hide(300);
   $("#idPassword").hide(300);
   $("#idUserName").hide(300);
   
  });
  $('body').on('click','#idCancelPhoneNumber', function(){
   $("#idPhoneNumber").hide(300);
  });
  /////////////////////

  $("#idUserNamevaldet").validate({
    rules:{
      FirstName:{
        required: true,

      },
      LastName :{
        required : true,

      }
    },
    messages:{
       FirstName:{
         required: "Please enter your FirstName",
         
       },
      LastName:{
          required: "Please enter your LastName",

      }, 
    },
  });
  $("#idPasswordvaldet").validate({
    rules:{
    Password :{
        required: true,
        minlength: 5,
      },
      ConfirmPassword: {
        required : true,
        equalTo: "#password"
      },
    },
    messages:{
       Password:{
        required: "Please enter your password",
        minlength: "Should be your password at least 5 characters",
      },
      ConfirmPassword:{
        required: "Please enter your confirmPassword",
        minlength: "Should be your password at least 5 characters",
        equalTo: "Password are not identical"
      },
   },  
  });
  $("#idEmailvaldet").validate({
    rules:{
    Password :{
        required: true,
        minlength: 5,
      },
      email: {
        required: true,
        email: true,
      },
      confirmEmail: {
        required: true,
        equalTo: "#email"
      }
      
    },
    messages:{
       Password:{
        required: "Please enter your password",
        minlength: "Should be your password at least 5 characters",
      },
      email:{
        required: "Please enter your e-mail",
        email: "This is not an electronic mail",
      },
      confirmEmail:{
        required: "Please enter your confirmEmail",
        
        equalTo: "Email are not identical"
      },   
   },  
  });
  $("#idPhoneNumbervaldet").validate({
    rules:{
      Mobile:{
        required: true,
        number: true
      },
      HomePhone:{
        required: true,
        number: true
      } 
    },
    messages:{
       Mobile:{
        required: "Please enter your Mobile",
        number: "This is not an number"
      },
      HomePhone:{
        required: "Please enter your HomePhone",
        number: "This is not an number"
      },
    },
  });

});