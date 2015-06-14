$(document).ready(function(){
  $('body').on('click', '#view', function () {
    window.location.href='/typeBusiness/adminTypeBusiness/'+$(this).val()+'/adminGenre';
  });

  $('body').on('click','#delete',function () {
    $('#deletee').val($(this).val());
    $("#topid").append($(" "+'[data-id = "'+$(this).val()+'"] a:first').text()+" ?");

  });
  
  $('body').on('click','#deletee',function () {
    var id=$(this).val();
    $.get('/typeBusiness/deleteTOB/'+$(this).val(),function(result){
      $('[data-id = "'+id+'"]').remove();
    })
  });

  $("#formtob").validate({
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
        required: "Please enter Type of Business in arabic !",
      },
      name_en:{
        required: "Please enter Type of Business in english !",
      },
    },
  });  

  $('body').on('click', '#save', function (e) {
    e.preventDefault();
    $('#formtob').submit();
  });

  $("#formtob").submit(function() {
    var isvalidate=$("#formtob").valid();
    if(isvalidate){
      $.post("/typeBusiness/addTob", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
          // $('#newtob').modal('hide');
          // var e ="";
          // for (err in data.result) {
          //   e+=data.result[err].msg+'</br>';
          // }
          // $.notify({
          //   title: "<strong>error:</strong> ",
          //   message: e
          // },{
          //   type: 'danger',
          //   allow_dismiss: true,
          //   showProgressbar: false,
          //   placement: {
          //     from: 'top',
          //     align: 'center'
          //   },
          //   mouse_over: null,
          //   newest_on_top: true,
          //   animate: {
          //     enter: 'animated flipInY',
          //     exit: 'animated flipOutX'
          //   },
          // });
        } 
        else {
          $('#name').val("");
          $('#name_en').val("");
          if($("#TOB").children().length>=10){
            $("#TOB tr:last-child").remove();
          }
          $("#TOB").prepend('<tr data-id="'+data.result[0].idtob+'">'+
            '<td> <a id="name'+data.result[0].idtob+'" href="#" data-type="text" data-pk="'+data.result[0].idtob+'" class="editable editable-click editable-disabled">'+data.result[0].name+'</a></td>'+
            '<td> <a id="name_en'+data.result[0].idtob+'" href="#" data-type="text" data-pk="'+data.result[0].idtob+'" class="editable editable-click editable-disabled">'+data.result[0].name_en+'</a></td>'+
            '<td class="text-right"><button id="view" value="'+data.result[0].idtob+'" data-title="Edit" data-toggle="modal" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-eye-open"></span></button>'+
            '</td><td class="text-right">'+
              '<button id="enable" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button>'+
            '</td><td class="text-right">'+
              '<button id="delete" value="'+data.result[0].idtob+'" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button>'+
            '</td></tr>');
          $('#newtob').modal('hide');
          $.notify({
            title: "<strong>Successful:</strong> ",
            message: "Add a new Type Business has successfully"
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