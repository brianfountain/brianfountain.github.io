var frame = 0;
var screenRefresh = 0;
var frameRate = 60;
var refreshesPerFrame = Math.round(60/frameRate);


var chartBuild;
var activeAnimationSequence;
var activeAnimationSequences = [];
var $cloneDiv;

//_________________________________________________________________________________________________________________//
//_________________________________________________________________________________________________________________//
function initializeTicker()
{
	TweenLite.ticker.addEventListener("tick", refreshScreen);	
}


function refreshScreen(event)//executes on every tick after the core engine updates
{
	screenRefresh++;
    for (var i=0; i<activeAnimationSequences.length; i++)
    {
    	if(screenRefresh % activeAnimationSequences[i].refreshesPerFrame == 0)
    	{	
    		activeAnimationSequences[i].advanceFrameJiggleClones();
    	}
    }
}


function animationSequence(divName, totalImages, looping) {
	this.divName = divName || "animatingDiv";
	this.imageCount = totalImages || 2;
	this.frameCount = totalImages || 2;
	this.looping = looping;
	this.currentImage = 0;
	this.currentFrame = 0;
	this.frameRate = 2;
	this.refreshesPerFrame = 30;
	this.dissolve = false;

	var createImage = function(src,thisStartFrame) {
	var img   = new Image();
 		img.src   = src;
 		img.startFrame = thisStartFrame;
		return img; 
	};

	//filePath and extension are used to locate the image resources
	var filePath = "../../images/"+divName+"/";
	var fileExtension = ".png";

	this.imageArray = [];//images are unique bitmap files
	this.frameArray = [];//frames represent one tick of time at the frameRate for this sequence

	for (var i=0;i<totalImages;i++)
	{
		this.imageArray.push(createImage(filePath+divName+(i+1).toString()+fileExtension, i));
		this.frameArray.push(i);
	}

	activeAnimationSequences.push(this);
}


animationSequence.prototype.setFrameRate = function(newFrameRate)
{
	this.frameRate = newFrameRate;
	this.refreshesPerFrame = Math.round(60/this.frameRate);
}

animationSequence.prototype.advanceFrame = function()
{
	this.currentFrame++;

	if (this.currentFrame < this.frameCount)
	{	
		$('#'+this.divName).attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);
	}
	else
	{	
		if(this.looping)
		{
			this.currentFrame = 0;
			$('#'+this.divName).attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);
		}else{
			activeAnimationSequences.pop(this);
		}	
	}
}

animationSequence.prototype.advanceFrameJiggleClones = function()
{
	this.currentFrame++;

	if (this.currentFrame < this.frameCount)
	{	
		$('#'+this.divName).attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);
		$('#'+this.divName+"_clone").attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);

		TweenLite.fromTo($('#'+this.divName+"_clone"), (refreshesPerFrame/60), {css:{y:-5}}, {css:{y:0},ease:Elastic.easeOut});
	}
	else
	{	
		if(this.looping)
		{
			this.currentFrame = 0;
			$('#'+this.divName).attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);
		}else{
			activeAnimationSequences.pop(this);
		}	
	}
}

animationSequence.prototype.hold = function(holdFrame, holdLength)
{	
	this.frameCount += holdLength;
	for (var i=(holdFrame-1);i<=holdLength;i++)
	{
		this.frameArray[i]=(holdFrame-1);
	}
	
	for (var j=1;j<=(this.frameCount-holdFrame);j++)
	{
		this.frameArray[holdLength+j]=j;
	}
};

//to be developed

animationSequence.prototype.holdRandom = function(value1, value2, value3){
	//console.log("I will hold image #"+value1+" for a random number of frames between "+value2+" and "+value3);
}

            