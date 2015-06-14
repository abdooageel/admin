$(document).ready(function(){
  $('body').on('click', '#delete', function(){
    $('#dell').val($(this).val());
  });

 

  $('body').on('click', '#view', function(){
    window.location.href='/viewItem';
  });

  $('body').on('click', '#dell', function(){
    $.get('/stock/delete/'+$(this).val(),function(result){
      window.location.href='/stock';
    });
  });

  // $('#search').on('input', function(){
  //   var info=$('#search').val();
  //   if(info){
  //     $.get('/search/'+$('#search').val(),function(result){
  //       $('#MeasureTable').empty();
  //       for(key in result){
  //         $('#MeasureTable').append('<tr data-id='+result[key].idmeasure+'><td><a id="name'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name+'</a></td><td ><a id="name_en'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name_en+'</a></td><td class= "text-right"><a id="view"  data-toggle="modal" class="btn btn-primary btn-xs" href= "/sizes/'+result[key].idmeasure+'"><span class="glyphicon glyphicon-eye-open"></span></a></td><td class ="text-right "> <button id="enable" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"  data-value="'+result[key].idmeasure+'"><span class="glyphicon glyphicon-pencil"> </button></td><td class="text-right "><button id="delete" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"  value='+result[key].idmeasure+'><span class="glyphicon glyphicon-trash"></span></a></td> </tr>');
  //       }
  //     });  
  //   }
  //   else{
  //     $.get('/getMeasure',function(result){
  //       $('#MeasureTable').empty();
  //       $('.pagination').show();                                                                     
  //       for(key in result){                                                                                                                    
  //         $('#MeasureTable').append('<tr data-id='+result[key].idmeasure+'><td><a id="name'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name+'</a></td><td ><a id="name_en'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name_en+'</a></td><td class= "text-right"><a id="view"  data-toggle="modal" class="btn btn-primary btn-xs" href= "/sizes/'+result[key].idmeasure+'"><span class="glyphicon glyphicon-eye-open"></span></a></td><td class ="text-right "> <button id="enable" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"  data-value="'+result[key].idmeasure+'"><span class="glyphicon glyphicon-pencil"> </button></td><td class="text-right "><button id="delete" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"  value='+result[key].idmeasure+'><span class="glyphicon glyphicon-trash"></span></a></td> </tr>');
  //       }
  //     });  
  //   }
  // });

  // $('body').on('click', '#view', function(){
  //   window.location.href='/sizes/'+$(this).val();
  // });




 $('body').on('click', '#save', function (e) {
  alert("dddddddd");
    e.preventDefault();
    $('#formStock').submit();
  });
  $("#formStock").submit(function(e) {
    var isvalidate=$("#formStock").valid();
    if(isvalidate){
      $.post("/stock/addStock", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
        } 
        else {
          $('#name').val('');
          $('#adress').val('');
          $('#phone').val('');
          if($("#tbody").children().length>=10){
            $("#tbody tr:last-child").remove();
          }
          $("#tbody").prepend('<tr data-id="'+data.result[0].idstock+'"><td class="text-center"><a id="name'+data.result[0].idstock+'" href="#" data-type="text" data-pk="'+data.result[0].idstock+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name+'</a></td><td class="text-center"><a id="name_en'+data.result[0].idstock+'" href="#" data-type="text" data-pk="'+data.result[0].idstock+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].phone+'</a></td><td class="text-center"><a id="name_en'+data.result[0].idstock+'" href="#" data-type="text" data-pk="'+data.result[0].idstock+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].phone+'</a></td><td class="text-center"><button id="enable" data-value="'+data.result[0].idstock+'" data-placement="top" title="" class="btn btn-info btn-xs" data-original-title="Edit City"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center"><button id="delete" href="#del" data-toggle="modal" data-value="'+data.result[0].idstock+'" data-placement="top" title="" class="btn btn-danger btn-xs" data-original-title="Delete City"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
          $('#newstock').modal('hide');
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
});