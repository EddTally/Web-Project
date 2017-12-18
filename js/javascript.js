//Bulldog SlideShow
//https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
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

/*Using query selector to select by css identifier because
I don't want to loop through the HTML Collection*/

//Adding event listeners to Next and Previous 'buttons'
document.querySelector(".next1").addEventListener("click", function(){
	plusSlides(1);
});
document.querySelector(".prev1").addEventListener("click", function(){
	plusSlides(-1);
});


//Dot slideshow transitioner eventListeners
let dots = [].slice.call(document.getElementsByClassName("dot"));
dots.forEach(function(element, index){
	element.addEventListener("click", function(){
		currentSlide(index + 1);
	});
});

/*	
//Twitch Vod
//https://dev.twitch.tv/docs/embed#interactive-frames-for-live-streams-and-vods

  var options = {
	  width: 401,
	  height: 301,
	  video: "208391900",
	  autoplay: false
	  };
	
  var player = new Twitch.Player("twitch-vod", options);
  player.setVolume(0.5); */


//Dynamic Style Sheet Manipulation

function swapStyleSheet(sheet){
	document.getElementById("stylesheet1").setAttribute("href", sheet);
	sheet.preventDefault();
}
document.getElementById("lightMode").addEventListener("click", function(){
	swapStyleSheet("css/styles.css");
});

document.getElementById("darkMode").addEventListener("click", function(){
	var sheet = document.createElement('style')
	sheet.innerHTML = "body {background: #184796; color: white;}" +
	"nav {background: #0f3470;}" +
	"darkMode {font-weight: bold; color: blue;}";
	document.body.appendChild(sheet);
});

	