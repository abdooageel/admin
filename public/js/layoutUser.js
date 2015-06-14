$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );

      // $('#carousel-example-generic').on('slide.bs.carousel', function () {
  //     // do something…
  // })

  $('#carousel13').carousel({
    interval: 3000,
    // cycle: true
  })
});