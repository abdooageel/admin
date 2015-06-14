$(document).ready(function(){
   $('body').on('click','#delete',function(){
    $('#deletee').val($(this).val());

   }) ;




    $('body').on('click','#deletee',function(){
        $.get('/typeBusiness/deletegenreee/'+$(this).val(),function(result){
            window.location.href='/typeBusiness/adminTypeBusiness/'+result[0].tob_idtob+'/adminGenre';
        });
    }) ;



  $('body').on('click', '#view', function () {
    window.location.href='/typeBusiness/adminTypeBusiness/adminGenre/'+$(this).val()+'/adminTypeGenre';
  });
});