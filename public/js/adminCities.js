$(document).ready(function(){
  $("#formCitie").validate({
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
        required: "Please enter city in arabic !",
      },
      name_en:{
        required: "Please enter city in english !",
      },
    },
  });

  $('body').on('click','#delete', function(){
    $('#deletee').val($(this).val());
    $("#Cityid").append($(" "+'[data-id = "'+$(this).val()+'"] a:first').text()+" ?");

  });

  $('body').on('click','#deletee', function(){
    $.get('/address/deleteCity/'+$(this).val(),function(result){
      $("#tbody tr:last-child").remove();
    });
  });

  $('body').on('click', '#sub', function (e) {
    e.preventDefault();
    $('#formCitie').submit();
  });

  $("#formCitie").submit(function(e) {
    var isvalidate=$("#formCitie").valid();
    if(isvalidate){
      $.post("/address/addcity", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
        } 
        else {
          $('#name').val('');
          $('#name_en').val('');
          if($("#tbody").children().length>=10){
            $("#tbody tr:last-child").remove();
          }
          $("#tbody").prepend('<tr data-id="'+data.result[0].idcity+'"><td class="text-center"><a id="name'+data.result[0].idcity+'" href="#" data-type="text" data-pk="'+data.result[0].idcity+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name+'</a></td><td class="text-center"><a id="name_en'+data.result[0].idcity+'" href="#" data-type="text" data-pk="'+data.result[0].idcity+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name_en+'</a></td><td class="text-center"><button id="enable" data-value="'+data.result[0].idcity+'" data-placement="top" title="" class="btn btn-info btn-xs" data-original-title="Edit City"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center"><button id="delete" href="#del" data-toggle="modal" data-value="'+data.result[0].idcity+'" data-placement="top" title="" class="btn btn-danger btn-xs" data-original-title="Delete City"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
          $('#newCitie').modal('hide');
          $.fn.name_en();
          $.fn.name();
          $.notify({
            title: "<strong>Successful:</strong> ",
            message: "Add a new city has successfully"
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
      url: '/address/editnameEn',
      type: 'text',
      pk: 1,
      name: 'name_en',
      title: 'Edit city name in English !',
      validate: function(v) {
        if(!v) return 'Please enter your school name in English';
      }
    });
  };
  $.fn.name_en();

  $.fn.name = function(){
    $('a[id^="name"]').editable({
      url: '/address/editname',
      type: 'text',
      pk: 1,
      name: 'name',
      title: 'Edit city name in Arabic !',
      validate: function(v) {
        if(!v) return 'Please enter your school name in Arabic';
      }
    });
  };
  
  $.fn.name();

});



  
