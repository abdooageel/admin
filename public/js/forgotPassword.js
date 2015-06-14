$(document).ready(function() {
  $("#register").validate({
   // alert("hii");
   //console.log("hii");
    rules:{
     
      FirstName:{
        required: true
      },
      LastName:{
        required: true
      },
      email: {
        required: true,
        email: true,
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
      // } 

    },

  });
});