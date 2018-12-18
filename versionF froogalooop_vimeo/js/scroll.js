// Froogaloop
// https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/froogaloop.js
// https://github.com/vimeo/player-api/blob/master/javascript/froogaloop.js
// http://a.vimeocdn.com/js/froogaloop2.min.js

// $f == Froogaloop

var players = []
$('.inner').each(function() {
  players.push({
      player: new Vimeo.Player($(this).find("iframe").get(0)),
      top: $(this).position().top,
      status: "paused"
  })
});
var viewportHeight = $(window).height();

$(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    for(var i=0; i<players.length;i++) {
    	var elementFromTop = players[i].top - scrollPos;
      var status = (elementFromTop > 0 && elementFromTop < players[i].top + viewportHeight) ? "play" : "pause";   
      if(players[i].status != status) {
          players[i].status = status;
          players[i].player[status]();
          console.log(i, status);      
      }
    }
});

// http://stackoverflow.com/questions/26866025/pause-and-play-video-when-in-viewport