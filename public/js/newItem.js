$(document).ready(function(){
  
  $('#company_idcompany').on('change',function() {
    var id = $('#company_idcompany').val();
    $.get('/typeBusiness/getGenre/'+id,function(result){
      $('#genre_idgenre').empty();
      
      $('#genre_idgenre').append('<option value="" style="color:grey; display:none;">Please Select Genre</option>');
      for ( var i = 0; i < result.length;  i++ ) {
        $('#genre_idgenre').append("<option value = '"+result[i].idgenre+"'>"+result[i].name+"</option>").selectpicker('refresh');;
      }
    });
  });
});
