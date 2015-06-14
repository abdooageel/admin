$(document).ready(function(){
  $("#formCompany").validate({
      //ignore: ':not(select:visible, input:visible, textarea:visible)',
      rules:{
        name:{
          required: true
        },
        tob_idtob:{
          required: true
        },
        logo:{
          required: true
        },
        name_en:{
          required: true
        },
        level:{
          required: true
        }
      },
      messages:{
        name:{
          required: "Please enter name Company in arabic !"
        },
        tob_idtob:{
          required: "Please enter Type Bis !"
        },
        logo:{
          required: "Please choice logo !"
        },
        name_en:{
          required: "Please enter name Company in english!"
        },
        level:{
          required: "Please select level !"
        }
      }

  });

  $('body').on('click','#delete', function(){
    $('#deletee').val($(this).val());
  });

  $('body').on('click','#deletee', function(){
    $.get('/compan/deleteCompany/'+$(this).val(),function(result){
      window.location.href='/company/adminCompany';
    });
  });

  $('body').on('click', '#View', function () {
  	//alert($(this).val());
    window.location.href='/company/adminCompany/'+$(this).val()+'/adminCompanyView';
  });

    $('body').on('click', '#Addresses', function () {
    window.location.href='/company/adminCompany/'+$(this).val()+'/adminCompanyAddress';
  });

     $('body').on('click', '#seller', function () {
      window.location.href='/company/adminCompany/'+$(this).val()+'/adminSellerCompany';
  });

  $('body').on('click', '#save', function (e) {
    e.preventDefault();
    $('#formCompany').submit();
  });

  $('body').on('click', '#cancel', function () {
    $('#name').val("");
    $('#name_en').val("");
    $('.selectpicker').selectpicker('val', '');
  });

  $("#formCompany").submit(function(e) {
    var isvalidate=$("#formCompany").valid();
    if(isvalidate){
      $.post("/company/addCompany", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
      
        }
        else{
          $('#name').val("");
          $('#name_en').val("");
          $('.selectpicker').selectpicker('val', '');
          if($("#tbody").children().length>=10){
            $("#tbody tr:last-child").remove();
          }
          $("#tbody").prepend('  <tr><td>'+data.result[0].name+'</td><td>'+data.result[0].name_en+'</td><td class="text-right">'+ 
            '<button id="View" value="'+data.result[0].idcompany+'" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-eye-open"></span></button></td><td class="text-right">'+ 
            '<button id="Addresses" value="'+data.result[0].idcompany+'" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-map-marker"></span></button></td><td class="text-right">'+ 
            '<button id="seller" value="'+data.result[0].idcompany+'" class="btn btn-warning btn-xs"><span class="glyphicon glyphicon-user"></span></button></td><td class="text-right">'+ 
            '<button id="delete" value="'+data.result[0].idcompany+'" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
          $('#newCompany').modal('hide');
       
          $.notify({
            title: "<strong>Successful:</strong> ",
            message: "Add a new Company has successfully"
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