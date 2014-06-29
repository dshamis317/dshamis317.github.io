$(function () {
  // var router = new Router();
  // Backbone.history.start();

  $('#name').click(function() {
      $('html, body').animate({
        scrollTop: $(".home").offset().top
      }, 500);
    })

  $('#about').click(function() {
      $('html, body').animate({
        scrollTop: $(".about-section").offset().top - 75 + 'px'
      }, 500);
    })

  $('#portfolio').click(function() {
      $('html, body').animate({
        scrollTop: $(".portfolio-section").offset().top - 75 + 'px'
      }, 500);
    })

  $('#contact').click(function() {
      $('html, body').animate({
        scrollTop: $(".contact-section").offset().top - 75 + 'px'
      }, 500);
    })

  $('#resume-open').click(function() {
    $('.resume-embed').slideToggle();
  })
})

