$(document).ready(function(){
  $('body').on('click', '#view1', function () {
    window.location.href='/company/adminCompany/adminSellerCompany';
   // alert("moahhed");
  });
    
  $('body').on('click', '#delete', function () {
    $('#deletee').val($(this).val());
  });

  $('body').on('click', '#deletee', function () {
    alert($(this).val());
    $.get('/company/deleteCompanySeller/'+$(this).val(),function(result){
    window.location.href='/company/adminCompany/'+result[0].idcompany+'/adminSellerCompany';
    });
  });

  });