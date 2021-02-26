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

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById('all_tab');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('all_tab_sticky');
  } else {
    navbar.classList.remove('all_tab_sticky');
  }
}

// Data table

$('#s_pitching').DataTable({
  responsive: true,
  select: true,
  // ordering: false,
});

$('#projection').DataTable({
  responsive: true,
  select: true,
  dom: 'Bfrtip',
  buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
  // ordering: false,
});
