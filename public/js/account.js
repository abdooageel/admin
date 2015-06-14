$(document).ready(function(){
	$("#YourOrder").hide(300);
		$('body').on('click','#idPersonaldata', function(){
	   	$("#Personaldata").show(300);
	  	$("#YourOrder").hide(300); 
	 	});

	$('body').on('click','#idYourOrder', function(){
  	$("#YourOrder").show(300);
    $("#Personaldata").hide(300);  
 	});
});