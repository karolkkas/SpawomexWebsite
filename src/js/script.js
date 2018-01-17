$(document).ready(() => {
  $(window).scroll(function () {
    let location = $(this).scrollTop();
    if (location < 70) {
      $('nav').removeClass('transparent');
      $('.arrow-up').removeClass('arrow-up--visible');
    } else {
      $('nav').addClass('transparent');
      $('.arrow-up').addClass('arrow-up--visible');
    }
  });

  let scrollLink = $('.scrollTo');
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top }, 500);
  });

  $('.nav a').click(() => {
        $(".navbar-collapse").removeClass("in");
        $('body').removeClass("blocked");
    });

  $('.navbar-toggle').click(() => {
        $('body').toggleClass("blocked");
    });
});
