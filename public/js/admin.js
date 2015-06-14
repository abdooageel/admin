$(document).ready(function(){
  $('body').on('click','#deletee',function(){
    $.get('/deleteAdmin/'+$(this).val(),function(result){
      window.location.href='/viewAdmin';
  });
  $('#deletee').val($(this).val());
  }) ;

});