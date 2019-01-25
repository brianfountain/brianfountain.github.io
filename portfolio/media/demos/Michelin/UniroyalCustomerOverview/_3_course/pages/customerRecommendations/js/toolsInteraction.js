var item1 = false;
var item2 = false;
var item3 = false;
var item4 = false;

//the completion check and hover states are inactive for this interaction 
function toolsInteraction()
{
	$('.tools').hover(function() {
        $(this).css('cursor','pointer');
    });

	$("#tools-dst").click(function(){
		//item1 = true;
		window.open('http://www.michelinb2b.com', 'Digital Sales Tool', 'window settings');
		$(this).attr('target', '_blank');
  		return false;
	});	
		
	/*checkForCompletion("tools-dst");
	$("#tools-dst").hover(function(){
		$("#tools-dst").addClass("fadeInActive");
		$("#tools-databook").addClass("fadeOutInactive");
		$("#tools-website").addClass("fadeOutInactive");
		itemChangeAnimation();
	});
	*/

	$("#tools-databook").click(function(){
		//item2 = true;
		window.open('https://www.michelinb2b.com/wps/b2bcontent/PDF/UNI_DataBook_E.pdf', 'Digital Sales Tool', 'window settings');
		$(this).attr('target', '_blank');
  		return false;
	});
	
	/*checkForCompletion("tools-databook");
	$("#tools-databook").hover(function(){
		$("#tools-databook").addClass("fadeInActive");
		$("#tools-dst").addClass("fadeOutInactive");
		$("#tools-website").addClass("fadeOutInactive");
		itemChangeAnimation();
	});
	*/
	$('.clickable').hover(function(){
		$(this).css('cursor','pointer');
	 });

	$("#tools-website").click(function(){
		//item3 = true;
		window.open('http://www.Uniroyaltrucktires.com', 'Digital Sales Tool', 'window settings');
		$(this).attr('target', '_blank');
  		return false;
		//
	});

	/*
	checkForCompletion("tools-website");
	$("#tools-website").hover(function(){
		$("#tools-website").addClass("fadeInActive");
		$("#tools-dst").addClass("fadeOutInactive");
		$("#tools-databook").addClass("fadeOutInactive");
		itemChangeAnimation();
	});
	*/
	
	$("#tools-summarySheet").click(function(){
		//item4 = true;
		window.open('pdf/ModuleSummary3.pdf', 'Summary Sheet', 'window settings');
		$(this).attr('target', '_blank');
  		return false;
		//
	});
}


function itemChangeAnimation(){
	var fadeTime = .2;
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

	if(item1 && item2 && item3 && item4)
	{
		//TweenLite.to($("#"+classname), completionFadeTime, {css:{opacity:0}, delay:delayBeforeComplete, ease:Quad.easeOut)});
		
		$("#b-complete").show();

		TweenLite.to($("#b-complete"), completionFadeTime, {css:{opacity:1}, delay:delayBeforeComplete, ease:Quad.easeOut});
	}
}

