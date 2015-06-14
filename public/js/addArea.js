$(document).ready(function(){
	$('input:radio[name="cityName"]').change(function(){
  	window.location.href='/user/addMahalla';
  });
});  