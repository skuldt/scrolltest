// Froogaloop
// https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/froogaloop.js
// https://github.com/vimeo/player-api/blob/master/javascript/froogaloop.js
// http://a.vimeocdn.com/js/froogaloop2.min.js

// $f == Froogaloop
var players = []
$('.feed').each(function() {
  players.push({
      player: new Vimeo.Player($(this).find("iframe").get(0)),
      top: $(this).position().top,
      status: "paused"
  })
});
var viewportHeight = $(window).height();
players[0].player.play();

$(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    for(var i=0; i<players.length;i++) {
    	var elementFromTop = players[i].top - scrollPos;
      var status = (elementFromTop > -50 && elementFromTop < players[i].top + viewportHeight + 50) ? "play" : "pause";   
      if(players[i].status != status) {
          players[i].status = status;
          players[i].player[status]();
          console.log(i, status);      
      }
    }
});