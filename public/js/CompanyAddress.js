$(document).ready(function(){
  $('#Area').hide();
  $('#School').hide();
  $('#Mahalla').hide();
  $("#formAddres").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      latit:{
        required: true
      },
      default:{
        required: true
      },
      area:{
        required: true
      },
      idschool:{
        required: true
      },
      address_desc:{
        required: true
      },
      longit:{
        required: true
      },
      city_idcity:{
        required: true
      },
      mahalla:{
        required: true
      }
    },
    messages:{
      latit:{
        required: "Please enter latit !"
      },
      default:{
        required: "Please select Branch !"
      },
      area:{
        required: "Please select Area !"
      },
      idschool:{
        required: "Please select School !"
      },
      address_desc:{
        required: "Please enter Description !"
      },
      longit:{
        required: "Please enter longit !"
      },
      city_idcity:{
        required: "Please select City !"
      },
      mahalla:{
        required: "Please select Mahala !"
      }
    },
    errorPlacement: function (error, element) {
      if ($(element).is('select')) {
          element.next().after(error);
      } else {
          error.insertAfter(element);
      }
    },
  });

  $('body').on('click', '#delete', function () {
       $('#deletee').val($(this).val());
    });

  $('body').on('click', '#deletee', function () {
       $.get('/company/deleteCompanySeller/'+$(this).val(),function(result){
        window.location.href='/company/adminCompany/'+result[0].idcompany+'/adminSellerCompany';
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
      for ( var i = 0; i < result.length;  i++ ) {
        $('#area').append("<option value = '"+result[i].idarea+"'>"+result[i].name+"</option>");
      }
    });
  });

  $('#area').on('change',function() {
    var id = $('#area').val();
    $('#Mahalla').hide();
    $('#School').hide();
    $.get('/address/getmahalla/'+id,function(result){
      $('#Mahalla').show(300);
      $('#mahalla').empty();
      $('#idschool').empty();
      for ( var i = 0; i < result.length;  i++ ) {
        $('#mahalla').append("<option value = '"+result[i].idmahalla+"'>"+result[i].name+"</option>");
      }
    });
  });
  
  $('#mahalla').on('change',function() {
    var id = $('#mahalla').val();
    $.get('/address/getschool/'+id,function(result){
      $('#School').show(300);
      $('#idschool').empty();
      for ( var i = 0; i < result.length;  i++ ) {
        $('#idschool').append("<option value = '"+result[i].idschool+"'>"+result[i].schoolName+"</option>");
      }
    });
  });

  $('body').on('click', '#view', function () {
      window.location.href='/company/adminCompany/adminCompanyAddress';
  });

  $('body').on('click', '#save', function () {
    $('#formAddres').submit();
    });


  $("#formAddres").submit(function() {
    $.post("/company/addAddress", $("form#formAddres").serializeObject(), function(data, error){
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
        $("#tbody").prepend('<tr data-id="'+data.result[0].idcompany_address+'">'+
          '<td> <a id="latit'+data.result[0].idcompany_address+'" href="#" data-type="text" data-pk="'+data.result[0].idcompany_address+'" class="editable editable-click editable-disabled">'+data.result[0].latit+'</a></td>'+
          '<td> <a id="longit'+data.result[0].idcompany_address+'" href="#" data-type="text" data-pk="'+data.result[0].idcompany_address+'" class="editable editable-click editable-disabled">'+data.result[0].longit+'</a></td>'+
          '<td>'+data.result[0].na+'</td>'+
          '<td>'+data.result[0].address_desc+'</td>'+
          '<td class="text-right">'+
          '<button id="enable" data-value="'+data.result[0].idcompany_address+'" data-placement="top" title="Edit City" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-right">'+
          '<button id="delete" href="#del" data-toggle="modal" data-placement="top" title="Delete" value="'+data.result[0].idcompany_address+'" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash">  </span></button></td></tr>');
        $('#newAddres').modal('hide');
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