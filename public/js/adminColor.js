$(document).ready(function(){
 
  $('body').on('click','#delete', function(){
    $('#deletee').val($(this).val());
    $("#colorsid").append($(" "+'[data-id = "'+$(this).val()+'"] a:first').text()+" ?");

  });

  $('body').on('click','#deletee', function(){
    var id=$(this).val();
    $.get('/measure/deleteColor/'+$(this).val(),function(result){
      $('[data-id = "'+id+'"]').remove();
    });
  });

  $("#formColors").validate({
    rules:{
      name:{
        required: true,
      },
      name_en:{
        required : true,
      },
    },
    messages:{
      name:{
        required: "Please enter color in arabic !",
      },
      name_en:{
        required: "Please enter color in english !",
      },
    },
  });

  $('body').on('click', '#save', function (e) {
    e.preventDefault();
    $('#formColors').submit();
  });


  $("#formColors").submit(function(e) {
    var isvalidate=$("#formColors").valid();
    if(isvalidate){
      $.post("/measure/addColor", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
          // $("#err").empty();
          // for (err in data.result) {
          //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
          // }
        } 
        else {
          $('#name').val("");
          $('#name_en').val("");
          if($("#colorTable").children().length>=10){
              $("#colorTable tr:last-child").remove();
          }
          $("#colorTable").prepend('<tr data-id="'+data.result[0].idcolor+'">'+
          '<td class="text-center"><a id="name'+data.result[0].idcolor+'" href="#" data-type="text" data-pk="'+data.result[0].idcolor+'" class="editable editable-click editable-disabled">'+data.result[0].name+'</a></td>'+
          '<td class="text-center"><a id="name_en'+data.result[0].idcolor+'" href="#" data-type="text" data-pk="'+data.result[0].idcolor+'" class="editable editable-click editable-disabled">'+data.result[0].name_en+'</a></td>'+
          '<td class="text-center"><button id="enable" value="'+data.result[0].idcolor+'" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button>'+
          '</td><td class="text-center"><button id="delete" href="#del" data-toggle="modal" value="'+data.result[0].idcolor+'" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');

          $('#newColors').modal('hide');
          $.notify({
            title: "<strong>Successful:</strong> ",
            message: "Add a new color has successfully"
          },{
            type: 'success',
            allow_dismiss: true,
            showProgressbar: false,
            placement: {
              from: 'top',
              align: 'center'
            },
            mouse_over: null,
            newest_on_top: true,
            animate: {
              enter: 'animated flipInY',
              exit: 'animated flipOutX'
            },
          });
        }
      });
    }
    return false;
  });
});