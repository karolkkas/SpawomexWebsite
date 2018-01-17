$(document).ready(function() {
  $(window).scroll(function () {
    var location = $(this).scrollTop();
    if (location < 70) {
      $('nav').removeClass('transparent');
      $('.arrow-up').removeClass('arrow-up--visible');
    } else {
      $('nav').addClass('transparent');
      $('.arrow-up').addClass('arrow-up--visible');
    }
  });

  var scrollLink = $('.scrollTo');
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top }, 500);
  });

  $('.nav a').click(function() {
        $(".navbar-collapse").removeClass("in");
        $('body').removeClass("blocked");
    });

  $('.navbar-toggle').click(function() {
        $('body').toggleClass("blocked");
    });
});
