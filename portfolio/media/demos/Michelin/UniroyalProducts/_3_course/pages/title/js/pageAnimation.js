

var interval = 1.5;
var overlapFactor = 0.75; //from 0 (fully concatenated) to 1 (fully synchronized)\

var tl = new TimelineMax({paused:false, yoyo:true, delay:1});


function animationEvents()
{	
	startTweens();	
	
}

function startTweens()
{
		tl.
		from(".t1", interval,{
			x:0,
			alpha:0,
			transformOrigin:"50% 50%",
			ease: Power4.easeOut}, (interval)-(interval*overlapFactor))
		.from(".t2", interval,{
			x:0,
			alpha:0,
			transformOrigin:"50% 50%",
			ease: Power4.easeOut}, (interval*2)-(interval*2*overlapFactor))
		.from(".t3",interval,{
			alpha:0,
			transformOrigin:"50% 50%",
			ease: Power2.easeOut}, (interval*3)-(interval*3*overlapFactor))
		.from(".t4",interval,{
			alpha:0,
			//rotation: -340,
			transformOrigin:"50% 50%",
			ease: Power2.easeOut}, (interval*4)-(interval*4*overlapFactor))
		.from(".t5",interval,{
			alpha:0,
			//rotation: 340,
			transformOrigin:"50% 50%",
			ease: Power2.easeOut}, (interval*5)-(interval*5*overlapFactor));
}




