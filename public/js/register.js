$(document).ready(function() {

  $("#register").validate({
   // alert("hii");
   //console.log("hii");
    rules:{

      FirstName:{
        required: true
      },
      LastName:{
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      confirmEmail: {
        required: true,
        equalTo: "#email"
      },
      Password :{
        required: true,
        minlength: 5,
      },
      confirmPassword: {
        required : true,
        equalTo: "#password"
      },
      Mobile:{
        required: true
      },
      HomePhone:{
        required: true
      },
      // city: {
      //   valueNotEquals:"-1",
      // },
      // area: {
      //   valueNotEquals: "-1",
      // },
      // mahalla: {
      //   valueNotEquals: "-1",
      // },
      // nearestschool: {
      //   valueNotEquals: "-1",
      // }

    },
    messages:{
     
      FirstName:{
        required: "Please enter your first name",
      },
      LastName:{
        required: "Please enter your First Name",
      },
      email:{
        required: "Please enter your e-mail",
        email: "This is not an electronic mail",
      },
      Password:{
        required: "Please enter your password",
        minlength: "Should be your password at least 5 characters",
      },
      confirmPassword:{
        required: "Please enter your confirmPassword",
        minlength: "Should be your password at least 5 characters",
        equalTo: "Password are not identical"
      },
      confirmEmail:{
        required: "Please enter your confirmEmail",
        
        equalTo: "Email are not identical"
      },
      Mobile:{
        required: "Please enter your Mobile",
      },
      HomePhone:{
        required: "Please enter your HomePhone"
      },
      // city: {
      //   valueNotEquals: "Please enter your city"
      // },
      // area: {
      //   valueNotEquals: "Please enter your area",
      // },
      // mahalla: {
      //   valueNotEquals: "Please enter your mahalla",
      // },
      // nearestschool: {
      //   valueNotEquals: "Please enter your nearestschool",
      // } #F49B23

    },
    showErrors: function (errorMap, errorList) {
        if (errorList.length) {
            $("#serror").html(errorList[0].message);
        }
    },
    errorPlacement: function (error, element) {
        element.focus(function () {
            $("span").html(error);
        }).blur(function () {
            $("span").html('');
        });
    }

  //   errorPlacement: function(error, element) {
  //   if (element.attr("name") == "FirstName" || element.attr("name") == "LastName" ) {
  //     error.appendTo("#Reservationh3");
  //   } else {
  //     
  //   }
  // }
  });
});