var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var refreshesPerFrame = Math.round(60/frameRate);
var filePath = "../../images/char/tiger/"
var fileExtension = ".png";

var tigerBlink;
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


function startTweens()
{
    uniroyalTruckTires();//un-comment this to start the whole shebang
}

function loadInteraction()
{
	$.getScript("js/toolsInteraction.js", function(){
		toolsInteraction();
	});	
}

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function uniroyalTruckTires(){
	var crossFadeTime = .5;
	var largeScale = 1.11;

	var tireArrivalStartTime = .8;
	var flyInTime = .8;
	var staggerInterval = .1;
	var tireTransitionStartTime = 9;
	var flyInOrigin = 500;
	var flyInOriginStagger = 54;


	//var tireTransitionStartTime = 0;//for testing

   	TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeOut});

   	TweenLite.from($("#tire1"), flyInTime, {css:{x:flyInOrigin}, delay:tireArrivalStartTime, ease:Quad.easeInOut});
   	TweenLite.to($("#tire1"), flyInTime, {css:{opacity:1.0}, delay:tireArrivalStartTime, ease:Quad.easeInOut});

   	TweenLite.from($("#tire2"), flyInTime, {css:{x:flyInOrigin-(flyInOriginStagger*2)}, delay:tireArrivalStartTime+(staggerInterval*2), ease:Quad.easeInOut});
   	TweenLite.to($("#tire2"), flyInTime, {css:{opacity:1.0}, delay:tireArrivalStartTime+(staggerInterval*2), ease:Quad.easeInOut});

   	TweenLite.from($("#tire3"), flyInTime, {css:{x:flyInOrigin-(flyInOriginStagger*3)}, delay:tireArrivalStartTime+(staggerInterval*3), ease:Quad.easeInOut});
   	TweenLite.to($("#tire3"), flyInTime, {css:{opacity:1.0}, delay:tireArrivalStartTime+(staggerInterval*3), ease:Quad.easeInOut});

   	TweenLite.from($("#tire4"), flyInTime, {css:{x:flyInOrigin-(flyInOriginStagger*4)}, delay:tireArrivalStartTime+(staggerInterval*4), ease:Quad.easeInOut});
   	TweenLite.to($("#tire4"), flyInTime, {css:{opacity:1.0}, delay:tireArrivalStartTime+(staggerInterval*4), ease:Quad.easeInOut});

   	TweenLite.from($("#tire5"), flyInTime, {css:{x:flyInOrigin-(flyInOriginStagger*5)}, delay:tireArrivalStartTime+(staggerInterval*5), ease:Quad.easeInOut});
   	TweenLite.to($("#tire5"), flyInTime, {css:{opacity:1.0}, delay:tireArrivalStartTime+(staggerInterval*5), ease:Quad.easeInOut});

   	TweenLite.from($("#tire6"), flyInTime, {css:{x:flyInOrigin-(flyInOriginStagger*6)}, delay:tireArrivalStartTime+(staggerInterval*6), ease:Quad.easeInOut});
   	TweenLite.to($("#tire6"), flyInTime, {css:{opacity:1.0}, delay:tireArrivalStartTime+(staggerInterval*6), ease:Quad.easeInOut});

   	TweenLite.to($("#tireBuildAll"), 1, {css:{opacity:1.0}, delay:tireTransitionStartTime, ease:Quad.easeOut});
   	TweenLite.to($(".tire"), 1, {css:{opacity:0.0}, delay:tireTransitionStartTime+1, ease:Quad.easeOut});



   	TweenLite.to($("#tireBuild1"), crossFadeTime, {css:{opacity:1.0}, delay:tireTransitionStartTime, ease:Quad.easeOut});
	TweenLite.to($("#commercialTruckTires"), crossFadeTime, {css:{opacity:0.0}, delay:tireTransitionStartTime+(crossFadeTime/2), ease:Quad.easeOut});
   

	TweenLite.to($("#tire1"), .2, {css:{opacity:1.0}, delay:tireTransitionStartTime+2.5, ease:Quad.easeInOut});
	TweenLite.to($("#tire1"), 1, {css:{scaleX:largeScale, scaleY:largeScale}, delay:tireTransitionStartTime+2.6, ease:Elastic.easeOut});
	TweenLite.to($("#tire1"), .3, {css:{scaleX:1.0, scaleY:1.0}, delay:tireTransitionStartTime+3.75, ease:Quad.easeIn});
	TweenLite.to($("#tire1"), .2, {css:{opacity:0.0}, delay:tireTransitionStartTime+4.05, ease:Quad.easeIn});

	TweenLite.to($("#tire2"), .2, {css:{opacity:1.0}, delay:tireTransitionStartTime+4.75, ease:Quad.easeInOut});
	TweenLite.to($("#tire2"), 1, {css:{scaleX:largeScale, scaleY:largeScale}, delay:tireTransitionStartTime+4.85, ease:Elastic.easeOut});
	TweenLite.to($("#tire2"), .3, {css:{scaleX:1.0, scaleY:1.0}, delay:tireTransitionStartTime+5.75, ease:Quad.easeIn});
	TweenLite.to($("#tire2"), .2, {css:{opacity:0.0}, delay:tireTransitionStartTime+6.05, ease:Quad.easeIn});

   	
	TweenLite.to($("#tireBuild1"), crossFadeTime, {css:{opacity:0.0}, delay:tireTransitionStartTime+6.75, ease:Quad.easeOut});
   	TweenLite.to($("#tireBuild2"), crossFadeTime, {css:{opacity:1.0}, delay:tireTransitionStartTime+7.75, ease:Quad.easeOut});
   	
   	TweenLite.to($("#tire3"), .2, {css:{opacity:1.0}, delay:tireTransitionStartTime+9.75, ease:Quad.easeInOut});
	TweenLite.to($("#tire3"), 1, {css:{scaleX:largeScale, scaleY:largeScale}, delay:tireTransitionStartTime+9.85, ease:Elastic.easeOut});
	TweenLite.to($("#tire3"), .3, {css:{scaleX:1.0, scaleY:1.0}, delay:tireTransitionStartTime+10.75, ease:Quad.easeIn});
	TweenLite.to($("#tire3"), .2, {css:{opacity:0.0}, delay:tireTransitionStartTime+11.05, ease:Quad.easeIn});

	TweenLite.to($("#tire4"), .2, {css:{opacity:1.0}, delay:tireTransitionStartTime+11.75, ease:Quad.easeInOut});
	TweenLite.to($("#tire4"), 1, {css:{scaleX:largeScale, scaleY:largeScale}, delay:tireTransitionStartTime+11.85, ease:Elastic.easeOut});
	TweenLite.to($("#tire4"), .3, {css:{scaleX:1.0, scaleY:1.0}, delay:tireTransitionStartTime+12.75, ease:Quad.easeIn});
	TweenLite.to($("#tire4"), .2, {css:{opacity:0.0}, delay:tireTransitionStartTime+13.05, ease:Quad.easeIn});


   	TweenLite.to($("#tireBuild2"), crossFadeTime, {css:{opacity:0.0}, delay:tireTransitionStartTime+13.3, ease:Quad.easeOut});
   	TweenLite.to($("#tireBuild3"), crossFadeTime, {css:{opacity:1.0}, delay:tireTransitionStartTime+15.5, ease:Quad.easeOut});

   	TweenLite.to($("#tire5"), .2, {css:{opacity:1.0}, delay:tireTransitionStartTime+17.75, ease:Quad.easeInOut});
	TweenLite.to($("#tire5"), 1, {css:{scaleX:largeScale, scaleY:largeScale}, delay:tireTransitionStartTime+17.85, ease:Elastic.easeOut});
	TweenLite.to($("#tire5"), .3, {css:{scaleX:1.0, scaleY:1.0}, delay:tireTransitionStartTime+18.75, ease:Quad.easeIn});
	TweenLite.to($("#tire5"), .2, {css:{opacity:0.0}, delay:tireTransitionStartTime+19.05, ease:Quad.easeIn});

	TweenLite.to($("#tire6"), .2, {css:{opacity:1.0}, delay:tireTransitionStartTime+19.75, ease:Quad.easeInOut});
	TweenLite.to($("#tire6"), 1, {css:{scaleX:largeScale, scaleY:largeScale}, delay:tireTransitionStartTime+19.85, ease:Elastic.easeOut});
	TweenLite.to($("#tire6"), .3, {css:{scaleX:1.0, scaleY:1.0}, delay:tireTransitionStartTime+20.75, ease:Quad.easeIn});
	TweenLite.to($("#tire6"), .2, {css:{opacity:0.0}, delay:tireTransitionStartTime+21.05, ease:Quad.easeIn});
   	

	TweenLite.to($(".tireBuild"), 2, {css:{opacity:0.0}, delay:tireTransitionStartTime+24+(crossFadeTime/2), ease:Quad.easeIn, onComplete: uniroyalTools});   	 
}

function uniroyalTools(){
	var crossFadeTime = .5;
	var uniroyalTruckTiresTime = 31;

	var fade1 = 35.0 - uniroyalTruckTiresTime;
	var fade2 = 42.0 - uniroyalTruckTiresTime;
	var fade3 = 50.0 - uniroyalTruckTiresTime;
	var fade4 = 61.0 - uniroyalTruckTiresTime;
	var fade5 = 70 - uniroyalTruckTiresTime;
	
	TweenLite.to($("#uniroyalTools"), crossFadeTime/2, {css:{opacity:1.0}, delay:0, ease:Quad.easeIn});
	TweenLite.to($("#uniroyalToolsSign"), crossFadeTime/2, {css:{opacity:1.0}, delay:0, ease:Quad.easeIn});

	TweenLite.to($("#toolsBuild1"), crossFadeTime, {css:{opacity:1.0}, delay:0, ease:Quad.easeOut});
	
   	//TweenLite.to($("#toolsBuild1"), crossFadeTime/2, {css:{opacity:0.0}, delay:fade1-2, ease:Quad.easeIn});
   	TweenLite.to($("#toolsBuild2"), crossFadeTime, {css:{opacity:1.0}, delay:fade1, ease:Quad.easeOut});
   	
	TweenLite.to($("#uniroyalToolsSign"), crossFadeTime/2, {css:{opacity:0.0}, delay:fade1+(crossFadeTime/2), ease:Quad.easeOut});

   	TweenLite.to($("#toolsBuild2"), crossFadeTime/2, {css:{opacity:0.0}, delay:fade2-1, ease:Quad.easeOut});
   	TweenLite.to($("#toolsBuild3"), crossFadeTime, {css:{opacity:1.0}, delay:fade2, ease:Quad.easeOut});
   	

   	TweenLite.to($("#toolsBuild3"), crossFadeTime/2, {css:{opacity:0.0}, delay:fade3-1, ease:Quad.easeOut});
   	TweenLite.to($("#toolsBuild4"), crossFadeTime, {css:{opacity:1.0}, delay:fade3, ease:Quad.easeOut});
	//TweenLite.to($("#toolsBuild1"), crossFadeTime, {css:{opacity:1.0}, delay:fade4, ease:Quad.easeIn, onComplete:loadInteraction});
	TweenLite.to($("#toolsBuild4"), crossFadeTime/2, {css:{opacity:0.0}, delay:fade4+(crossFadeTime/2), ease:Quad.easeIn, onComplete:loadInteraction});
	TweenLite.to($("#toolsBuild5"), crossFadeTime/2, {css:{opacity:1.0}, delay:fade4+(crossFadeTime/2), ease:Quad.easeOut});
	TweenLite.to($("#uniroyalToolsSign"), crossFadeTime/2, {css:{opacity:1.0}, delay:fade4+(crossFadeTime/2), ease:Quad.easeOut});
}




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

