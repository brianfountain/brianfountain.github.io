var frame = 0;
var screenRefresh = 0;
var frameRate = 4;
var refreshesPerFrame = Math.round(60/frameRate);
var filePath = "img/animationFrames/"
var fileExtension = ".png";

var chartBuild;
var activeAnimationSequence;
var $cloneDiv;

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

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
//	startAnimationTimeline runs all of the procedural tweens associated with the page.
//	Perhaps there are some situations that could be better handled by a timeline-style animation.
//	Sequences might be organized into separate objects and methods.


function startTweens()
{
	var screenSetTwoTime = 7.5;
	var screenSetThreeTime = 16.5;

      //TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});

   	TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeOut});
   	
   	TweenLite.to($("#chartLine"), 3, {css:{opacity:1.0}, delay:1, ease:Quad.easeIn});
   	
   	// Screen Set Two //
   	TweenLite.to($("#chartLine"), 2, {css:{opacity:.15}, delay:screenSetTwoTime, ease:Quad.easeOut});
   	TweenLite.to($("#chartTireStack"), 2, {css:{opacity:0.15}, delay:screenSetTwoTime, ease:Quad.easeOut});
   	TweenLite.to($("#chartTireStack_clone"), 1, {css:{opacity:0}, delay:screenSetTwoTime, ease:Quad.easeOut});
   	TweenLite.to($("#uniroyalLogo"), 2, {css:{opacity:1}, delay:screenSetTwoTime+.2, ease:Quad.easeOut});
   	TweenLite.to($("#reliability"), 2, {css:{opacity:1}, delay:screenSetTwoTime+2, ease:Quad.easeOut});
   	TweenLite.to($("#dependability"), 2, {css:{opacity:1}, delay:screenSetTwoTime+3, ease:Quad.easeOut});
   	TweenLite.to($("#affordability"), 2, {css:{opacity:1}, delay:screenSetTwoTime+4, ease:Quad.easeOut});
                              
      // Screen Set Two Remove//
	var tweenTwoFadeOutTime = 2;
      TweenLite.to($("#chartLine"), tweenTwoFadeOutTime, {css:{opacity:0}, delay:screenSetThreeTime, ease:Quad.easeOut});
   	TweenLite.to($("#chartTireStack"), tweenTwoFadeOutTime, {css:{opacity:0}, delay:screenSetThreeTime, ease:Quad.easeOut});
   	TweenLite.to($("#uniroyalLogo"), tweenTwoFadeOutTime, {css:{opacity:0}, delay:screenSetThreeTime, ease:Quad.easeOut});
   	TweenLite.to($("#reliability"), tweenTwoFadeOutTime, {css:{opacity:0}, delay:screenSetThreeTime, ease:Quad.easeOut});
   	TweenLite.to($("#dependability"), tweenTwoFadeOutTime, {css:{opacity:0}, delay:screenSetThreeTime, ease:Quad.easeOut});
   	TweenLite.to($("#affordability"), tweenTwoFadeOutTime, {css:{opacity:0}, delay:screenSetThreeTime, ease:Quad.easeOut});

   	// Screen Set Three Construct//
   	TweenLite.to($(".chartElement"), 2, {css:{opacity:1.0}, delay:screenSetThreeTime, ease:Quad.easeOut, onComplete:loadInteraction});

  	
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startSequences()
{	
   chartBuild = new animationSequence("chartTireStack",7, false);
	chartBuild.hold(1,4);
   //chartBuild.hasClones = true; //this enables the second set of images to animate (see _3_course/js/animationSequence.js:advanceClones())
   chartBuild.setFrameRate(2);

   tigerSmallBlink = new animationSequence("tigerSmallBlink",3, true, "char");
   tigerSmallBlink.hold(1,72);
   tigerSmallBlink.setFrameRate(24);
} 


function loadInteraction()
{
	$.getScript("js/chartInteraction.js", function(){
		chartInteraction();
	});
}
            