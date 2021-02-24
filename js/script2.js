$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

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

//===========
// ============
var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active_mlb');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

$('#pitching').DataTable({
  responsive: true,
  select: true,
  // ordering: false,
});

// =========
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

//==========
