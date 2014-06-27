$(function () {
  // var router = new Router();
  // Backbone.history.start();

  $('#about').click(function() {
      $('html, body').animate({
        scrollTop: $(".about-section").offset().top
      }, 100);
    })

  $('#portfolio').click(function() {
      $('html, body').animate({
        scrollTop: $(".portfolio-section").offset().top
      }, 100);
    })

  $('#contact').click(function() {
      $('html, body').animate({
        scrollTop: $(".contact-section").offset().top
      }, 100);
    })
})

