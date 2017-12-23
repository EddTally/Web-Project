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

//Show hide twitch VOD
//https://dev.twitch.tv/docs/embed#interactive-frames-for-live-streams-and-vods
//add this to show button to reduce load time
document.getElementById("vodShow").addEventListener("click", function(){
	
  let options = {
	  width: 401,
	  height: 301,
	  video: "208391900",
	  autoplay: false
	  };
	
  let player = new Twitch.Player("twitch-vod", options);
  player.setVolume(0.5);
  

	//Changing Buttons
	document.getElementById("vodShow").style.display = "none";
	document.getElementById("vodRemove").style.display = "block";
	
});

	//Remove vod
document.getElementById("vodRemove").addEventListener("click", function(){
	
	//let element = document.getElementById("twitch-vod");
  //element.parentNode.removeChild(element);
	
	var iframes = document.querySelectorAll('iframe');
  for (var i = 0; i < iframes.length; i++) {
    iframes[i].parentNode.removeChild(iframes[i]);
}
	
  document.getElementById("vodRemove").style.display = "none";	
	document.getElementById("vodShow").style.display = "block";
	
	
});

console.log("got to here");

//Dynamic Style Sheet Manipulation
document.getElementById("lightMode").addEventListener("click", function(){
	let sheet = document.createElement('style')
	sheet.innerHTML = "body {background: #79a1e5; color: black;}" +
	"nav {background: #79a1e5;}" +
	"#darkMode {border-style: none;}";
	document.body.appendChild(sheet);
});

document.getElementById("darkMode").addEventListener("click", function(){
	let sheet = document.createElement('style')
	sheet.innerHTML = "body {background: #184796; color: #79a1e5;}" +
	"nav {background: #0f3470;}" +
	"#darkMode {border-style: solid; border-width: 3px; border-color: #79a1e5;}";
	document.body.appendChild(sheet);
});






	