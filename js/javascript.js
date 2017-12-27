//Dynamic Style Sheet Manipulation

let x = 0; //lightMode counter
let y = 0; //darkMode counter

document.getElementById("lightMode").addEventListener("click", function(){
	if(x == 0){
	let sheet = document.createElement('style')
	sheet.innerHTML = "body {background: #79a1e5; color: black;}" +
	"#navDiv {background: #79a1e5;}" +
	"footer {background: #4d7fd6}";
	document.body.appendChild(sheet);
	x =+ 1;
	y = 0; //resetting darkMode counter
	}else{
		console.log("lightMode already on");
	}
});

document.getElementById("darkMode").addEventListener("click", function(){
	if(y == 0){	
	let sheet = document.createElement('style')
	sheet.innerHTML = "body {background: #184796; color: #79a1e5;}" +
	"#navDiv {background: #0f3470;}" +
	"#darkMode {background: #79a1e5; color: black; } " +
	"#darkMode:hover {background: white}" + 
	"footer {background: #0f3470}" ;
	document.body.appendChild(sheet);
	y =+ 1;
	x = 0; //resetting lightMode counter
	}
	else{
		console.log("darkMode already on");
	}
});

//Form -----------------------------
let getDetails = document.getElementById("getDetails");
let getFirstName = document.getElementById("getFirstName");
let firstName = document.getElementById("firstName");

let getLastName = document.getElementById("getLastName");
let lastName = document.getElementById("lastName");

let gender = document.getElementById("gender");

let getAge = document.getElementById("getAge");
let age = document.getElementById("age");

function submitForm(ev) {	

  var getGender = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < getGender.length; i++) {
      if (getGender[i].checked) {
        txt = txt + getGender[i].value + " ";
      }
  }

  firstName.innerHTML = getFirstName.value;
	lastName.innerHTML = getLastName.value;
	gender.innerHTML = txt;
	age.innerHTML = getAge.value;
	
  ev.preventDefault();
}

getDetails.addEventListener("submit", submitForm);

//Resetting form
document.getElementById("resetBtn").addEventListener("click", function(){
	document.getElementById("getDetails").reset();
	
	firstName.innerHTML = "First Name";
	lastName.innerHTML = "Last Name";
	gender.innerHTML = "Gender";
	age.innerHTML = "Age";
});

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
	
	var iframes = document.querySelectorAll('iframe');
  for (var i = 0; i < iframes.length; i++) {
		iframes[i].parentNode.removeChild(iframes[i]);
		}
	
  document.getElementById("vodRemove").style.display = "none";	
	document.getElementById("vodShow").style.display = "block";
});

//console.log("got to here");






	