$(document).ready(function(){
  $("#contact-form").validate({
      //ignore: ':not(select:visible, input:visible, textarea:visible)',
      rules:{
        name:{
          required: true
        },
        email:{
          required: true
        },
        sub:{
          required: true
        },
         msg:{
          required: true
        }
      },
      messages:{
        name:{
          required: "الرجاء إدخال إسم المرسل "
      },
       email:{
          required: "الرجاء إدخال إيميل المرسل "
      },
       sub:{
          required: "الرجاء إدخال موضوع الرسالة "
      },
       msg:{
            required: " الرجاء تعبئة الرسالة "
        }
    }
  });









/* $('body').on('click', '#save', function (e) {
    e.preventDefault();
    $('#contact-form').submit();
  });*/


/*
  $("#contact-form").submit(function(e) {
    var isvalidate=$("#contact-form").valid();
    if(isvalidate){
    
     //alert($(this));

     $.get('/sendContact/'+1,function(result){
      window.location.href='/contact';
    });

      // send the object to routes 
      $.post("/sendContact", $("#contact-form").serializeObject(), function(data, error){
        return false;
      });
    }
});*/












});