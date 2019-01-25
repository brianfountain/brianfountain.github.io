var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var refreshesPerFrame = Math.round(60/frameRate);

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	TweenLite.ticker.addEventListener("tick", refreshScreen);
	startTweens();
	startSequences();
}


function startTweens()
{
	
    TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
    TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:1, ease:Quad.easeInOut});
   // TweenLite.from($("#tiger"), 1.5, {css:{left:-1500}, delay:1, ease:Power4.easeOut});
    TweenLite.to($("#text1"), 1, {css:{opacity:1.0}, delay:2, ease:Quad.easeInOut});
	TweenLite.to($("#text2"), 1, {css:{opacity:1.0}, delay:11, ease:Quad.easeInOut});
	TweenLite.to($("#text1"), 1, {css:{opacity:0.0}, delay:23, ease:Quad.easeInOut});
	TweenLite.to($("#text2"), 1, {css:{opacity:0.0}, delay:23, ease:Quad.easeInOut, onComplete:loadInteraction});
}

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


//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//


function loadInteraction()
{
	
	$.getScript("js/clickInteraction.js", function(){
		clickInteraction();
	});
} 