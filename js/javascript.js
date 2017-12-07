

      var embed = new Twitch.Embed("twitch-embed", {
        width: 427,
        height: 240,
        channel: "AdmiralBulldog",
        layout: "video",
        autoplay: false
      });

      embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
      });
	  
		  
		  
    