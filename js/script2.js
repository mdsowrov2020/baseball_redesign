// ==============================
window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

$('.testimonial_slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//
$('.sponsor_slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$('.srch_btn').click(function () {
  $('.search_box').toggleClass('active').focus;
  $('.search_body').toggleClass('active').focus;
  $('.close_search').toggleClass('active').focus;
  $(this).toggleClass('animate');
  $('.search_control').val('');
});

$('.close_search').click(function () {
  $('.search_box').toggleClass('active').focus;
  $('.search_body').toggleClass('active').focus;
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

// Data table

$('#p_batting').DataTable({
  responsive: true,
  select: true,
  // dom: 'Bfrtip',
  // buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
  ordering: false,
  searching: false,
});

$('#s_pitching').DataTable({
  responsive: true,
  select: true,
  // dom: 'Bfrtip',
  // buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
  ordering: false,
  searching: false,
});

$('#projection').DataTable({
  responsive: true,
  select: true,
  // dom: 'Bfrtip',
  // buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
  ordering: false,
  searching: false,
});
$('#s_fielding').DataTable({
  responsive: true,
  select: true,
  // dom: 'Bfrtip',
  // buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
  ordering: false,
  searching: false,
});

// slider
