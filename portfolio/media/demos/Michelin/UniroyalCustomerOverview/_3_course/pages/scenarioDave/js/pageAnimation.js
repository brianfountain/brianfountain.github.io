var tigerBlink;

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	//TweenLite.ticker.addEventListener("tick", refreshScreen);
	//startSequences();
	//startTweens();
	
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
	var transitionTime = 1;
	var fade1Time = 2;
	var fade2Time = 3;
	var fade3Time = 4;

   	TweenLite.to($(".openingFade"), transitionTime, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut});
	
	TweenLite.to($("#title"), transitionTime, {css:{opacity:0.0}, delay:fade1Time, ease:Quad.easeInOut});
	TweenLite.to($("#content1"), transitionTime, {css:{opacity:0.0}, delay:fade1Time+.5, ease:Quad.easeInOut});
	TweenLite.to($("#content2"), transitionTime, {css:{opacity:1.0}, delay:fade1Time, ease:Quad.easeInOut});

	TweenLite.to($("#content2"), transitionTime, {css:{opacity:0.0}, delay:fade2Time+.5, ease:Quad.easeInOut});
	TweenLite.to($("#content3"), transitionTime, {css:{opacity:1.0}, delay:fade2Time, ease:Quad.easeInOut});
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startSequences()
{
		
	tigerBlink = new animationSequence("tiger",3);
	tigerBlink.hold(1,72);
} 
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//


            