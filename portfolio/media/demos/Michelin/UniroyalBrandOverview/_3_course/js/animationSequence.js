var frame = 0;
var screenRefresh = 0;
var frameRate = 24;
var folder = "";
var hasClones = false;
var refreshesPerFrame = Math.round(60/frameRate);
var activeAnimationSequences = [];
var $cloneDiv;


/*-------------------------------------------------------------------------------------------*/
function initializeTicker()
{
	TweenLite.ticker.addEventListener("tick", refreshScreen);
}
/*-------------------------------------------------------------------------------------------*/
function refreshScreen(event)//executes on every tick after the core engine updates
{
	screenRefresh++;
    for (var i=0; i<activeAnimationSequences.length; i++)
    {
    	if(screenRefresh % activeAnimationSequences[i].refreshesPerFrame == 0)
    	{	
    		activeAnimationSequences[i].advanceFrame();
    	}
    }
}
/*-------------------------------------------------------------------------------------------*/
function animationSequence(divName, totalImages, looping, folder, autoPlay, hasClones) {
	
	this.divName = divName;
	this.imageCount = totalImages;
	this.frameCount = totalImages;
	this.looping = looping;
	this.hasClones = hasClones;

	if(typeof(divName)==='undefined') this.divName = "animatingDiv";
	if(typeof(totalImages)==='undefined') this.imageCount = 1;
	if(typeof(totalImages)==='undefined') this.frameCount = 1;
	if(typeof(looping)==='undefined') this.looping = false;
	if(typeof(autoPlay)==='undefined') this.autoPlay = true;
	if(typeof(hasClones)==='undefined') this.hasClones = false;

	this.currentImage = 0;
	this.currentFrame = 0;
	this.frameRate = 1;
	this.refreshesPerFrame = 60;
	this.dissolve = false;
	
	if(folder)
	{
		this.folder = folder+"/";
	}else
	{
		this.folder = "";
	}
	this.filePath = "../../images/"+this.folder+divName+"/";

	var createImage = 	function(src,thisStartFrame)
						{
							var img   = new Image();
 								img.src   = src;
 								img.startFrame = thisStartFrame;
							return img; 
						};

	//filePath and extension are used to locate the image resources
	this.fileExtension = ".png";

	this.imageArray = [];//images are unique bitmap files
	this.frameArray = [];//frames represent one tick of time at the frameRate for this sequence

	for (var i=0;i<totalImages;i++)
	{
		this.imageArray.push(createImage(this.filePath+this.divName+(i+1).toString()+this.fileExtension, i));
		this.frameArray.push(i);
		//console.log("frameArray pushing "+i);
	}

	if(this.autoPlay)
	{
		activeAnimationSequences.push(this);
	}
}
/*-------------------------------------------------------------------------------------------*/
/* addFrames() */

/*   */

animationSequence.prototype.addFrame = function(imageNumber, holdLength)
{	
	this.frameCount += holdLength;
	for (var i=0;i<=holdLength;i++)
	{
		this.frameArray[this.frameCount-i]=(imageNumber);
	}
};


/*-------------------------------------------------------------------------------------------*/
/* playAnimation() */

/* start an animation sequence (that wasn't set to autoPlay upon creation) by running this   */

animationSequence.prototype.play = function()
{
	activeAnimationSequences.push(this);
}

/*-------------------------------------------------------------------------------------------*/
/* setFolder() */

/* Define a subfolder for the image sequence  												 */

animationSequence.prototype.setFolder = function(newFolder)
{
	this.folder = newFolder+"/";
	this.filePath = "../../images/"+this.folder+this.divName+"/";
	console.log(this.filePath);
}
/*-------------------------------------------------------------------------------------------*/
/* setFrameRate() */

/* Set the frequency of frame updates (in frames per second)								 */
animationSequence.prototype.setFrameRate = function(newFrameRate)
{
	this.frameRate = newFrameRate;
	this.refreshesPerFrame = Math.round(60/this.frameRate);

}

animationSequence.prototype.setFrameCount = function(newFrameCount)
{
	this.frameCount = newFrameCount;
}

/*-------------------------------------------------------------------------------------------*/
animationSequence.prototype.advanceFrame = function()
{
	this.currentFrame++;

	if (this.currentFrame < this.frameCount)
	{	
		$('#'+this.divName).attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);
		//console.log("frameArray["+this.currentFrame+"]="+this.)
	}
	else
	{	
		if(this.looping)
		{
			//console.log ("this.looping = true, looping "+this.divName);
			this.currentFrame = 0;
			$('#'+this.divName).attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);
		}else{
			//console.log ("this.looping = false, popping "+this.divName);
			activeAnimationSequences.pop(this);
		}	
	}
	if(this.hasClones)
	{
		this.advanceClones();
	}
}
/*-------------------------------------------------------------------------------------------*/
animationSequence.prototype.advanceClones = function()
{
	if (this.currentFrame < this.frameCount)
	{	
		$('#'+this.divName+"_clone").attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);
		TweenLite.fromTo($('#'+this.divName+"_clone"), (refreshesPerFrame/60), {css:{y:-5}}, {css:{y:0},ease:Elastic.easeOut});
	}
	else
	{	
		if(this.looping)
		{
			this.currentFrame = 0;
			$('#'+this.divName+"_clone").attr("src",this.imageArray[this.frameArray[this.currentFrame]].src);
		}else{
			activeAnimationSequences.pop(this);
		}	
	}
}
/*-------------------------------------------------------------------------------------------*/
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
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/







/*-------------------------------------------------------------------------------------------*/
//to be developed

animationSequence.prototype.holdRandom = function(value1, value2, value3){
	//console.log("I will hold image #"+value1+" for a random number of frames between "+value2+" and "+value3);
}
/*-------------------------------------------------------------------------------------------*/
            