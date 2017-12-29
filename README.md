# web-project
Assessment Website

Development Problems and References -----------------

Creating a loader for, onhover refresh button
https://www.w3schools.com/howto/howto_css_loader.asp

Got general basics of how to use dynamic style sheet manipulation + manipluating other things from
https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript

Counter added to the appending stylesheet JS functions 'lightMode' and 'darkMode' 
to reduce webpage size if mutiple of the same style tries to be appended during runtime.
Counter resets when other style is selected.

Falling money reference/inspiration
https://premiumcoding.com/css3-tricks-falling-leaves-css/

Form Basics
https://github.com/CTEC3905/03-lab-javascript-1
https://www.w3schools.com/html/html_forms.asp
https://www.w3schools.com/jsref/prop_checkbox_checked.asp

Twitch API VOD Doc
*strong* VOD Doesn't Work when website is loaded from GitHub, therefore VOD show and Close Function will not work
https://dev.twitch.tv/docs/embed#interactive-frames-for-live-streams-and-vods
'Invalid operation: t.channel is not implemented' is unavoidable, this is because
I want to play a VOD therefore I have not specified a twitch channel.
If I specify a twitch channel it has priority over the VOD, I do not want to load
a twitch channel.

SHOW REMOVE VOD ------------------
When trying to use a single button to show and remove the twitch VOD, I got a null console error because the
ID used for the event listener hadn't been defined yet, this might have been because I had the ID being changed 
for the 1 button when clicked in the showVod event listener. 
I had to settle for a less eloquent solution and have 2 buttons.
One initially display:none with a removeVod id and the showVod as a block.
showVod then dissapears whilst the other button appears. This gets around the console errors that unfortunatley 
plauged the 'better' solution.

GET http://ad.doubleclick.net/ddm/ad/javwppyr/xscaivj/p0vfr/;ord=1513547641772? net::ERR_BLOCKED_BY_CLIENT
The above Console errors happen if you have adblock enabled. This is fine.

SlideShow for bulldog images
https://www.w3schools.com/howto/howto_js_slideshow.asp

For looping through a class to assign a slideshow number to each dot I used
https://stackoverflow.com/questions/39452193/loop-through-array-and-add-event-listener-click-to-each

Embedding youtube videos
https://developers.google.com/youtube/iframe_api_reference
*Strong* 
Popup iframe utube video wont open more than once, function still being called as styles are still being appended!


