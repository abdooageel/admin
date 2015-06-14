$(function() {
  $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
  $(window).bind("load resize", function() {
    topOffset = 50;
    width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
    if (width < 768) {
      $('.navbar-collapse').addClass('collapse');
      topOffset = 100; // 2-row-menu
    } 
    else {
      $('.navbar-collapse').removeClass('collapse');
    }
    height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
      $("#page-wrapper").css("min-height", (height) + "px");
    }
  });
  var url = window.location;
  var element = $('ul.nav a').filter(function() {
    return this.href == url || url.href.indexOf(this.href) == 0;
  }).addClass('active').parent().parent().addClass('in').parent();
  if (element.is('li')) {
    element.addClass('active');
  }
});

//Tooltrip funcation
$(function () {
  $('[data-placement="top"]').tooltip()
})

//Loading img function
// $(window).load(function() {
//   // Animate loader off screen
//   // $(".loadingImg").fadeOut();
// });

//Back to top funcation
$('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
  } 
  else {
    $('#toTop').fadeOut();
  }
});  
$('#toTop').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

// $( window ).resize(function() {
//   $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
// });

//NProgrss funcation
$('body').show();
// NProgress.start();
// setTimeout(function() { 
//   NProgress.done(); 
//   $('.fadeIn').removeClass('out'); 
// },1000)

$(function () {
  $('a[href="#search"]').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
  });
  $('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });
  //Do not include! This prevents the form from submitting for DEMO purposes only!
  $('form').submit(function(event) {
    event.preventDefault();
    return false;
  })
});