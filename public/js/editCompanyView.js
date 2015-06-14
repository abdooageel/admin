$(document).ready(function(){

var defaults = {
   disabled: true,
 };

  $.extend($.fn.editable.defaults, defaults);
  $('#enable').click(function() {
    $('#user li .editable').editable('toggleDisabled');
   // $('#phone .editable').editable('toggleDisabled');
  }); 
  
  $('#name').editable({
    url: '/company/editCompanyName',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Enter Company name in Arabic',
    validate: function(v) {
      if(!v) return 'Please Enter Company Name';
    }
  });


  $('#name_en').editable({
    url: '/company/editCompanyNameEn',
    type: 'text',
    pk: 1,
    name: 'name_en',
    title: 'Enter Company name in English',
    validate: function(v) {
      if(!v) return 'Please Enter Company Name';
    }
  });

   $('#level').editable({
    url: '/company/editCompanyLevel',
    type: 'text',
    pk: 1,
    name: 'level',
    title: 'Enter Company level',
    validate: function(v) {
      if(!v) return 'Please Enter Company level';
    } 
  });


   $('#phone').editable({
    url: '/company/editCompanyPhone',
    type: 'text',
    pk: 1,
    name: 'phone',
    title: 'Enter Company phone',
    validate: function(v) {
      if(!v) return 'Please Enter Company phone';
    } 
  });

   $('#email').editable({
    url: '/company/editCompanyEmail',
    type: 'text',
    pk: 1,
    name: 'phone',
    title: 'Enter Company Email',
    validate: function(v) {
      if(!v) return 'Please Enter Company Email';
    } 
  });


});

