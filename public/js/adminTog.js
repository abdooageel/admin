$(document).ready(function(){
  $('body').on('click','#delete',function(){
      $('#deletee').val($(this).val());
  }) ;

  $('body').on('click','#deletee',function(){
    $.get('/typeBusiness/deleteTog/'+$(this).val(),function(result){
    window.location.href='/typeBusiness/adminTypeBusiness/adminGenre/'+result[0].genre_idgenre+'/adminTypeGenre';
    });
  }) ;
});