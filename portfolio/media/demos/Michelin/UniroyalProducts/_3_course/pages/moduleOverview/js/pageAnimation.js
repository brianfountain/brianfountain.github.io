var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var refreshesPerFrame = Math.round(60/frameRate);

var tigerBlink;

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function animationEvents()
{
	TweenLite.ticker.addEventListener("tick", refreshScreen);
	startTweens();
	startSequences();
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
//	startAnimationTimeline runs all of the procedural tweens associated with the page.
//	Perhaps there are some situations that could be better handled by a timeline-style animation.
//	Sequences might be organized into separate objects and methods.


function startTweens()
{
    //TweenLite.fromTo($("#dimmer"), 1.5,  {css:{opacity:.01}}, {css:{opacity:.85}, delay:1, ease:Quad.easeInOut});
   	TweenLite.to($(".openingFade"), 1, {css:{opacity:1.0}, delay:0, ease:Quad.easeInOut});
    //TweenLite.from($("#tiger"), 1.5, {css:{left:-1500}, delay:1, ease:Power4.easeOut});

	TweenLite.to($("#learnTo"), 1.5, {css:{opacity:1.0}, delay:9.0, ease:Quad.easeInOut});
	TweenLite.to($("#bullet1"), 1, {css:{opacity:1.0}, delay:10.0, ease:Quad.easeInOut});
	TweenLite.to($("#bullet2"), 1, {css:{opacity:1.0}, delay:12.8, ease:Quad.easeInOut});
	TweenLite.to($("#bullet3"), 1, {css:{opacity:1.0}, delay:15.5, ease:Quad.easeInOut});
	TweenLite.to($("#bullet4"), 1, {css:{opacity:1.0}, delay:19.5, ease:Quad.easeInOut});
}
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//                           

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//

function startSequences()
{
		
	tigerBlink = new animationSequence("tiger",3);
	tigerBlink.hold(1,72);
	//tigerBlink.hold(2,10);//hold the first image for 30 frames//still a fantasy
	
	//console.log("after a 30 frame and 10 frame hold, total frameCount is now "+tigerBlink.frameCount);
	//thisSequence = new animationSequence(divIdName, totalImages, "imageSuffix-holdTime","nextImageSuffix-holdTime");
	//var tigerBlink = new animationSequence(tiger,3,"1-30","3-2");//still a fantasy
	
	//tigerBlink.holdRandom(1,30,100);//Hold image one for a random frame count between 30 and 100//still a fantasy
	//tigerBlink.frameRate = 12;//still a fantasy
} 
//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//




function animationSequence(divName, totalImages, looping) {
	this.divName = divName || "animatingDiv";
	this.imageCount = totalImages || 2;
	this.frameCount = totalImages || 2;
	this.looping = looping || true;
	this.currentImage = 0;
	this.currentFrame = 0;

	var createImage = function(src,thisStartFrame) {
	var img   = new Image();
 		img.src   = src;
 		img.startFrame = thisStartFrame;
		return img; 
	};

	// array of images
	//this.imageArray = image[this.imageCount];
	this.imageArray = [];
	this.frameArray = [];

	// push two images to the array

	for (var i=0;i<totalImages;i++)
	{
		//console.log("now I will look for ../img/animationFrames/"+divName+(i+1).toString()+".png");//populating an imageArray
		this.imageArray.push(createImage("../../images/char/tiger/"+divName+(i+1).toString()+".png", i));
		this.frameArray.push(i);
	}

	//console.log(this.imageArray);
	//console.log(this.frameArray);
}


// Image factory




animationSequence.prototype.hold = function(holdFrame, holdLength)
{
	//console.log("I was told to hold image #"+holdFrame+" for "+holdLength+" frames");
	
	this.frameCount += holdLength;
	for (var i=(holdFrame-1);i<=holdLength;i++)
	{
		this.frameArray[i]=(holdFrame-1);
	}
	
	for (var j=1;j<=(this.frameCount-holdFrame);j++)
	{
		this.frameArray[holdLength+j]=j;
	}
	//haven't automated this yet.
	//this.frameArray[holdLength+1]=1;
	//this.frameArray[holdLength+2]=2;

	/*
	this.frameCount += (holdLength-1);

	for(var f=0; f<holdLength; f++)
	{
		//console.log("imageArray[holdFrame-1].startFrame+f = "+this.imageArray[holdFrame-1].startFrame+f);
		//this.frameArray[imageArray[holdFrame-1].startFrame+f] = (holdFrame-1);
		this.frameArray[this.imageArray[holdFrame-1].startFrame+f] = (holdFrame-1);
		//console.log("this.frameArray[imageArray[holdFrame-1].startFrame+f] = "+(holdFrame-1));
		//this.frameCount += (value2-1);
		//console.log("this.imageArray[value1-1].startFrame = "+this.imageArray[value1-1].startFrame);
		//console.log("value1-1 = "+(value1-1));
	}
	
	for(var h=1;h<=(this.frameCount-holdLength);h++)
	{
		this.frameArray[holdLength+(holdFrame+h)] = this.imageArray[holdFrame+h];
	}
	*/
	/*
	for(var s=0; s<this.frameCount; s++)
	{
		this.frameArray[this.imageArray[holdFrame-1].startFrame+f] = (holdFrame-1);
	}
	*/

	//this.image[(value1-1)].frame+=value2;	
};

animationSequence.prototype.holdRandom = function(value1, value2, value3)
{
	console.log("I will hold image #"+value1+" for a random number of frames between "+value2+" and "+value3);
	//shuffle random value
	//update this.frameCount
	//update this.imageArray[i].startFrame for i>=(value2-1)
		//this.frameCount += this.randomHoldValue;
		//newStartFrame = currentStartFrame + randomHoldValue
}



function refreshScreen(event)//executes on every tick after the core engine updates
{
	screenRefresh++;
	
	if(screenRefresh % refreshesPerFrame == 0)
	{
		frameUpdate();
    }
} 

function frameUpdate()
{    
    frame++; 
    /*
    for animationSequence in registeredAnimations
    {
    	//This checks to see if this frame is an appropriate time to update the animation sequence.
    	animationSequence.checkFrame();
    }
    */
    //but for now we'll just manually trigger the animation.
    
    advanceFrame(tigerBlink);
}

function advanceFrame(sequenceToAdvance)
{
	seq = sequenceToAdvance;	
	seq.currentFrame++;
	//console.log("frameCount="+seq.frameCount+",currentFrame="+seq.currentFrame);
	if (seq.currentFrame < seq.frameCount)
	{	
		//$('#'+seq.divName).attr("src",seq.imageArray[seq.currentFrame].src);
		//console.log ("seq.frameArray[seq.currentFrame]="+seq.frameArray[seq.currentFrame]);
		$('#'+seq.divName).attr("src",seq.imageArray[seq.frameArray[seq.currentFrame]].src);
	}
	else
	{	
		//console.log("going around to zero");
		seq.currentFrame = 0;
		//$('#'+seq.divName).attr("src",seq.imageArray[seq.currentFrame].src);
		$('#'+seq.divName).attr("src",seq.imageArray[seq.frameArray[seq.currentFrame]].src);
	}
}

            