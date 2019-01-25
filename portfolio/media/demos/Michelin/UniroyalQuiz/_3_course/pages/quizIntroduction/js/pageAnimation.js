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
	console.log( "ready!" );
	parent.courseObj.setNextEnabled(false);
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
    //TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
   	TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut});
    //TweenLite.from($("#tiger"), 1.5, {css:{left:-1500}, delay:1, ease:Power4.easeOut});

	TweenLite.to($("#learnTo"), 1.5, {css:{opacity:1.0}, delay:5, ease:Quad.easeInOut});
	TweenLite.to($("#bullet1"), 1, {css:{opacity:1.0}, delay:5.75, ease:Quad.easeInOut});
	TweenLite.to($("#bullet2"), 1, {css:{opacity:1.0}, delay:11, ease:Quad.easeInOut});
	TweenLite.to($("#bullet3"), 1, {css:{opacity:1.0}, delay:14.5, ease:Quad.easeInOut});
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startSequences()
{
		
	tigerBlink = new animationSequence("tiger",3);
	tigerBlink.hold(1,72);
	//tigerBlink.hold(2,10);//hold the first image for 30 frames//still a fantasy
	
	//console.log("after a 30 frame and 10 frame hold, total frameCount is now "+tigerBlink.frameCount);
	//thisSequence = new animationSequence(divIdName, totalImages, "imageSuffix-holdTime","nextImageSuffix-holdTime");
	//var tigerBlink = new animationSequence(tiger,3,"1-30","3-2");//still a fantasy
	
	//tigerBlink.holdRandom(1,30,100);//Hold image one for a random frame count between 30 and 100//still a fantasy
	//tigerBlink.frameRate = 12;//still a fantasy
} 
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//




            