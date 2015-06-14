$(document).ready(function(){
  $('#Area').hide();
  $('#Mahalla').hide();
  $("#formSchool").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      name:{
        required: true,
      },
      latit:{
        required: true,
      },
      city_idcity:{
        required: true,
      },
      name_en:{
        required: true,
      },
      longit:{
        required: true,
      },
      area_idarea:{
        required: true,
      },
      mahalla_idmahalla:{
        required: true,
      },
    },
    messages:{
      name:{
        required: "Please enter school in arabic !",
      },
      latit:{
        required: "Please enter latitudes number !",
      },
      city_idcity:{
        required: "Please select city name !",
      },
      name_en:{
        required: "Please enter school in english !",
      },
      longit:{
        required: "Please enter longitude number !",
      },
      area_idarea:{
        required: "Please select area name !",
      },
      mahalla_idmahalla:{
        required: "Please select mahalla name !",
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

  $('body').on('click', '#delete', function(){
    $('#deletee').val($(this).val());
    // alert($(this).val());
    $("#schoolid").append($(" "+'[data-id = "'+$(this).val()+'"] a:first').text()+" ?");
  });
  $('body').on('click', '#deletee', function(){
    var id=$(this).val();
    $.get('/address/deleteSchool/'+$(this).val(),function(result){
      $('[data-id = "'+id+'"]').remove();
    });
  });

  $('#city_idcity').on('change',function() {
    var id = $('#city_idcity').val();
      $('#Area').hide();
      $('#Mahalla').hide();
    $.get('/address/getarea/'+id,function(result){
      $('#Area').show(300);
      $('#area').empty();
      $('#mahalla').empty();
      $('#area').append('<option value="" style="color:grey; display:none;">Please Select Area</option>');
      for ( var i = 0; i < result.length;  i++ ) {
        $('#area').append("<option value = '"+result[i].idarea+"'>"+result[i].name+"</option>");
      }
    });
  });

  $('#area').on('change',function() {
    var id = $('#area').val();
    $('#mahalla').empty();
    $.get('/address/getmahalla/'+id,function(result){
      $('#Mahalla').show(300);
      $('#mahalla').append('<option value="" style="color:grey; display:none;">Please Select mahalla</option>');
      for ( var i = 0; i < result.length;  i++ ) {
        $('#mahalla').append("<option value = '"+result[i].idmahalla+"'>"+result[i].name+"</option>");
      }
    });
  });

  $('body').on('click', '#save', function (e) {
    e.preventDefault();
    $('#formSchool').submit();
  });

  $("#formSchool").submit(function(e) {
    var isvalidate=$("#formSchool").valid();
    if(isvalidate){
      $.post("/address/addschool", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
          // $("#err").empty();
          // for (err in data.result) {
          //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
          // }
        } 
        else {
          $('#name').val('');
          $('#latitudes').val('');
          $('#city_idcity').val('');
          $('#name_en').val('');
          $('#longitude').val('');
          $('#area').empty();
          $('#mahalla').empty();
          $('#Area').hide();
          $('#Mahalla').hide();
          if($("#tbody").children().length>=10){
            $("#tbody tr:last-child").remove();
          }
          $("#tbody").prepend('<tr data-id="'+data.result[0].idschool+'">'+
            '<td class="text-center"> <a id="name'+data.result[0].idschool+'" href="#" data-type="text" data-pk="'+data.result[0].idschool+'" class="editable editable-click editable-disabled">'+data.result[0].schoolName+'</a></td>'+
            '<td class="text-center"> <a id="name_en'+data.result[0].idschool+'" href="#" data-type="text" data-pk="'+data.result[0].idschool+'" class="editable editable-click editable-disabled">'+data.result[0].schoolName_en+'</a></td>'+
            '<td class="text-center">'+data.result[0].cityName+'</td>'+
            '<td class="text-center">'+data.result[0].areaName+'</td>'+
            '<td class="text-center">'+data.result[0].mahallaName+'</td>'+
            '<td class="text-center"> <a id="latit'+data.result[0].idschool+'" href="#" data-type="text" data-pk="'+data.result[0].idschool+'" class="editable editable-click editable-disabled">'+data.result[0].latitude+'</a></td>'+
            '<td class="text-center"> <a id="longit'+data.result[0].idschool+'" href="#" data-type="text" data-pk="'+data.result[0].idschool+'" class="editable editable-click editable-disabled">'+data.result[0].longitude+'</a></td>'+
            '<td class="text-center">'+
            '<button id="enable" data-placement="top" title="Edit School" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center">'+
            '<button id="delete" value="'+data.result[0].idschool+'" href="#del" data-toggle="modal" data-placement="top" title="Delete School" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
          $('#newschool').modal('hide');
          $.fn.name();
          $.fn.name_en();
          $.fn.latit();
          $.fn.longit();
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
      $('#latit'+id).editable('toggleDisabled');
      $('#longit'+id).editable('toggleDisabled');

  }); 

  $.fn.latit =function(){ 
    $('a[id^="latit"]').editable({
      url: '/address/editlatitSchool',
      type: 'text',
      pk: 1,
      name: 'name',
      title: 'Edit Measure name in Arabic !',
      validate: function(v) {
        if(!v) return 'Please enter your Measure name in Arabic';
      }
    });
  };
  $.fn.latit();

  $.fn.longit =function(){
    $('a[id^="longit"]').editable({
      url: '/address/editlongitSchool',
      type: 'text',
      pk: 1,
      name: 'name',
      title: 'Edit Measure name in Arabic !',
      validate: function(v) {
        if(!v) return 'Please enter your Measure name in Arabic';
      }
    });
  };
  $.fn.longit();
  
  $.fn.name_en = function(){
    $('a[id^="name_en"]').editable({
      url: '/address/SchoolEditNameEn',
      type: 'text',
      pk: 1,
      name: 'name_en',
      title: 'Edit Measure name in English !',
      validate: function(v) {
        if(!v) return 'Please enter your Measure name in English';
      }
    });
  };
  $.fn.name_en();

  $.fn.name = function(){
    $('a[id^="name"]').editable({
      url: '/address/SchoolEditName',
      type: 'text',
      pk: 1,
      name: 'name',
      title: 'Edit Measure name in Arabic !',
      validate: function(v) {
        if(!v) return 'Please enter your Measure name in Arabic';
      }
    });
  };
  $.fn.name();

});