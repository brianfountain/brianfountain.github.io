var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var refreshesPerFrame = Math.round(60/frameRate);


var chartBuild;
var activeAnimationSequence;
var activeAnimationSequences = [];
var $cloneDiv;

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	//initializeTicker();
	
	startTweens();
		
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//


function initButtons()
{
	$('#tireConstruction-0').addClass('activeButton');

	$('#button1').click(function(e){
            clickButton("tireConstruction-1");
    });
    $('#button2').click(function(e){
            clickButton("tireConstruction-2");
    });
    $('#button3').click(function(e){
            clickButton("tireConstruction-3");
    });
    $('#button4').click(function(e){
            clickButton("tireConstruction-4");
    });
}

function clickButton(buttonClicked)
{
	//add deactivation class for tweening
	$('.activeButton').addClass('toDeactivate');
	TweenLite.to($('.toDeactivate'), 1, {css:{opacity:0.0}, delay:0, ease: Power3.easeOut});
	$('.toDeactivate').removeClass('toDeactivate');//immediately remove deactivation class so quick clicking doesn't tangle it up

	//remove active state of currently active button
	$('.activeButton').removeClass('toActivate');
	$('.activeButton').removeClass('activeButton');

	//add active state and activation class
	$("#"+buttonClicked).addClass('activeButton');
	$("#"+buttonClicked).addClass('toActivate');
	TweenLite.to($('.toActivate'), 1, {css:{opacity:1.0}, delay:0, ease: Power3.easeOut});
}

function startTweens()
{
	screenOneTweens();  
}

function screenOneTweens()
{
	TweenLite.to($('.openingFade'), 2, {css:{opacity:1.0}, delay:0, ease: Power3.easeInOut});

	var transitionDelay = 1;
	var transitionTime = .5;
	var transitionOffset = .2;

	TweenLite.to($('#tire1'), transitionTime, {css:{opacity:1.0}, delay:transitionDelay+(transitionOffset*1), ease: Power3.easeInOut});
	TweenLite.to($('#tire2'), transitionTime, {css:{opacity:1.0}, delay:transitionDelay+(transitionOffset*2), ease: Power3.easeInOut});
	TweenLite.to($('#tire3'), transitionTime, {css:{opacity:1.0}, delay:transitionDelay+(transitionOffset*3), ease: Power3.easeInOut});
	TweenLite.to($('#tire4'), transitionTime, {css:{opacity:1.0}, delay:transitionDelay+(transitionOffset*4), ease: Power3.easeInOut});
	TweenLite.to($('#tire5'), transitionTime, {css:{opacity:1.0}, delay:transitionDelay+(transitionOffset*5), ease: Power3.easeInOut});
	TweenLite.to($('#tire6'), transitionTime, {css:{opacity:1.0}, delay:transitionDelay+(transitionOffset*6), ease: Power3.easeInOut});
	TweenLite.to($('#sign'), 2, {css:{opacity:1.0}, delay:transitionDelay, ease: Power3.easeInOut, onComplete:screenTransition});
}

function screenTransition()
{
	TweenLite.to($('.screen1'), 2, {css:{opacity:0.0}, delay:4, ease: Power3.easeIn});
	TweenLite.to($('#sign'), 1, {css:{opacity:0.0}, delay:4, ease: Power3.easeInOut, onComplete:screenTwoTweens});
}

function screenTwoTweens()
{
	
	var tween1Time = 4.5;
	var tween2Time = 5.5;
	var tween3Time = 6.5;
	var tween4Time = 10;
	var tween5Time = 11;
	var tween6Time = 12.5;
	var tween7Time = 14;
	var tween8Time = 17;
	var tween9Time = 18;
	var tween10Time = 19;
	var tween11Time = 20;

	TweenLite.to($('.screen2Start'), 1, {css:{opacity:1.0}, delay:0, ease: Power3.easeIn});

	TweenLite.to($('#durability'), 1, {css:{opacity:1.0}, delay:tween1Time, ease: Power3.easeIn});
	TweenLite.to($('#dependability'), 1, {css:{opacity:1.0}, delay:tween2Time, ease: Power3.easeIn});
	TweenLite.to($('#retreadability'), 1, {css:{opacity:1.0}, delay:tween3Time, ease: Power3.easeIn});


	TweenLite.to($('.abilities'), 1, {css:{opacity:0.0}, delay:tween4Time, ease: Power3.easeIn});
	TweenLite.to($('#tireConstructionPicture0'), 1, {css:{opacity:1.0}, delay:tween4Time, ease: Power3.easeIn});
	
	TweenLite.to($('#tireConstructionPicture1'), 1, {css:{opacity:1.0}, delay:tween5Time, ease: Power3.easeIn});
	//TweenLite.to($('#tireLabel1'), 1, {css:{opacity:1.0}, delay:tween5Time, ease: Power3.easeIn});
	
	TweenLite.to($('#tireConstructionPicture1'), 1, {css:{opacity:0.0}, delay:tween6Time, ease: Power3.easeIn});
	TweenLite.to($('#tireConstructionPicture2'), 1, {css:{opacity:1.0}, delay:tween6Time, ease: Power3.easeIn});
	//TweenLite.to($('#tireLabel1'), 1, {css:{opacity:0.0}, delay:tween6Time, ease: Power3.easeIn});
	//TweenLite.to($('#tireLabel2'), 1, {css:{opacity:1.0}, delay:tween6Time, ease: Power3.easeIn});
	
	TweenLite.to($('#tireConstructionPicture2'), 1, {css:{opacity:0.0}, delay:tween7Time, ease: Power3.easeIn});
	TweenLite.to($('#tireConstructionPicture3'), 1, {css:{opacity:1.0}, delay:tween7Time, ease: Power3.easeIn});
	//TweenLite.to($('#tireLabel2'), 1, {css:{opacity:0.0}, delay:tween7Time, ease: Power3.easeIn});
	//TweenLite.to($('#tireLabel3'), 1, {css:{opacity:1.0}, delay:tween7Time, ease: Power3.easeIn});
	
	
	TweenLite.to($('#tireConstructionPicture3'), 1, {css:{opacity:0.0}, delay:tween8Time, ease: Power3.easeIn});
	TweenLite.to($('#tireConstructionPicture4'), 1, {css:{opacity:1.0}, delay:tween8Time, ease: Power3.easeIn});
	//TweenLite.to($('#tireLabel3'), 1, {css:{opacity:0.0}, delay:tween8Time, ease: Power3.easeIn});
	//TweenLite.to($('#tireLabel4'), 1, {css:{opacity:1.0}, delay:tween8Time, ease: Power3.easeIn});

	//TweenLite.to($('#tireLabel4'), 1, {css:{opacity:0.0}, delay:tween9Time, ease: Power3.easeIn});
	//TweenLite.to($('#tireConstructionPicture4'), 1, {css:{opacity:0.0}, delay:tween9Time, ease: Power3.easeIn});

	TweenLite.to($('#tireConstruction-0'), 1, {css:{opacity:1.0}, delay:tween10Time, ease: Power3.easeIn, onComplete:initButtons});
	TweenLite.to($('.tireConstructionPicture'), 1, {css:{opacity:0.0}, delay:tween11Time, ease: Power3.easeIn});

	TweenLite.to($('#text'), 1, {css:{opacity:1.0}, delay:tween11Time, ease: Power3.easeInOut});
	
	
	
}

function nextPage()
{
	parent.courseObj.pageNext();
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function startGlintAnimation()
{
	TweenLite.from($('.badge'), 3, {css:{x:-200}, delay:0, ease: Elastic.easeOut});
	
}

function startSequences()
{	
	badge1 = new animationSequence("badge1_glint_",8,true);
	badge1.setFrameRate(24);
	badge1.hold(1,20);

	badge2 = new animationSequence("badge2_glint_",8,true);
	badge2.setFrameRate(24);
	badge2.hold(1,28);

	badge3 = new animationSequence("badge3_glint_",8,true);
	badge3.setFrameRate(24);
	badge3.hold(1,36);

	badge4 = new animationSequence("badge4_glint_",8,true);
	badge4.setFrameRate(24);
	badge4.hold(1,44);
} 
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//


