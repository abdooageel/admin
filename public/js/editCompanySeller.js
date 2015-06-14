$(document).ready(function(){
  $("#formSeller").validate({
        //ignore: ':not(select:visible, input:visible, textarea:visible)',
        rules:{
          first_name:{
            required: true
          },
          email:{
            required: true,
             email: true
          },
          level:{
            required: true
          },
          last_name:{
            required: true
          },
          password:{
            required: true
          }
        },
        messages:{
          first_name:{
            required: "Please enter first name !"
          },
          email:{
            required: "Please enter email !"
          },
          level:{
            required: "Please select level !"
          },
          last_name:{
            required: "Please enter last name !"
          },
          password:{
            required: "Please enter password !"
          }
        }
        // errorPlacement: function (error, element) {
        //   if ($(element).is('select')) {
        //       element.next().after(error);
        //   } else {
        //       error.insertAfter(element);
        //   }
        // },
  });


  var defaults = {
        disabled: true,
  };

  $.extend($.fn.editable.defaults, defaults);
  $('body').on('click','#enable', function(){
    id=$(this).parent().parent().data('id');
    $('#first_name'+id).editable('toggleDisabled');
    $('#last_name'+id).editable('toggleDisabled');
    $('#email'+id).editable('toggleDisabled');
    $('#password'+id).editable('toggleDisabled');
    $('#level'+id).editable('toggleDisabled');

  });

  $('a[id^="level"]').editable({
    url: '/company/UpdateCompanyLevel',
    type: 'text',
    pk: 1,
    name: 'level',
    title: 'Edit level !',
    validate: function(v) {
      if(!v) return 'Please enter your level';
    }
  });

  $('a[id^="password"]').editable({
    url: '/company/editCompanySellerPass',
    type: 'text',
    pk: 1,
    name: 'password',
    title: 'Edit password !',
    validate: function(v) {
      if(!v) return 'Please enter your password';
    }
  });

  $('a[id^="email"]').editable({
    url: '/company/editCompanySellerEmail',
    type: 'text',
    pk: 1,
    name: 'email',
    title: 'Edit email !',
    validate: function(v) {
      if(!v) return 'Please enter your email';
    }
  });
  $('a[id^="last_name"]').editable({
    url: '/company/editCompanySellerLname',
    type: 'text',
    pk: 1,
    name: 'last_name',
    title: 'Edit school !',
    validate: function(v) {
      if(!v) return 'Please enter your last name';
    }
  });

  $('a[id^="first_name"]').editable({
    url: '/company/editCompanySellerFname',
    type: 'text',
    pk: 1,
    name: 'first_name',
    title: 'Edit first_name !',
    validate: function(v) {
      if(!v) return 'Please enter your first name';
    }
  });

  $('body').on('click', '#save', function () {
    $('#formSeller').submit();
    });
});