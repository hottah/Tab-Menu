(function($){

$(function(){
  init();
  $('.parts_tabmenu>.tabmenu>li>a').click(function(){
    $(this).parent().nextAll().removeClass('active');
    $(this).parent().prevAll().removeClass('active');
    $(this).parent().addClass('active');
    $(this).parents('.parts_tabmenu').find('.tabbody').find('.tabblock').hide();
    $( $(this).attr('href') ).show();
    return false;
  });
  function init(){
    $('.parts_tabmenu').each(function(){
      $(this).find('.tabmenu').find('.tabblock').removeClass('active').eq(0).addClass('active');
      $(this).find('.tabbody').find('.tabblock').hide().eq(0).show();
    })
  }
});

})(jQuery);
