var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var refreshesPerFrame = Math.round(60/frameRate);

var tigerBlink;

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	TweenLite.ticker.addEventListener("tick", refreshScreen);
	startTweens();
	startSequences();
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//


function startTweens()
{
	
    TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
    TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:1, ease:Quad.easeInOut, onComplete:loadInteraction});
}

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startSequences()
{
	var characterFrameRate = 24;

	tigerSmallBlink = new animationSequence("tigerSmallBlink",3, true, "char");
	tigerSmallBlink.setFrameRate(characterFrameRate);
	tigerSmallBlink.hold(1,72);
	
	patBlink = new animationSequence("pat",3, true, "char", false);
	patBlink.setFrameRate(characterFrameRate);
	patBlink.hold(1,80);
	patBlink.play();
	
	joseBlink = new animationSequence("jose",3, true, "char");
	joseBlink.setFrameRate(characterFrameRate);
	joseBlink.hold(1,90);

	daveBlink = new animationSequence("dave",8, true, "char");
	daveBlink.setFrameRate(characterFrameRate);
	daveBlink.hold(1,150);
} 

function patClickAnimation()
{
	patBlink.stop();
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//


function loadInteraction()
{	
	$.getScript("js/clickInteraction.js", function(){
		clickInteraction();
	});
} 