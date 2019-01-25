var item1 = false;
var item2 = false;
var item3 = false;
var patIsTalking = false;
var daveIsTalking = false;
var joseIsTalking = false;

function clickInteraction()
{
	console.log("cliiiiick interaction");
	var patSound = new Howl({
                  urls: ['../../audio/Mod1_11_Pat.mp3'],
                  autoplay: false,
                  loop: false,
                  volume: 1.0,
                });
	var joseSound = new Howl({
                  urls: ['../../audio/Mod1_11_Jose.mp3'],
                  autoplay: false,
                  loop: false,
                  volume: 1.0,
                });
	var daveSound = new Howl({
                  urls: ['../../audio/Mod1_11_Dave.mp3'],
                  autoplay: false,
                  loop: false,
                  volume: 1.0,
                });


	//$(".chartBubble").hide();

	$("#click-pat").click(function(){
	
		parent.$("#jquery_jplayer_1").jPlayer("stop");
		joseSound.stop();
		joseIsTalking = false;
		
		daveSound.stop();
		daveIsTalking = false;
		
		if(!patIsTalking)
		{
			patSound.play();
			patIsTalking = true;
		}
		

		item1 = true;
		//checkForCompletion("label2");

		$("#label2").addClass("fadeInActive");
		$("#label3").addClass("fadeOutInactive");
		$("#label1").addClass("fadeOutInactive");
		itemChangeAnimation();

		/*
		$.getScript("js/pageAnimation.js", function(){
			patClickAnimation();
		});	
		*/
		
	});

	$("#click-dave").click(function(){
		
		parent.$("#jquery_jplayer_1").jPlayer("stop");
		

		joseSound.stop();
		joseIsTalking = false;
		
		patSound.stop();
		patIsTalking = false;
		
		if(!daveIsTalking)
		{
			daveSound.play();
			daveIsTalking = true;
		}
		
		
		
		item2 = true;
		//checkForCompletion("label1");

		$("#label1").addClass("fadeInActive");
		$("#label2").addClass("fadeOutInactive");
		$("#label3").addClass("fadeOutInactive");
		itemChangeAnimation();
	});

	$("#click-jose").click(function(){

		parent.$("#jquery_jplayer_1").jPlayer("stop");
		
		daveSound.stop();
		daveIsTalking = false;
		
		patSound.stop();
		patIsTalking = false;
		
		if(!joseIsTalking)
		{
			joseSound.play();
			joseIsTalking = true;
		}

		item3 = true;
		//checkForCompletion("label3");

		$("#label3").addClass("fadeInActive");
		$("#label1").addClass("fadeOutInactive");
		$("#label2").addClass("fadeOutInactive");
		itemChangeAnimation();
	});

	$('html').click(function(event){
		if (!$(event.target).hasClass("clickable"))
		{
			daveSound.stop();
			patSound.stop();
			joseSound.stop();
			daveIsTalking = false;
			patIsTalking = false;
			joseIsTalking = false;
			$("#label1").addClass("fadeOutInactive");
			$("#label2").addClass("fadeOutInactive");
			$("#label3").addClass("fadeOutInactive");
			itemChangeAnimation();
		}
	});

}


function itemChangeAnimation(){
	var fadeTime = .5;
	var delayTime = 0;
	
	TweenLite.to($(".fadeOutInactive"), fadeTime, {css:{opacity:0}, delay:delayTime, ease:Quad.easeOut, onComplete:removeClass("fadeOutInactive")});
	$(".fadeInActive").show();
	TweenLite.to($(".fadeInActive"), fadeTime, {css:{opacity:1}, delay:delayTime, ease:Quad.easeOut, onComplete:removeClass("fadeInActive")});
}

function removeClass(classname){
	$("."+classname).removeClass(classname);
}

/*function checkForCompletion(classname)
{
	var delayBeforeComplete = 2.5;
	var completionFadeTime = 1;

	if(item1 && item2 && item3)
	{
		//$('.chartLogo').off('click');//removes the click handlers so you stay on the "conclusion" screen of the interaction

		//TweenLite.to($("#"+classname), completionFadeTime, {css:{opacity:0}, delay:delayBeforeComplete, ease:Quad.easeOut)});
		
		$("#b-complete").show();

		TweenLite.to($("#b-complete"), completionFadeTime, {css:{opacity:1}, delay:delayBeforeComplete, ease:Quad.easeOut});
	}
}
*/
