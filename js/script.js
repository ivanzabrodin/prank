$(document).ready(function() {

  $('.smoothScroll').click(function(event) {
    event.preventDefault();
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 1000);
    });

  $(function () {
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear(2015), 11, 7);
    $('#countdown').countdown({until: austDay, padZeroes: true, format: "HMS"});
  });
 
});