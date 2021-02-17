$('.srch_btn').click(function () {
  $('.search_box').toggleClass('active').focus;
  $('.close_search').toggleClass('active').focus;
  $(this).toggleClass('animate');
  $('.search_control').val('');
});

$('.close_search').click(function () {
  $('.search_box').toggleClass('active').focus;
  $('.search_control').val('');
});
