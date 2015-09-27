$(document).ready(function() {
  $('#olvidado').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });

  $('#acceso').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });

  $("#loginForm").validate({
    rules:{
      email:{
        required: true,
        email: true,
      },
      password:{
        required:true,
      }
    },
    messages:{
      email:{
        required: "Please enter your email address !",
      },
      password:{
        required: "Please enter your password !"
      }
    },
    highlight: function(element) {
      $(element).closest('.input-group').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).closest('.input-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
      if(element.parent('.input-group').length) {
          error.insertAfter(element.parent());
      } else {
          error.insertAfter(element);
      }
    },
  }); 
  $(".reveal").mousedown(function() {
    $(".pwd").replaceWith($('.pwd').clone().attr('type', 'text'));
  })

  .mouseup(function() {
    $(".pwd").replaceWith($('.pwd').clone().attr('type', 'password'));
  })

  .mouseout(function() {
    $(".pwd").replaceWith($('.pwd').clone().attr('type', 'password'));
  });

  $('body').show();
  NProgress.start();
  $(window).load(function() {
    NProgress.done(); 
    $('.showIn').removeClass('out');
    $('.showIn').addClass('flipInY');
  });

  // $('body').on('click', '#btnLogin', function (e) {
  //   e.preventDefault();
  //   $('#loginForm').submit();
  // });
  // $("#loginForm").submit(function(e) {
  //   var isvalidate=$("#loginForm").valid();
  //     if(isvalidate){
  //       $.post("/login", $("#loginForm").serializeObject(), function(data, error){
  //         console.log(data);
  //       });
  //     }
  // });
});

