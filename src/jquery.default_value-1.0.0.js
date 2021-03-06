/*
* jquery.default_value - simple way to add default values to text inputs
* Copyright (c) 2010 Igor Alexandrov
* Licensed under the MIT License: http://en.wikipedia.org/wiki/MIT_License
* Requires: jQuery v1.3+
*/

(function($) {
  $.fn.default_value = function(){
    $(this).each(function(index) {
      // если значение == '', то устанавливаем его в 'default_value'
      if ($(this).val() == '')
      {
        $(this).val($(this).attr('default_value'));
      }
      // при фокусе, если значение == 'default_value', то стираем его
      $(this).focus(function(){ 
        if($(this).val() == $(this).attr('default_value'))
        {
          $(this).val('');
        }
      });

      $(this).blur(function(){ 
        if ($(this).val() == '')
        {
          $(this).val($(this).attr('default_value'));
        }
      });
    });
  };
})(jQuery);