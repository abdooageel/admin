
$("[name='discount_flag']").bootstrapSwitch('state', false);
    $(document).ready(function(){
      $("#Hide1").show(400); //-.addClass('animated fadeInDown');
      $("#Hide").hide(400);
      $("[name='discount_flag']").on('switchChange.bootstrapSwitch', function (e, data) {
        var state=$(this).bootstrapSwitch('state');
        if(state)
        {
          $("#Hide").show(400); //-.addClass('animated fadeInDown');
          $("#Hide1").hide(400);//- .addClass('animated fadeInDown');
        }
        else
        {
          $("#Hide").hide(400);//-.addClass('animated fadeInUp');
          $("#Hide1").show(400);//- .addClass('animated fadeInUp');
        }
      });
    });
    $("#formnewVendor").submit(function() {
        $('#newVendor').modal('hide');
        $.notify({
          title: "<strong>Successful:</strong> ",
          message: "Add a new Measure has successfully"
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
    });
       
