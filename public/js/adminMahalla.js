$(document).ready(function(){
  $("#formMahala").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      name:{
        required: true,
      },
      name_en:{
        required: true,
      },
      city_idcity:{
        required: true,
      },
      city_idarea:{
        required: true,
      },
    },
    messages:{
      name:{
        required: "Please enter area in arabic !",
      },
      name_en:{
        required: "Please enter area in english !",
      },
      city_idcity:{
        required: "Please select city name !",
      },
      city_idarea:{
        required: "Please select area name !",
      },
    },
    errorPlacement: function (error, element) {
      if ($(element).is('select')) {
          element.next().after(error);
      } else {
          error.insertAfter(element);
      }
    },
  });
  
  $('body').on('click', '#cancel', function () {
    $('#name').val("");
    $('#name_en').val("");
    $('.selectpicker').selectpicker('val', '');
  });

  $('body').on('click','#delete', function(){
    $('#deletee').val($(this).val());
    $("#Mahallaid").append($(" "+'[data-id = "'+$(this).val()+'"] a:first').text()+" ?");
  });

  $('body').on('click','#deletee', function(){
   $.get('/address/deleteMahalla/'+$(this).val(),function(result){
     $("#tbody tr:last-child").remove();
   });
  });

  $('#city').on('change',function() {
    var id = $('#city').val();
    $.get('/address/getarea/'+id,function(result){
      $('#area').empty();
      for ( var i = 0; i < result.length;  i++ ) {
        $('#area').append("<option value = '"+result[i].idarea+"'>"+result[i].name+"</option>");
      }
    });
  });

  $('body').on('click', '#save', function (e) {
    e.preventDefault();
    $('#formMahala').submit();
  });

  $("#formMahala").submit(function(e) {
    var isvalidate=$("#formMahala").valid();
    if(isvalidate){
      $.post("/address/addMahala", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
          // $("#err").empty();
          // for (err in data.result) {
          //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
          // }
        } 
        else {
          $('#nameArabic').val("");
          $('#nameEnglish').val("");
          $('#city').val('');
          $('#area').empty();
          if($("#tbody").children().length>=10){
            $("#tbody tr:last-child").remove();
          }
          $("#tbody").prepend('<tr data-id="'+data.result[0].idmahalla+'">'+
          '<td class="text-center"><a id="name'+data.result[0].idmahalla+'" href="#" data-type="text" data-pk="'+data.result[0].idmahalla+'" class="editable editable-click editable-disabled">'+data.result[0].mahallaName+'</a></td>'+
          '<td class="text-center"> <a id="name_en'+data.result[0].idmahalla+'" href="#" data-type="text" data-pk="'+data.result[0].idmahalla+'" class="editable editable-click editable-disabled">'+data.result[0].mahallaName_en+'</a></td>'+
          '<td class="text-center">'+data.result[0].areaName+'</td>'+
          '<td class="text-center">'+data.result[0].areaName_en+'</td>'+
          '<td class="text-center">'+
            '<button id="enable" value="'+data.result[0].idmahalla+'" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil">  </span></button>'+
          '</td><td class="text-center">'+
            '<button id="delete" value="'+data.result[0].idmahalla+'" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button>'+
          '</td></tr>');

          $('#newMahala').modal('hide');
          $.fn.name_en();
          $.fn.name();
          $.notify({
            title: "<strong>Successful:</strong> ",
            message: "Add a new Mahala has successfully"
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

  var defaults = {
        disabled: true,
  };

  $.extend($.fn.editable.defaults, defaults);
  $('body').on('click','#enable', function(){
    id=$(this).parent().parent().data('id');
    $('#name'+id).editable('toggleDisabled');
    $('#name_en'+id).editable('toggleDisabled');
  });

  $.fn.name_en = function(){  
    $('a[id^="name_en"]').editable({
      url: '/address/editMahallaEn',
      type: 'text',
      pk: 1,
      name: 'name',
      title: 'Edit Mahalla name in English !',
      validate: function(v) {
        if(!v) return 'Please enter your Mahalla name in english';
      }
    }); 
  };
  $.fn.name_en();
  $.fn.name = function(){
    $('a[id^="name"]').editable({
      url: '/address/editMahalla',
      type: 'text',
      pk: 1,
      name: 'name',
      title: 'Edit Mahalla name in Arabic !',
      validate: function(v) {
        if(!v) return 'Please enter your Mahalla name in Arabic';
      }
    });
  };
  $.fn.name();
});