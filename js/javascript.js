	
	//Bulldog SlideShow
	//https://www.w3schools.com/howto/howto_js_slideshow.asp
	
	var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }
	
	
	
	
	//Twitch Vod
	//https://dev.twitch.tv/docs/embed#interactive-frames-for-live-streams-and-vods
	
	var options = {
		width: 401,
		height: 301,
 		video: "208391900",
		autoplay: false
	};
	
	var player = new Twitch.Player("twitch-vod", options);
	player.setVolume(0.5);
	
	
