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
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startTweens()
{
	screenOneTweens();
}

function screenOneTweens()
{
	var tween1time = 3;
	var tween2time = 3;
	var tween3time = 3;
	var tween4time = 25;
	//TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});

	TweenLite.to($("#window-tire0"), 1, {css:{opacity:1.0}, delay:1, ease:Quad.easeInOut});//fade in 0
	TweenLite.to($("#window-tire1"), 2, {css:{opacity:1.0}, delay:4, ease:Quad.easeInOut});//fade in 1
	TweenLite.to($("#window-tire0"), 2, {css:{opacity:0.0}, delay:5, ease:Quad.easeInOut});//fade out 0
	TweenLite.to($("#window-tire2"), 2, {css:{opacity:1.0}, delay:6, ease:Quad.easeInOut});//fade in 2
	TweenLite.to($("#window-tire1"), 2, {css:{opacity:0.0}, delay:7, ease:Quad.easeInOut});//fade out 1
	TweenLite.to($("#window-tire3"), 2, {css:{opacity:1.0}, delay:8, ease:Quad.easeInOut});//fade in 3
	TweenLite.to($("#window-tire2"), 2, {css:{opacity:0.0}, delay:10, ease:Quad.easeInOut});//fade in 2
	TweenLite.to($("#window-tire4"), 2, {css:{opacity:1.0}, delay:11, ease:Quad.easeInOut});//fade in 4
	TweenLite.to($("#window-tire3"), 2, {css:{opacity:0.0}, delay:12, ease:Quad.easeInOut});//fade out 3
	
	TweenLite.to($("#text1"), 1, {css:{opacity:1.0}, delay:tween1time, ease:Quad.easeInOut});
	TweenLite.to($("#text2"), 1, {css:{opacity:1.0}, delay:tween2time, ease:Quad.easeInOut});
	TweenLite.to($("#text3"), 1, {css:{opacity:1.0}, delay:tween3time, ease:Quad.easeInOut});

	TweenLite.fromTo($("#tigerWave"), 2, {css:{left:-1500, opacity:0.0}, ease:Power4.easeOut},{css:{left:-550, opacity:1.0}, delay:17.5, onComplete:tigerWave});
	//TweenLite.fromTo($("#tigerWave"), 2, {css:{left:-1500, opacity:0.0}, ease:Power4.easeOut},{css:{left:-550, opacity:1.0}, delay:.5, onComplete:tigerWave});
	
	//Fade out this screen, start the next one on complete
	//TweenLite.to($(".screen1"), 1, {css:{opacity:1.0}, delay:tween4time, ease:Quad.easeInOut});
	
	//TweenLite.to($(".screen1b"), 2, {css:{opacity:1.0}, delay:28, ease:Quad.easeInOut});
	TweenLite.to($("#window-tire4"), 2, {css:{opacity:0.0}, delay:29, ease:Quad.easeInOut});
	
	TweenLite.to($("#headline"), 1, {css:{opacity:1.0}, delay:3, ease:Quad.easeInOut});
	TweenLite.to($("#logo"), 1, {css:{opacity:1.0}, delay:4, ease:Quad.easeInOut});
	TweenLite.to($("#element1"), 1, {css:{opacity:1.0}, delay:32, ease:Quad.easeInOut});
	TweenLite.to($("#element2"), 1, {css:{opacity:1.0}, delay:33, ease:Quad.easeInOut});
	TweenLite.to($("#element3"), 1, {css:{opacity:1.0}, delay:34, ease:Quad.easeInOut});
	TweenLite.to($(".screen2"), 1, {css:{opacity:1.0}, delay:39, ease:Quad.easeInOut, onComplete:screenTwoTweens});
}


function tigerWave()
{

	

	tigerWave = new animationSequence("tigerWave",2,false);
	tigerWave.frameRate=2;
	//tigerWave.hold(2,30);
	tigerWave.hold(2,3);
	//tigerWave.frameArray = (0,1,0,1,1,0);
	tigerWave.frameArray[tigerWave.frameCount-1]=0;
	

	//tigerWave = new animationSequence("tigerWave",5,false);
	//tigerWave.setFrameRate(12);
	//tigerWave.hold(5,36);

	//tigerWave.addFrame(3,1);
	//tigerWave.addFrame(2,1);
	//tigerWave.addFrame(1,1);
	//tigerWave.addFrame(0,1);
	
}

function screenTwoTweens()
{
	/*
	var tween1time = 13;
	var tween2time = 20;
	var tween3time = 28.5;
	var tween4time = 38;
	var tween5time = 43;
	*/
	var tween1time = 0;
	var tween2time = 6;
	var tween3time = 15;
	var tween4time = 25;
	var tween5time = 29;
	/*var tween1time = 1;var tween2time = 2;var tween3time = 3;var tween4time = 4;var tween5time = 5;*/
    //TweenLite.to($(".screen2"), 1, {css:{opacity:1.0}, delay:tween5time, ease:Quad.easeInOut, onComplete:screenThreeTweens});
    TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:1, ease:Quad.easeInOut});

    TweenLite.to($("#introduction"), 1, {css:{opacity:1.0}, delay:tween1time, ease:Quad.easeInOut});

	TweenLite.to($("#bullet1"), 1, {css:{opacity:1.0}, delay:tween1time, ease:Quad.easeInOut});
	TweenLite.to($("#bullet2"), 1, {css:{opacity:1.0}, delay:tween2time, ease:Quad.easeInOut});
	TweenLite.to($("#bullet3"), 1, {css:{opacity:1.0}, delay:tween3time, ease:Quad.easeInOut});
	TweenLite.to($("#bullet4"), 1, {css:{opacity:1.0}, delay:tween4time, ease:Quad.easeInOut});

	//Fade out this screen, start the next one on complete
	//TweenLite.to($("#tiger"), 1.5, {css:{left:-1500}, delay:1, ease:Power4.easeOut});

	TweenLite.to($(".screen2"), 1, {css:{opacity:0.0}, delay:tween5time, ease:Quad.easeInOut, onComplete:screenThreeTweens});
	TweenLite.to($("#roadmap"), 1, {css:{opacity:1.0}, delay:tween5time, ease:Quad.easeInOut});
	TweenLite.to($("#grayBox"), .5, {css:{opacity:0.5, scaleY:48, y:72}, delay:tween5time+1, ease:Quad.easeOut});
}

function screenThreeTweens()
{
	var delayOffset = 0;
	var tween1time = 2;
	var tween2time = 2.3;
	var tween3time = 2.6;
	var tween4time = 2.9;
	
	var tween5time = 7;
	var tween6time = 7.1;
	var tween7time = 7.2;
	var tween8time = 7.5;


	var tween9time = 7.7;

    //TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
    TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:.5, ease:Quad.easeInOut});
   // TweenLite.from($("#tiger"), 1.5, {css:{left:-1500}, delay:1, ease:Power4.easeOut});

	
	TweenLite.to($("#badge1_glint_"), .08, {css:{opacity:1.0}, delay:tween1time+delayOffset, ease:Quad.easeOut});
	TweenLite.to($("#badge2_glint_"), .08, {css:{opacity:1.0}, delay:tween2time+delayOffset, ease:Quad.easeOut});
	TweenLite.to($("#badge3_glint_"), .08, {css:{opacity:1.0}, delay:tween3time+delayOffset, ease:Quad.easeOut});
	TweenLite.to($("#badge4_glint_"), .08, {css:{opacity:1.0}, delay:tween4time+delayOffset, ease:Quad.easeOut});
	startSequences();
	
	TweenLite.to($("#badge4_glint_"), .5, {css:{opacity:0.0, x:200}, delay:tween5time, ease:Quad.easeInOut});
	TweenLite.to($("#badge3_glint_"), .5, {css:{opacity:0.0, x:400}, delay:tween6time, ease:Quad.easeInOut});
	TweenLite.to($("#badge2_glint_"), .5, {css:{opacity:0.0, x:500}, delay:tween7time, ease:Quad.easeInOut});


	TweenLite.to($("#badge1_glint_"), 3.0, {css:{opacity:1.0, x:250, scaleX:1.2, scaleY:1.2}, delay:tween8time, ease:Elastic.easeOut});
	TweenMax.to($('#badge1_glint_'), 2, {y:"-=8", yoyo:true, repeat:-1, delay:tween8time+2,ease:Quad.easeInOut});
	

	//TweenLite.to($("#truck"), 1, {css:{opacity:1.0}, delay:tween5time+delayOffset, ease:Quad.easeInOut, onComplete:startGlintAnimation});

	TweenLite.to($("#truck"), 1, {css:{opacity:0.0}, delay:tween9time, ease:Quad.easeInOut, onComplete:clickTheUniroyalTruck});

	//Fade out this screen
	//TweenLite.to($(".screen3"), 1, {css:{opacity:0.0}, delay:tween5time, ease:Quad.easeInOut});
}


function clickTheUniroyalTruck ()
{
	var truckClicked = false;
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
		if (!truckClicked){
			TweenLite.killTweensOf(e.currentTarget);
			parent.$("#jquery_jplayer_1").jPlayer("stop");
			truckSound.play();
			TweenLite.to($("#cloud"), .3, {css:{opacity:1.0, x:"+=10",y:"-=5"}, delay:0, ease:Quad.easeOut});
			TweenLite.to($("#cloud"), 2, {css:{opacity:0.0, x:"+=20",y:"-=10"}, delay:.3, ease:Quad.easeInOut});
			TweenLite.to($("#truck"), .2, {y:"-=15", delay:0, ease:Quad.easeOut});
			TweenLite.to($("#truck"), .3, {y:"+=15", delay:.2,  ease:Quad.easeInOut, onComplete:clickedTheUniroyalTruck});
			//TweenMax.to($('#truck'), 0.2, {y:"-=15",  delay:0, ease:Quad.easeInOut, onComplete:startGlintAnimation});
			truckClicked = true;
			
		}
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
	//badge1.hold(5,20);

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


