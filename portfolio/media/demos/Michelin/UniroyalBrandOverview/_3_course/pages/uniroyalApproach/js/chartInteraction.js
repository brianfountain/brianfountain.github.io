var item1 = false;
var item2 = false;
var item3 = false;

function chartInteraction()
{

	
	
	$(".chartBubble").hide();

	$("#chart-michelin").click(function(){
		//console.log("click in pls");
		item1 = true;
		checkForCompletion("b-michelin");

		$("#b-michelin").addClass("fadeInActive");
		$("#b-uniroyal").addClass("fadeOutInactive");
		$("#b-bfgoodrich").addClass("fadeOutInactive");
		itemChangeAnimation();

	});

	$("#chart-bfgoodrich").click(function(){
		item2 = true;
		checkForCompletion("b-bfgoodrich");

		$("#b-bfgoodrich").addClass("fadeInActive");
		$("#b-michelin").addClass("fadeOutInactive");
		$("#b-uniroyal").addClass("fadeOutInactive");
		itemChangeAnimation();
	});

	$("#chart-uniroyal").click(function(){
		item3 = true;
		checkForCompletion("b-uniroyal");

		$("#b-uniroyal").addClass("fadeInActive");
		$("#b-bfgoodrich").addClass("fadeOutInactive");
		$("#b-michelin").addClass("fadeOutInactive");
		itemChangeAnimation();
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

function checkForCompletion(classname)
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

