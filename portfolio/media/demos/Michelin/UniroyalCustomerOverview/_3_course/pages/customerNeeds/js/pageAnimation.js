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
    //TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
   	TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut});
    //TweenLite.from($("#tiger"), 1.5, {css:{left:-1500}, delay:1, ease:Power4.easeOut});

	
}

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           


function startSequences()
{
	var characterFrameRate = 24;

	tigerSmallBlink = new animationSequence("tigerSmallBlink",3, true, "char");
	tigerSmallBlink.setFrameRate(characterFrameRate);
	tigerSmallBlink.hold(1,72);
} 

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//