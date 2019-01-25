var tigerBlink;

var clickedArray = [];
clickedArray.length = 6;
var completedQuestions = 0;




//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	parent.courseObj.setNextEnabled(false);

	//TweenLite.ticker.addEventListener("tick", refreshScreen);
	//startSequences();
	startTweens();
	
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startTweens()
{
	
	var openingFadeTime = 1;
	
	var initialDelay = 1;
	var transitionTime = .2;
	var staggerTime = .3;

	TweenLite.to($(".openingFade"), openingFadeTime, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut});

	TweenLite.to($("#tire1"), transitionTime, {css:{opacity:1.0}, delay:initialDelay+staggerTime*1, ease:Quad.easeOut});
	TweenLite.to($("#tire2"), transitionTime, {css:{opacity:1.0}, delay:initialDelay+staggerTime*2, ease:Quad.easeOut});
	TweenLite.to($("#tire3"), transitionTime, {css:{opacity:1.0}, delay:initialDelay+staggerTime*3, ease:Quad.easeOut});
	TweenLite.to($("#tire4"), transitionTime, {css:{opacity:1.0}, delay:initialDelay+staggerTime*4, ease:Quad.easeOut});
	TweenLite.to($("#tire5"), transitionTime, {css:{opacity:1.0}, delay:initialDelay+staggerTime*5, ease:Quad.easeOut});
	TweenLite.to($("#tire6"), transitionTime, {css:{opacity:1.0}, delay:initialDelay+staggerTime*6, ease:Quad.easeOut});

	initButtons();	
}

function initButtons()
{
	$('.tireToClick').click(function(e){
            clickButton(e.target.id);
    });

    for (i=0;i<clickedArray.length; i++)
	{
		clickedArray[i]=0;
	}
}

function clickButton(buttonClicked)
{
	TweenLite.to($('#'+buttonClicked), 1, {css:{opacity:.7}, delay:0, ease: Power3.easeOut});

	var buttonClickedLabel = "#"+buttonClicked+"Label";
	var largeTire = "#"+buttonClicked+"Large";
	//add deactivation class for tweening
	$('.activeButton').addClass('toDeactivate');
	TweenLite.to($('.toDeactivate'), 1, {css:{opacity:0.0}, delay:0, ease: Power3.easeOut});
	$('.toDeactivate').removeClass('toDeactivate');//immediately remove deactivation class so quick clicking doesn't tangle it up

	//remove active state of currently active button
	$('.activeButton').removeClass('toActivate');
	$('.activeButton').removeClass('activeButton');

	//add active state and activation class
	$(buttonClickedLabel).addClass('activeButton');
	$(largeTire).addClass('activeButton');
	$(buttonClickedLabel).addClass('toActivate');
	$(largeTire).addClass('toActivate');
	
	TweenLite.to($('.toActivate'), 1, {css:{opacity:1.0}, delay:0, ease: Power3.easeOut});

	checkForCompletion(buttonClicked);

}


function checkForCompletion(classname)
{
	var clickedNumberString = String(classname).charAt(4);//strips char #4 (starting from 0) from arg string
	var clickedNumber = Number(clickedNumberString);//convert from String to Number
	clickedArray[clickedNumber-1] = 1;//subtract 1 since array starts at zero

	completedQuestions = 0;//reset completedQuestions counter
	for (i=0;i<clickedArray.length; i++)
	{
		completedQuestions += clickedArray[i];//increment with completion
		if (completedQuestions == clickedArray.length)//clickedArray.length should equal total number of clicks required
		{
			parent.courseObj.setNextEnabled(true);
			//console.log("complete");
		}
	}
}


//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startSequences()
{		
	tigerBlink = new animationSequence("tiger",3);
	tigerBlink.hold(1,72);
} 

            