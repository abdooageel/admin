$(document).ready(function(){
  
  var defaults = {
        disabled: true,
  };

  $.extend($.fn.editable.defaults, defaults);
  $('body').on('click','#enable', function(){
    id=$(this).parent().parent().data('id');
    $('#name'+id).editable('toggleDisabled');
    $('#name_en'+id).editable('toggleDisabled');
  }); 
  
  $('a[id^="name_en"]').editable({
    url: '/measure/MeasurEditNameEn',
    type: 'text',
    pk: 1,
    name: 'name_en',
    title: 'Edit Measure name in English !',
    validate: function(v) {
      if(!v) return 'Please enter your Measure name in English';
    }
  });

  $('a[id^="name"]').editable({
    url: '/measure/MeasurEditName',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit Measure name in Arabic !',
    validate: function(v) {
      if(!v) return 'Please enter your Measure name in Arabic';
    }
  });
});