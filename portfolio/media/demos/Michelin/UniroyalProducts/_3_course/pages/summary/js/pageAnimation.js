var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var refreshesPerFrame = Math.round(60/frameRate);
var filePath = "../..images/char/"
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
	//startSequences();
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startTweens()
{
    //TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
    summary();//un-comment this to start the whole shebang 	
}

function loadInteraction()
{
	$.getScript("js/toolsInteraction.js", function(){
		toolsInteraction();
	});	
}

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function summary()
{
	var crossFadeTime = 1.5;
	var fadeDelay = 0;

   	TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeOut});
   	TweenLite.to($("#clipboard"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay, ease:Quad.easeIn});	
   	

   	TweenLite.to($("#t1"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+.5, ease:Quad.easeIn});
   	TweenLite.to($("#t2"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+1, ease:Quad.easeIn});
   	TweenLite.to($("#t3"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+1.5, ease:Quad.easeIn});
	TweenLite.to($("#t4"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+2, ease:Quad.easeIn});
	TweenLite.to($("#t5"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+2.5, ease:Quad.easeIn});
	TweenLite.to($("#tools-dst"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+2, ease:Quad.easeIn});
	TweenLite.to($("#tools-databook"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+2, ease:Quad.easeIn});
	TweenLite.to($("#tools-website"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+2, ease:Quad.easeIn, onComplete:loadInteraction});
	TweenLite.to($("#t6"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+6, ease:Quad.easeIn});
	TweenLite.to($("#tools-summarySheet"), crossFadeTime, {css:{opacity:1.0}, delay:fadeDelay+2, ease:Quad.easeIn});

	TweenLite.to($(".badge-off"), crossFadeTime/2, {css:{opacity:.75}, delay:fadeDelay+3, ease:Quad.easeOut});

	TweenLite.to($(".badge-off"), .1, {css:{opacity:.75}, delay:fadeDelay+4.8, ease:Quad.easeOut, onComplete:badgeSound});

   	TweenLite.to($("#badge1_off"), crossFadeTime, {css:{opacity:0.0}, delay:fadeDelay+5, ease:Quad.easeOut});	
   	TweenLite.to($(".badge-on"), crossFadeTime/2, {css:{opacity:1.0}, delay:fadeDelay+5, ease:Quad.easeOut, onComplete:badgeBounce});	
}

function badgeSound()
{
	badge2 = new animationSequence("badge2_glint_",8,true);
	badge2.setFrameRate(24);
	badge2.hold(1,20);
	/*
	//DJM took this out on 11/2/2015 because it's now mixed it into the narration audio.
	var badgeGliss = new Howl({
                  urls: ['sounds/gliss.mp3'],
                  autoplay: true,
                  loop: false,
                  volume: 1.0,
                });
    */
}

function badgeBounce()
{
	TweenMax.to($('#badge2_glint_'), .7, {y:"-=4", yoyo:true, repeat:-1, delay:0,ease:Quad.easeInOut});
}

