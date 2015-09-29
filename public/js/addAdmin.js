$(document).ready(function(){
  $("#addAdmin").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      name:{
        required: true,
      },
      email:{
        required: true,
        email: true,
        remote: {
          url: "/checkEmail",
          type: "post"
        }
      },
      reEnterEmail:{
        required: true,
        email: true,
        equalTo: "#email",
      },
      password:{
        required : true,
        minlength: 5,
      },
      confirmPassword:{
        required : true,
        equalTo: "#password",
      },
      level: {
        required: true,
      },
    },
    messages:{
      name:{
        required: "Please enter the full name !",
      },
      email:{
        required: "Please enter the email address !",
        email:"Please enter a correct email",
        remote:"this email already exist please enter another one"
      },
      reEnterEmail:{
        required: "Please Re-enter the email address !",
        equalTo: "Please enter the same email address again !",
      },
      password:{
        required: "Please enter the password !",
        minlength: "Should be your password at least 5 characters !",
      },
      confirmPassword:{
        required: "Please enter the confirm password !",
        minlength: "Should be your password at least 5 characters !",
      },
      level:{
        required: "Please choose the admin validity !",
      },
    },
    errorPlacement: function (error, element) {
      if ($(element).is('select')) {
          element.next().after(error);
      } else {
          error.insertAfter(element);
      }
    },
    highlight: function(element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).closest('.form-group').removeClass('has-error');
    },
  });
  /* add Admin */
  $('body').on('click', '#btnSubmit', function (e) {
    e.preventDefault();
    $('#addAdmin').submit();
  });
  $("#addAdmin").submit(function(e) {
    var isvalidate=$("#addAdmin").valid();
      if(isvalidate){
        $.post("/addAdmin", $("#addAdmin").serializeObject(), function(data, error){
          console.log(data);
        });
      }
  });
});