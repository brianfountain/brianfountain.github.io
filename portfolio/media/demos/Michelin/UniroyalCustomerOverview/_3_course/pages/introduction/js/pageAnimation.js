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
	initializeTicker();
	startTweens();
	//var silentSoundLoader = new Howl({urls: ['../../audio/2_second_silence.mp3'],autoplay: true,loop: false,volume: 1.0,});

}

function startTweens()
{
	screenOneTweens();
}

function screenOneTweens()
{
	TweenLite.to($("#grayBoxTitle"), .75, {css:{opacity:0.7, height:60}, delay:0, ease:Quad.easeOut});
	TweenLite.to($("#grayBoxBadges"), .75, {css:{opacity:0.5, height:160}, delay:2, ease:Quad.easeOut});

	TweenLite.fromTo($("#tigerWave"), 2, {css:{opacity:0.0}, ease:Power4.easeOut},{css:{opacity:1.0}, delay:0, onComplete:tigerWave});
	TweenLite.to($(".screen1"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut, onComplete:screenTwoTweens});	
}


function tigerWave()
{
	tigerWave = new animationSequence("tigerWave",2,false);
	tigerWave.frameRate=2;
	//tigerWave.hold(2,30);
	tigerWave.hold(2,3);
	//tigerWave.frameArray = (0,1,0,1,1,0);
	tigerWave.frameArray[tigerWave.frameCount-1]=0;
}

function screenTwoTweens()
{
	var delayOffset = 0;
	var tween1time = 2;
	var tween2time = 2.3;
	var tween3time = 2.6;
	var tween4time = 2.9;
	
	var tween5time = 7;
	var tween6time = 7.1;
	var tween7time = 7.2;
	var tween8time = 7.3;


	var tween9time = 7.7;
	var tween10time = 7.9;
	var tween11time = 9;
	/*var tween1time = 1;var tween2time = 2;var tween3time = 3;var tween4time = 4;var tween5time = 5;*/
    //TweenLite.to($(".screen2"), 1, {css:{opacity:1.0}, delay:tween5time, ease:Quad.easeInOut, onComplete:screenThreeTweens});
    TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:1, ease:Quad.easeInOut});

	

	TweenLite.to($("#badge1_glint_"), .08, {css:{opacity:1.0}, delay:tween1time+delayOffset, ease:Quad.easeOut});
	TweenLite.to($("#badge2_glint_"), .08, {css:{opacity:1.0}, delay:tween2time+delayOffset, ease:Quad.easeOut});
	TweenLite.to($("#badge3_glint_"), .08, {css:{opacity:1.0}, delay:tween3time+delayOffset, ease:Quad.easeOut});
	TweenLite.to($("#badge4_glint_"), .08, {css:{opacity:1.0}, delay:tween4time+delayOffset, ease:Quad.easeOut});
	startSequences();
	
	//TweenLite.to($("#badge4_glint_"), .5, {css:{opacity:0.0, x:200}, delay:tween5time, ease:Quad.easeInOut});
	//TweenLite.to($("#badge3_glint_"), .5, {css:{opacity:1.0, x:400}, delay:tween6time, ease:Quad.easeInOut});
	//TweenLite.to($("#badge2_glint_"), .5, {css:{x:200}, delay:tween7time, ease:Quad.easeInOut});
	//TweenLite.to($("#badge1_glint_"), .5, {css:{x:150, opacity:.5}, delay:tween8time, ease:Quad.easeInOut});
	
	TweenLite.to($("#badge4_glint_"), .5, {css:{opacity:0.0, x:200}, delay:tween5time, ease:Quad.easeInOut});
	TweenLite.to($("#badge3_glint_"), .5, {css:{x:200}, delay:tween7time, ease:Quad.easeInOut});
	TweenLite.to($("#badge2_glint_"), .5, {css:{opacity:0.0, x:400}, delay:tween6time, ease:Quad.easeInOut});
	TweenLite.to($("#badge1_glint_"), .5, {css:{x:150, opacity:0}, delay:tween8time, ease:Quad.easeInOut});

	//TweenLite.to($("#badge1_glint_"), 2.0, {css:{opacity:1.0, x:170, scaleX:1.2, scaleY:1.2}, delay:tween9time, ease:Elastic.easeOut});
	//TweenMax.to($('#badge1_glint_'), 1.5, {y:"-=8", yoyo:true, repeat:-1, delay:tween9time+.5,ease:Quad.easeInOut});
	
	TweenLite.to($("#badge3_glint_"), 2.0, {css:{opacity:1.0, x:0, scaleX:1.2, scaleY:1.2}, delay:tween10time, ease:Elastic.easeOut});
	TweenMax.to($('#badge3_glint_'), 1.5, {y:"+=8", yoyo:true, repeat:-1, delay:tween10time+1,ease:Quad.easeInOut});

	TweenLite.to($("#truck"), 1, {css:{opacity:0.0},  delay:tween11time, ease:Quad.easeInOut, onComplete:clickTheUniroyalTruck});

	//TweenLite.to($("#badge2_glint_"), .5, {css:{opacity:0.0, x:500}, delay:tween7time, ease:Quad.easeInOut});
}


function clickTheUniroyalTruck ()
{
	//TweenMax.to($('#truck'), 0.4, {y:"+=8", yoyo:true, repeat:-1});
	var truckSound = new Howl({
                  urls: ['sounds/uniroyal_truck_beep_beep.mp3'],
                  autoplay: false,
                  loop: false,
                  volume: 1.0,
                });

	TweenMax.to($('#truck'), 0.2, {y:"-=8", yoyo:true, repeat:-1,ease:Quad.easeOut});
	TweenLite.to($("#truck"), 1.5, {css:{opacity:1.0}, delay:.5, ease:Quad.easeInOut});

	$('#truck').hover(function() {
        $(this).css('cursor','pointer');
    });

	$('#truck').click(function(e){
		TweenLite.killTweensOf(e.currentTarget);
		parent.$("#jquery_jplayer_1").jPlayer("stop");
		truckSound.play();
		
		TweenLite.to($("#cloud"), .3, {css:{opacity:1.0, x:"+=10",y:"-=5"}, delay:0, ease:Quad.easeOut});
		TweenLite.to($("#cloud"), 2, {css:{opacity:0.0, x:"+=20",y:"-=10"}, delay:.3, ease:Quad.easeInOut});
		TweenLite.to($("#truck"), .2, {y:"-=15", delay:0, ease:Quad.easeOut});
		TweenLite.to($("#truck"), .3, {y:"+=15", delay:.2,  ease:Quad.easeInOut, onComplete:clickedTheUniroyalTruck});
		//TweenMax.to($('#truck'), 0.2, {y:"-=15",  delay:0, ease:Quad.easeInOut, onComplete:startGlintAnimation});
	});	

}

function clickedTheUniroyalTruck()
{
	
	TweenMax.to($('#truck'), 0.05, {y:"-=2",x:"-=1", yoyo:true, repeat:-1,ease:Quad.easeOut});
	TweenLite.to($("#truck"), 2, {css:{opacity:0.0,x:"-=85",y:"+=5"}, delay:1, ease:Quad.easeIn, onComplete:nextPage}); 
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


