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

    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: ""
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        play: function() { // Останавливаем остальные
            $(this).jPlayer("pauseOthers");
        },
        wmode: "window",
        smoothPlayBar: true,
        keyEnabled: true
    });
 
    $("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "" 
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        play: function() { // Останавливаем остальные
            $(this).jPlayer("pauseOthers");
        },
        cssSelectorAncestor: "#jp_container_2",
        wmode: "window",
        smoothPlayBar: true,
        keyEnabled: true
    });

    $("#jquery_jplayer_3").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "" 
          });
        },
        swfPath: "/js",
        supplied: "mp3,oga",
        play: function() { // Останавливаем остальные
            $(this).jPlayer("pauseOthers");
        },
        cssSelectorAncestor: "#jp_container_3",
        wmode: "window",
        smoothPlayBar: true,
        keyEnabled: true
    });
});
 