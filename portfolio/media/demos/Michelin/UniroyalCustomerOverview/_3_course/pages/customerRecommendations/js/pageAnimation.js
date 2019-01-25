var tigerBlink;

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	//TweenLite.ticker.addEventListener("tick", refreshScreen);
	//startSequences();
	startTweens();
	
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
//	startAnimationTimeline runs all of the procedural tweens associated with the page.
//	Perhaps there are some situations that could be better handled by a timeline-style animation.
//	Sequences might be organized into separate objects and methods.
function toolsInteraction()
{
	$("#tools-databook").click(function(){
			//item2 = true;
			window.open('https://www.michelinb2b.com/wps/b2bcontent/PDF/UNI_DataBook_E.pdf', 'Digital Sales Tool', 'window settings');
			$(this).attr('target', '_blank');
	  		return false;
		});

	$('.tools').hover(function() {
	        $(this).css('cursor','pointer');
	});
}

function startTweens()
{
	var transitionTime = 1;

   	TweenLite.to($(".openingFade"), transitionTime, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut, onComplete:toolsInteraction});
	TweenLite.to($("#bubble"), transitionTime, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut});
	TweenLite.to($("#bubble1"), transitionTime, {css:{opacity:1.0}, delay:1, ease:Quad.easeInOut});
	TweenLite.to($("#bubble2"), transitionTime, {css:{opacity:1.0}, delay:2, ease:Quad.easeInOut});
	TweenLite.to($("#bubble3"), transitionTime, {css:{opacity:1.0}, delay:3, ease:Quad.easeInOut});
	TweenLite.to($("#bubble4"), transitionTime, {css:{opacity:1.0}, delay:4, ease:Quad.easeInOut});
	
	TweenLite.to($("#bubble2"), transitionTime, {css:{opacity:0.0}, delay:9, ease:Quad.easeInOut});
	TweenLite.to($("#bubble3"), transitionTime, {css:{opacity:0.0}, delay:9, ease:Quad.easeInOut});
	TweenLite.to($("#bubble4"), transitionTime, {css:{opacity:0.0}, delay:9, ease:Quad.easeInOut});
	TweenLite.to($("#bubble5"), transitionTime, {css:{opacity:1.0}, delay:10, ease:Quad.easeInOut});
	TweenLite.to($("#dave1"), transitionTime, {css:{opacity:1.0}, delay:10, ease:Quad.easeInOut});
	TweenLite.to($("#dave0"), transitionTime, {css:{opacity:1.0}, delay:11, ease:Quad.easeInOut});
	
	TweenLite.to($("#bubble"), transitionTime, {css:{opacity:0.0}, delay:14, ease:Quad.easeInOut});
	TweenLite.to($("#bubble1"), transitionTime, {css:{opacity:0.0}, delay:14, ease:Quad.easeInOut});
	TweenLite.to($("#bubble5"), transitionTime, {css:{opacity:0.0}, delay:14, ease:Quad.easeInOut});
	TweenLite.to($("#pat"), transitionTime, {css:{opacity:1.0}, delay:15, ease:Quad.easeInOut});
	TweenLite.to($("#jose"), transitionTime, {css:{opacity:1.0}, delay:15, ease:Quad.easeInOut});
	TweenLite.to($("#text1"), transitionTime, {css:{opacity:1.0}, delay:15, ease:Quad.easeInOut});
	
	TweenLite.to($("#callout"), transitionTime, {css:{opacity:1.0}, delay:22, ease:Quad.easeInOut});
	
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
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//


            