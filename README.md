# web-project
Assessment Website



Twitch API VOD Doc
https://dev.twitch.tv/docs/embed#interactive-frames-for-live-streams-and-vods
'Invalid operation: t.channel is not implemented' is unavoidable, this is because
I want to play a VOD therefore I have not specified a twitch channel.
If I specify a twitch channel it has priority over the VOD, I do not want to load
a twitch channel.

GET http://ad.doubleclick.net/ddm/ad/javwppyr/xscaivj/p0vfr/;ord=1513547641772? net::ERR_BLOCKED_BY_CLIENT
The above Console errors happen if you have adblock enabled. This is fine.

SlideShow for bulldog images
https://www.w3schools.com/howto/howto_js_slideshow.asp

For looping through a class to assign a slideshow number to each dot I used
https://stackoverflow.com/questions/39452193/loop-through-array-and-add-event-listener-click-to-each

Got general basics of how to use dynamic style sheet manipulation + manipluating other things from
https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript

SHOW REMOVE VOD ------------------
When trying to use a single button to show and remove the twitch VOD, I got a null console error because the
ID used for the event listener hadn't been defined yet, this might have been because I had the ID being changed 
for the 1 button when clicked in the showVod event listener. 
I had to settle for a less eloquent solution and have 2 buttons.
One initially display:none with a removeVod id and the showVod as a block.
showVod then dissapears whilst the other button appears. This gets around the console errors that unfortunatley 
plauged the 'better' solution.