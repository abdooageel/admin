$(document).ready(function(){
  $('input:radio[name="cityName"]').change(function(){
   	window.location.href='/user/addArea';
  });

  // var $radios = $('input:radio[name=cityName]');
  // if($radios.is(':checked') === true) {
  //    alert("ddd");
  // }

  
// Handler for .load() called.
    //$("#tab1").delay(70);
   //$( "#tab1" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
//    $("#tab1").show(0);
//    $("#tab4").hide(0);
//    $("#tab3").hide(0);
//    $("#tab2").hide(0);
// /////////

//  $('body').on('click','#NextCity', function(){
//    $("#tab2").show(300);
//    $("#tab4").hide(300);
//    $("#tab3").hide(300);
//    $("#tab1").hide(300);
   
//  });

//  ///////////////

//  $('body').on('click','#NextArea', function(){
//    $("#tab3").show(300);
//    $("#tab4").hide(300);
//    $("#tab2").hide(300);
//    $("#tab1").hide(300);
   
//  });

//  $('body').on('click','#PreviousArea', function(){
//    $("#tab1").show(300);
//    $("#tab4").hide(300);
//    $("#tab2").hide(300);
//    $("#tab3").hide(300);
   
//  ////////////////
//  });
//  $('body').on('click','#NextMahalla', function(){
//    $("#tab4").show(300);
//    $("#tab3").hide(300);
//    $("#tab2").hide(300);
//    $("#tab1").hide(300);
   
//  });
//  $('body').on('click','#PreviousMahalla', function(){
//    $("#tab2").show(300);
//    $("#tab4").hide(300);
//    $("#tab3").hide(300);
//    $("#tab1").hide(300);
//  });


//  $('body').on('click','#PreviousSchool', function(){
//    $("#tab3").show(300);
//    $("#tab4").hide(300);
//    $("#tab2").hide(300);
//    $("#tab1").hide(300);
//  });
//  $("#tabletab2 tbody tr td ").validate({
//     rules:{
//     cityName :{
//         required: true,
//       }
//     },
//     messages:{
//        cityName:{
//         required: "Please enter your password",
       
//       },
//    },  
//   }); 

});