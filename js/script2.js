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

// join form

function visibleForm() {
  var element = document.getElementById('join_form');
  element.classList.toggle('active_signup_form');
}
