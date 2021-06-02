　$(function () {
    $('.c-hamburger').on('click', function () {
      $(this).toggleClass('active');
      $('.l-navi').toggleClass('active');
      $('.l-wrapview').toggleClass('active');
    });
    $('.l-wrapview').on('click', function () {
      $(this).toggleClass('active');
      $('.l-navi').toggleClass('active');
      $('.c-hamburger').toggleClass('active');
    });
  });
  