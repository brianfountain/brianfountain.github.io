var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var refreshesPerFrame = Math.round(60/frameRate);

var tigerBlink;

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	startTweens();
	startSequences();
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
//	startAnimationTimeline runs all of the procedural tweens associated with the page.
//	Perhaps there are some situations that could be better handled by a timeline-style animation.
//	Sequences might be organized into separate objects and methods.


function startTweens()
{
    TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
    TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:1, ease:Quad.easeInOut});

						
   	TweenLite.to($("#chart0"), 1, {css:{opacity:1.0}, delay:5.3, ease:Quad.easeInOut});
	TweenLite.to($("#chart1"), 1, {css:{opacity:1.0}, delay:11, ease:Quad.easeInOut});
	TweenLite.to($("#chart2"), 1, {css:{opacity:1.0}, delay:15, ease:Quad.easeInOut});
	TweenLite.to($("#chart3"), 1, {css:{opacity:1.0}, delay:17, ease:Quad.easeInOut});
	TweenLite.to($("#chart4"), 1, {css:{opacity:1.0}, delay:22, ease:Quad.easeInOut});
	TweenLite.to($("#chart5"), 1, {css:{opacity:1.0}, delay:26, ease:Quad.easeInOut});
	TweenLite.to($("#chart6"), 1, {css:{opacity:1.0}, delay:29.5, ease:Quad.easeInOut});
	TweenLite.to($("#chart7"), 1, {css:{opacity:1.0}, delay:33, ease:Quad.easeInOut});
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startSequences()
{	
	initializeTicker();

	var characterFrameRate = 24;

	tigerSmallBlink = new animationSequence("tigerSmallBlink",3, true, "char");
	tigerSmallBlink.setFrameRate(characterFrameRate);
	tigerSmallBlink.hold(1,72);
} 
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

