$(document).ready(function(){
  
  var defaults = {
        disabled: true,
  };

  $.extend($.fn.editable.defaults, defaults);
  $('body').on('click','#enable', function(){
    id=$(this).parent().parent().data('id');
    $('#name'+id).editable('toggleDisabled');
    $('#address'+id).editable('toggleDisabled');
    $('#phone'+id).editable('toggleDisabled');

  });

  
  $('a[id^="name"]').editable({
    url: '/stock/editStockName',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit Mahalla name in Arabic !',
    validate: function(v) {
      if(!v) return 'Please enter your Mahalla name in Arabic';
    }
  });

    $('a[id^="address"]').editable({
    url: '/stock/editStockAddress',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'edit stock address !',
    validate: function(v) {
      if(!v) return 'Please enter your Mahalla name in english';
    }
  }); 

    $('a[id^="phone"]').editable({
    url: '/stock/editStockphone',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'edit stock phone !',
    validate: function(v) {
      if(!v) return 'Please enter your Mahalla name in english';
    }
  });

});