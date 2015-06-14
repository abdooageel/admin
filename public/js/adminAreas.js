$(document).ready(function(){
  
  $("#formArea").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      name:{
        required: true,
      },
      name_en:{
        required : true,
      },
      city_idcity:{
        required : true,
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
        required: "Please select city name !"
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

  $('body').on('click', '#save', function (e) {
    e.preventDefault();
    $('#formArea').submit();
  });

  $('body').on('click', '#cancel', function () {
    $('#name').val("");
    $('#name_en').val("");
    $('.selectpicker').selectpicker('val', '');
  });

  $("#formArea").submit(function(e) {
    var isvalidate=$("#formArea").valid();
    if(isvalidate){
      $.post("/address/addAreas", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
          // $("#err").empty();
          // for (err in data.result) {
          //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
          // }
        }else{
          $('#name').val("");
          $('#name_en').val("");
          $('.selectpicker').selectpicker('val', '');
          if($("#tbody").children().length>=10){
            $("#tbody tr:last-child").remove();
          }
          $("#tbody").prepend('<tr data-id="'+data.result[0].idarea+'">'+
            '<td class="text-center"> <a id="name'+data.result[0].idarea+'" href="#" data-type="text" data-pk="'+data.result[0].idarea+'" class="editable editable-click editable-disabled">'+data.result[0].areaName+'</a></td>'+
            '<td class="text-center"> <a id="name_en'+data.result[0].idarea+'" href="#" data-type="text" data-pk="'+data.result[0].idarea+'" class="editable editable-click editable-disabled">'+data.result[0].areaName_en+'</a></td>'+
            '<td class="text-center">'+data.result[0].cityName+'</td>'+
            '<td class="text-center">'+data.result[0].cityName_en+'</td>'+
            '<td class="text-center">'+
            '<button id="enable" data-value="'+data.result[0].idarea+'" data-placement="top" title="Edit City" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center">'+
            '<button id="delete" href="#del" data-toggle="modal" data-placement="top" title="Delete" value="'+data.result[0].idarea+'" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash">  </span></button></td></tr>');
          $('#newArea').modal('hide');
          $.fn.name_en();
          $.fn.name();
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
    }
    return false;
  });

  $('body').on('click','#delete',function(){
      $('#deletee').val($(this).val());
      $("#Areaid").append(" "+$('[data-id = "'+$(this).val()+'"] a:first').text()+" ?");
   }) ;

  $('body').on('click','#deletee',function(){
      $.get('/address/deleteArea/'+$(this).val(),function(result){
          $("#tbody tr:last-child").remove();
      });
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
      url: '/address/editAreaNameEn',
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
      url: '/address/editAreaName',
      type: 'text',
      pk: 1,
      name: 'name_en',
      title: 'Edit city name in English !',
      validate: function(v) {
        if(!v) return 'Please enter your school name in English';
      }
    });
  };
  $.fn.name();

});



  
