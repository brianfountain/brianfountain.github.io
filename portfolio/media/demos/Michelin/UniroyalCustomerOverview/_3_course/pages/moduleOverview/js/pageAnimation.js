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
    //TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
   	TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut});
    //TweenLite.from($("#tiger"), 1.5, {css:{left:-1500}, delay:1, ease:Power4.easeOut});

	TweenLite.to($("#text1"), 1, {css:{opacity:1.0}, delay:.7, ease:Quad.easeInOut});
	TweenLite.to($("#text2"), 1, {css:{opacity:1.0}, delay:1.5, ease:Quad.easeInOut});
	TweenLite.to($("#text3"), 1, {css:{opacity:1.0}, delay:2.2, ease:Quad.easeInOut});
	TweenLite.to($("#text4"), 1, {css:{opacity:1.0}, delay:4.2, ease:Quad.easeInOut});
	
	TweenLite.to($("#text1"), 1, {css:{opacity:0.0}, delay:12, ease:Quad.easeInOut});
	TweenLite.to($("#text2"), 1, {css:{opacity:0.0}, delay:12, ease:Quad.easeInOut});
	TweenLite.to($("#text3"), 1, {css:{opacity:0.0}, delay:12, ease:Quad.easeInOut});
	TweenLite.to($("#text4"), 1, {css:{opacity:0.0}, delay:12, ease:Quad.easeInOut});
		
	TweenLite.to($("#hill"), 1.5, {css:{opacity:1.0}, delay:13, ease:Quad.easeInOut});
	TweenLite.to($("#learnTo"), 1.5, {css:{opacity:1.0}, delay:13, ease:Quad.easeInOut});
	TweenLite.to($("#bullet1"), 1, {css:{opacity:1.0}, delay:15, ease:Quad.easeInOut});
	TweenLite.to($("#bullet2"), 1, {css:{opacity:1.0}, delay:18, ease:Quad.easeInOut});
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           

function startSequences()
{
	tigerSmallBlink = new animationSequence("tigerSmallBlink",3, true, "char");
	tigerSmallBlink.setFrameRate(24);
	tigerSmallBlink.hold(1,72);
}
