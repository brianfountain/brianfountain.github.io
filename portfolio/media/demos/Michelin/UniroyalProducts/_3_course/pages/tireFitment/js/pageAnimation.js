var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var refreshesPerFrame = Math.round(60/frameRate);

var tigerBlink;

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	startTweens();
}


function startTweens()
{
	var tweenTime = 1;
    var steerTiresTime = 17;
	var driveTiresTime = 31;
	var trailerTiresTime = 39.5;
	var lastTweenTime = 49;

    //TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
   	TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut});
    //TweenLite.from($("#tiger"), 1.5, {css:{left:-1500}, delay:1, ease:Power4.easeOut});
	
	TweenLite.to($("#steerTiresStart"), tweenTime, {css:{opacity:1.0}, delay:9.5, ease:Quad.easeInOut});
	TweenLite.to($("#driveTiresStart"), tweenTime, {css:{opacity:1.0}, delay:10.2, ease:Quad.easeInOut});	
	TweenLite.to($("#trailerTiresStart"), tweenTime, {css:{opacity:1.0}, delay:10.9, ease:Quad.easeInOut});	
	TweenLite.to($("#steerTiresStart"), tweenTime, {css:{opacity:0.0}, delay:15, ease:Quad.easeInOut});
	TweenLite.to($("#driveTiresStart"), tweenTime, {css:{opacity:0.0}, delay:15, ease:Quad.easeInOut});	
	TweenLite.to($("#trailerTiresStart"), tweenTime, {css:{opacity:0.0}, delay:15, ease:Quad.easeInOut});		

	TweenLite.to($("#steerTires"), tweenTime, {css:{opacity:1.0}, delay:steerTiresTime, ease:Quad.easeInOut});

	TweenLite.to($("#steerTires"), tweenTime, {css:{opacity:0.0}, delay:driveTiresTime-(tweenTime/2), ease:Quad.easeInOut});
	TweenLite.to($("#driveTires"), tweenTime, {css:{opacity:1.0}, delay:driveTiresTime, ease:Quad.easeInOut});
	
	TweenLite.to($("#driveTires"), tweenTime, {css:{opacity:0.0}, delay:trailerTiresTime-(tweenTime/2), ease:Quad.easeInOut});
	TweenLite.to($("#trailerTires"), 1, {css:{opacity:1.0}, delay:trailerTiresTime, ease:Quad.easeInOut});
    //Removed auto advance. GF
	TweenLite.to($("#trailerTires"), tweenTime, {css:{opacity:0.0}, delay:lastTweenTime, ease:Quad.easeInOut, onComplete:nextPage}); 
	TweenLite.to($("#trailerTires"), tweenTime, {css:{opacity:0.0}, delay:lastTweenTime, ease:Quad.easeInOut});
}


function nextPage()
{
	parent.courseObj.pageNext();
}

function startSequences()
{		

} 


