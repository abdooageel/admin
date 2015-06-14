$(document).ready(function(){

 $("#formSizes").validate({
    rules:{
      name:{
        required: true
      },
      name_en:{
        required: true
      }
    },
    messages:{
      name:{
        required: "Please enter name Size in arabic !"
      },
      name_en:{
        required: "Please enter name Size in english !"
      }
    },
  });

  $('body').on('click', '#delete', function () {
      $('#del').val($(this).val());
      $("#Sizesid").append($(" "+'[data-id = "'+$(this).val()+'"] a:first').text()+" ?");
  });
  $('body').on('click', '#del', function () {
    var id=$(this).val();
     $.get('/measure/deleteSize/'+$(this).val(),function(result){
      $('[data-id = "'+id+'"]').remove();
     });
  });

  $('body').on('click', '#save', function () {
    $('#formSizes').submit();
    });


  $("#formSizes").submit(function() {
    $.post("/measure/addSizes", $("form#formSizes").serializeObject(), function(data, error){
      if(data.stat !=true){
        alert("error");
        // $("#err").empty();
        // for (err in data.result) {
        //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
        // }
      }else{
        if($("#tbody").children().length>=10){
          $("#tbody tr:last-child").remove();
        }
        $("#tbody").prepend('<tr data-id="'+data.result[0].idsize+'">'+
          '<td class="text-center"> <a id="name'+data.result[0].idsize+'" href="#" data-type="text" data-pk="'+data.result[0].idsize+'" class="editable editable-click editable-disabled">'+data.result[0].name+'</a></td>'+
          '<td class="text-center"> <a id="name_en'+data.result[0].idsize+'" href="#" data-type="text" data-pk="'+data.result[0].idsize+'" class="editable editable-click editable-disabled">'+data.result[0].name_en+'</a></td>'+
          '<td class="text-center">'+
          '<button id="enable" data-value="'+data.result[0].idsize+'" data-placement="top" title="Edit City" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center">'+
          '<button id="delete" href="#del" data-toggle="modal" data-placement="top" title="Delete" value="'+data.result[0].idsize+'" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash">  </span></button></td></tr>');
        $('#newSizes').modal('hide');
        $.notify({
          title: "<strong>Successful:</strong> ",
          message: "Add a new Area has successfully"
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
    return false;
  });
});