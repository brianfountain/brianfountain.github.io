/* 	Very Simple Javascript Slider Control
	Created By Jeff Baker on November 10, 2014
	Copyright (C) 2014 Jeff Baker
	www.seabreezecomputers.com/slider/
	Version 1.0 - November 10, 2014
	
	Paste the following code after the css and html for your sliders, 
	or right before </body> in your html file:
	
	<script type="text/javascript" src="slider.js"></script>
	
*/

// EDIT THE FOLLOWING VARIABLES:

// Put each of your sliders in slider_setup() here along with a callback function:
//slider_setup(document.getElementById('audio_bar'), example_callback);


function slider_callback(slider_bar, percentage)
{
	//var audio_file_position = slider_bar.id.split("_")[2];
	var audio_file_position = slider_bar.id.replace(/\D/g, "");
	var audio = audio_files[audio_file_position].audio;
	if (audio_type == "html5")
		var duration = audio.duration;
	else if (audio_type == "wmp")
		var duration = audio.currentMedia.duration;
	else // qt
		var duration = Math.floor(audio.GetDuration()*(1/audio.GetTimeScale()));
	
	var time = (percentage * .01) * duration; // time = (50 *. 01) = .50 * 60 = 30;
	
	if (audio_type == "html5")
		audio.currentTime = time; 
	else if (audio_type == "wmp")
		audio.controls.currentPosition = time;
	else // qt
		audio.SetTime(audio.GetTimeScale() * time); 
}

/* If your script needs to move the slider, for example, if playing
	a music file and you need to move the buffer for how much the song has loaded
	or you need to move the slider and knob for how much the song has played: */
/*change_slider(document.getElementById('slider_bar1'), "buffer", 50); // move buffer up to 50%
change_slider(document.getElementById('slider_bar1'), "slider", 10); // move slider/knob up to 10%
change_slider(document.getElementById('vert_slider_bar2'), "buffer", 50); // move buffer up to 50%
change_slider(document.getElementById('vert_slider_bar2'), "slider", 50); // move slider/knob up to 50%
*/

// DO NOT EDIT THE VARIABLES BELOW

var current_slider = false; // Variable to hold the slider currently being moved by the user

function slider_setup(slider_bar, callback)
{
	// This function sets up the mouse and touch controls for each slider on the page
	/*slider_bar.onmousedown = function(event) { slider(event, slider_bar); };
	document.onmouseup = function(event) { slider(event, slider_bar); };
	document.onmousemove = function(event) { slider(event, slider_bar); };*/
	if(typeof callback === "undefined")
		callback = null;
	if (document.addEventListener) // Chrome, Safari, FF, IE 9+
	{
		slider_bar.addEventListener('mousedown',function(event) { slider(event, slider_bar, callback); },false);
		document.addEventListener('mouseup',function(event) { slider(event, slider_bar, callback); },false);
		document.addEventListener('mousemove',function(event) { slider(event, slider_bar, callback); },false);
		slider_bar.addEventListener('touchstart',function(event) { slider(event, slider_bar, callback); },false);
		document.addEventListener('touchend',function(event) { slider(event, slider_bar, callback); },false);
		document.addEventListener('touchmove',function(event) { slider(event, slider_bar, callback); },false);
	}
	else // IE < 9
	{
		slider_bar.attachEvent('onmousedown',function(event) { slider(event, slider_bar, callback); });
		document.attachEvent('onmouseup',function(event) { slider(event, slider_bar, callback); });
		document.attachEvent('onmousemove',function(event) { slider(event, slider_bar, callback); });
	}
}


function slider(event, bar, callback)
{
	if (!event) event = window.event; // for older IE <= 9
	//var bar = event.target || event.srcElement; // The element being clicked on (FF || IE)
	if (event.type == "mousedown" || event.type == "touchstart") current_slider = bar;
	else if (event.type == "mouseup" || event.type == "touchend") current_slider = false; 
	if ((event.type == "mousemove"  || event.type == "mouseup") && !current_slider) return; 
	if ((event.type == "touchmove"  || event.type == "touchend") && !current_slider) return; 
	// get current screen scrollTop and ScrollLeft  
	var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var	x = Math.round(event.clientX + scrollLeft - current_slider.offsetLeft);
	var	y = Math.round(event.clientY + scrollTop - current_slider.offsetTop);
	if (event.type.match(/touch/i))
	{
		x = event.touches[0].pageX - current_slider.offsetLeft;
		y = event.touches[0].pageY - current_slider.offsetTop;
	}
	event.preventDefault(); // Prevents browsers from highlighting and touch devices from scrolling
	
	// Change vertical slider position
	if (current_slider.className.match(/vert/i) || current_slider.id.match(/vert/i))
	{
		var perc = Math.round((y / current_slider.offsetHeight) * 100);
		perc = 100 - perc; // Make vertical bar go up instead of down
	}
	else // Change horizontal slider position
		var perc = Math.round((x / current_slider.offsetWidth) * 100);
	
	if (perc < 0) perc = 0; if (perc > 100) perc = 100;
		
	change_slider(current_slider, "slider", perc);
	
	if (typeof callback === "function")
		callback(current_slider, perc);

}


function change_slider(bar, part, perc)
{
	if (perc < 0) perc = 0; if (perc > 100) perc = 100;
	if (bar.className.match(/vert/i) || bar.id.match(/vert/i))
		vert_perc = 100 - perc; // Make vertical bar control go up instead of down
		
	var children = bar.getElementsByTagName('*');
	for (var i=0; i<children.length; i++)
	if (children[i].className || children[i].id)
	{
		if (part.match(/buffer/i))
		{
			if (children[i].className.match(/buffer/i))
				if (bar.className.match(/vert/i) || bar.id.match(/vert/i))
					children[i].style.height = perc + "%";
				else
					children[i].style.width = perc + "%";	
		}
		else if (part.match(/slider/i))
		{
			if (children[i].className.match(/control/i))
			{
				if (bar.className.match(/vert/i) || bar.id.match(/vert/i))
					children[i].style.height = perc + "%";
				else
					children[i].style.width = perc + "%";
			}
			else if (children[i].className.match(/knob/i))
			{
				if (bar.className.match(/vert/i) || bar.id.match(/vert/i))
				{
					var y = Math.round((vert_perc / 100) * bar.offsetHeight-(children[i].offsetHeight/2));
					if (y < 0) y = 0; if (y > bar.offsetHeight - children[i].offsetHeight)
						y = bar.offsetHeight - children[i].offsetHeight;	
					children[i].style.top = y - 1 + "px";	
				}
				else
				{
					var x = Math.round((perc / 100) * bar.offsetWidth-(children[i].offsetWidth/2));
					if (x < 0) x = 0; if (x > bar.offsetWidth - children[i].offsetWidth)
						x = bar.offsetWidth - children[i].offsetWidth;
					children[i].style.left = x - 1 + "px";	
				}	
			}
		}	
	}

}
