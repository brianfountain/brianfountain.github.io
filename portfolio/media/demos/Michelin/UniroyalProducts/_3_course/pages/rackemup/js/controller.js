// Set answers 	

// Answer: B
var answerKey1 = [{ id: "rs20_1", answer: 0 },{ id: "rd30_1", answer: 1 },{ id: "ls24_1", answer: 0 },{ id: "lt40_1", answer: 0 },{ id: "hs50_1", answer: 0 },{ id: "hd60_1", answer: 0 } ];

// Answer: F
var answerKey2 = [{ id: "rs20_2", answer: 0 },{ id: "rd30_2", answer: 0 },{ id: "ls24_2", answer: 0 },{ id: "lt40_2", answer: 0 },{ id: "hs50_2", answer: 0 },{ id: "hd60_2", answer: 1 } ];

// Answer: B, C, D
var answerKey3 = [{ id: "rs20_3", answer: 0 },{ id: "rd30_3", answer: 1 },{ id: "ls24_3", answer: 1 },{ id: "lt40_3", answer: 1 },{ id: "hs50_3", answer: 0 },{ id: "hd60_3", answer: 0 } ];

// Answer: B, D, F
var answerKey4 = [{ id: "rs20_4", answer: 0 },{ id: "rd30_4", answer: 1 },{ id: "ls24_4", answer: 0 },{ id: "lt40_4", answer: 1 },{ id: "hs50_4", answer: 0 },{ id: "hd60_4", answer: 1 } ];

// Answer: A
var answerKey5 = [{ id: "rs20_5", answer: 1 },{ id: "rd30_5", answer: 0 },{ id: "ls24_5", answer: 0 },{ id: "lt40_5", answer: 0 },{ id: "hs50_5", answer: 0 },{ id: "hd60_5", answer: 0 } ];

// Answer: F
var answerKey6 = [{ id: "rs20_6", answer: 0 },{ id: "rd30_6", answer: 0 },{ id: "ls24_6", answer: 0 },{ id: "lt40_6", answer: 0 },{ id: "hs50_6", answer: 0 },{ id: "hd60_6", answer: 1 } ];

// Answer: C, D
var answerKey7 = [{ id: "rs20_7", answer: 0 },{ id: "rd30_7", answer: 0 },{ id: "ls24_7", answer: 1 },{ id: "lt40_7", answer: 1 },{ id: "hs50_7", answer: 0 },{ id: "hd60_7", answer: 0 } ];

// Answer: C
var answerKey8 = [{ id: "rs20_8", answer: 0 },{ id: "rd30_8", answer: 0 },{ id: "ls24_8", answer: 1 },{ id: "lt40_8", answer: 0 },{ id: "hs50_8", answer: 0 },{ id: "hd60_8", answer: 0 } ];

// Answer: B
var answerKey9 = [{ id: "rs20_9", answer: 0 },{ id: "rd30_9", answer: 1 },{ id: "ls24_9", answer: 0 },{ id: "lt40_9", answer: 0 },{ id: "hs50_9", answer: 0 },{ id: "hd60_9", answer: 0 } ];

var answerMsgs = [
	"Based on the naming convention, the RD30<span class='shrinkage'><sup>&trade;</sup></span> is the Uniroyal<span class='shrinkage'><sup>&reg;</sup></span> regional drive tire.",
	"The Uniroyal<span class='shrinkage'><sup>&reg;</sup></span> HD60<span class='shrinkage'><sup>&trade;</sup></span> is an on/off road tire.",
	"The LS24<span class='shrinkage'><sup>&trade;</sup></span>, LT40<span class='shrinkage'><sup>&trade;</sup></span>, and RD30<span class='shrinkage'><sup>&trade;</sup></span> are all recommended long haul tires.",
	"The RD30<span class='shrinkage'><sup>&trade;</sup></span>, LT40<span class='shrinkage'><sup>&trade;</sup></span>, and HD60<span class='shrinkage'><sup>&trade;</sup></span> have the StoneBlocker<span class='shrinkage'><sup>&trade;</sup></span> technology.",
	"The RS20<span class='shrinkage'><sup>&trade;</sup></span> is highlighted for you.",
	"The HD60<span class='shrinkage'><sup>&trade;</sup></span> is highlighted for you. The HD60<span class='shrinkage'><sup>&trade;</sup></span> has Tiger Claw<span class='shrinkage'><sup>&trade;</sup></span> traction that grips surfaces effectively with a tough, reliable tread that fights chips and cuts.",
	"The long haul options, LS24<span class='shrinkage'><sup>&trade;</sup></span> and the LT40<span class='shrinkage'><sup>&trade;</sup></span>, are highlighted below.",
	"The LS24<span class='shrinkage'><sup>&trade;</sup></span> is the recommended tire for long haul steer positioning.",
	"RD30<span class='shrinkage'><sup>&trade;</sup></span> is the recommended tire for regional drive positioning."
];
/*
// Uniroyal Game Loop loop.play();
var loop = new Howl({ urls: ['../../audio/uniroyal_loop.mp3'], autoplay: false, loop: true, volume: 1.0 });
// Selection box clicked boxClick.play();
var boxClick = new Howl({ urls: ['../../audio/uniroyal_checkbox.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Answered the question correctly answeredCorrect.play();
var answeredCorrect = new Howl({ urls: ['../../audio/uniroyal_correct.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Answered the question incorrectly answeredIncorrect.play();
var answeredIncorrect = new Howl({ urls: ['../../audio/uniroyal_fail.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Selection box hover boxHover.play();
var boxHover = new Howl({ urls: ['../../audio/uniroyal_hover.mp3'], autoplay: false,	loop: false, volume: 1.0 });
// Submit button clicked submitClicked.play();
var submitClicked = new Howl({ urls: ['../../audio/uniroyal_submit_button.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Out of time fire off buzzer outofTime.play();
var outofTime = new Howl({ urls: ['../../audio/buzz_out.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Game passed successfully. correctFeedback.play();
var correctFeedback = new Howl({ urls: ['../../audio/mod2_20_Challenge_Congrats.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Game failed incorrectFeedback.play();
var incorrectFeedback = new Howl({ urls: ['../../audio/mod2_21_Challenge_TryAgain.mp3'], autoplay: false, loop: false, volume: 1.0 });
*/

// Set up our fla
var canvas, stage, exportRoot, images, answer, question, totalQuestions, currentQuestionObject, questions, counter, sTime, cTime, diff, intro, seconds, timeKeeper, quizRetry;

// Set the initial score
var score = 0;
var totalCorrect = 0;
var currentQuestion = 0;
var pauseCounter = false;
var retryToggle = false;
var quizRetry = false;

// Set countDown
var countDown = 16000;

// Set up the canvas
function initCanvas() {
	// Hide question display on page load
	$questions = $('.questions');
	$questions.hide();	
	
	$beginButton = $("#beginBtn");
	$beginButton.hide();
	
	$submitButton = $("#submitBtn");
	$submitButton.hide();
	
	$timer = $("#timerPlacement");
	$timer.hide();
	
	parent.courseObj.setNextEnabled(false);
	
	createjs.MotionGuidePlugin.install();

	canvas = document.getElementById("canvas");
	images = images||{};
	
	var manifest = [
		{src:"images/mainbackground.png", id:"mainbackground"},
		{src:"images/rackback.png", id:"rackback"},
		{src:"images/rackfront.png", id:"rackfront"},
		{src:"images/tiretoss.png", id:"tiretoss"},
		{src:"../../audio/buzz_out.mp3", id:"buzz_out"},
		{src:"../../audio/mod2_20_Challenge_Congrats.mp3", id:"mod2_20_Challenge_Congrats"},
		{src:"../../audio/mod2_21_Challenge_TryAgain.mp3", id:"mod2_21_Challenge_TryAgain"},
		{src:"../../audio/uniroyal_checkbox.mp3", id:"uniroyal_checkbox"},
		{src:"../../audio/uniroyal_correct.mp3", id:"uniroyal_correct"},
		{src:"../../audio/uniroyal_fail.mp3", id:"uniroyal_fail"},
		{src:"../../audio/uniroyal_hover.mp3", id:"uniroyal_hover"},
		{src:"../../audio/uniroyal_loop.mp3", id:"uniroyal_loop"},
		{src:"../../audio/uniroyal_submit_button.mp3", id:"uniroyal_submit_button"}
	];

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest);
	
};

// Manifest has completed loading
function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	exportRoot = new lib.rackemup();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(15);
	createjs.Ticker.addEventListener("tick", stage);
	// Initialize our components	
	initComponents();
	$("#cover").hide();
}

function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}


function tick() {
	/** update stuff here **/
	stage.update();
}


function initComponents() {
	parent.$("#jquery_jplayer_1").jPlayer("play");
	timeKeeper = new Date();
	sTime = timeKeeper.getTime();
	counter = window.setInterval(updateTime, 500);
	pauseCounter = true;
	
	//Remove Stage Library Assets
	exportRoot.removeChild(exportRoot.cover);
	exportRoot.stop();
		
	// Place and add the introduction cover
	introCover = new lib.cover();
	introCover.x = 0;
	introCover.y = 0;
	stage.addChild(introCover);
	stage.update();
	
	// Show the begin button
	$beginButton = $("#beginBtn");
	$beginButton.show();
	
	
	// Hide submit button on page load
	$("#submitBtn").hide();
	$("#submitBtn").click(function() { 
		playSound("uniroyal_submit_button");
		//submitClicked.play();
	});	
	
	// Set up sound effect for selection button rollovers	
	$("label").mouseover(function() { 
		playSound("uniroyal_hover");
		//boxHover.play();
	});	
	
	$("label").mouseup(function() { 
		playSound("uniroyal_checkbox");
		//boxClick.play();
	});	
	
	// Fade in the game intro stuff
	$("#questionIntro").fadeIn();
	
	// Fade out the canvas loading curtains
	//$("#cover").fadeOut();
	
	// Bring in intro graphics   
	var jpgsTimeline = new TimelineLite();
	//jpgsTimeline.from($(".sHeader"), 0.6, {left:100, autoAlpha:0}, "-=0.3");
	jpgsTimeline.from($(".sHeader"), 0.5, {scale:.4, autoAlpha:0}, "-=0.3");
	//jpgsTimeline.from($(".sHeaderLine3"), 0.6, {left:1000, autoAlpha:0}, "+=0.3");
	jpgsTimeline.from($(".sHeaderLine3"), 0.5, {scale:.4, autoAlpha:0}, "-=0.3");
	jpgsTimeline.from($(".sTire"), 0.5, {scale:.2, autoAlpha:0}, "-=0.1");
	jpgsTimeline.from($(".sBar"), 0.5, {scale:.5, autoAlpha:0}, "-=0.1");
	//jpgsTimeline.to($(".sRules"), 0.5, {alpha:1}, "-=.1");
	//jpgsTimeline.to($(".sDataBook"), 0.5, {alpha:1}, "-=0.1");
	//jpgsTimeline.to($("#beginBtn"), 0.5, {alpha:1}, "-=.1");
	jpgsTimeline.play();
}

// Score Calculations
function updateScore(scoreDelta) {
	score = Math.max(0, score + scoreDelta);
	$("#scoreText").html("Points: " + score);
	$( "#scoreFlash" ).html("+" + scoreDelta);
	var newScore = $("#scoreFlash");
	var t3 = new TimelineLite();
	t3.to(newScore, .4, {autoAlpha:1, scale: 4}).to(newScore, 1, {alpha:0, scale:1});
}

// Answers Correct Calculations
function updateCorrect(correctDelta) {
	totalCorrect = Math.max(0, totalCorrect + correctDelta);
	$("#answersCorrectText").html("Answers Correct: " + totalCorrect + " of 9");
}

function beginQuiz() {	
	// stop timeline audio
	parent.$("#jquery_jplayer_1").jPlayer("stop");
	playSound("uniroyal_loop", -1);
	//loop.play();
	countDown = 16000;
	pauseCounter = false;
	
	$correctAnswer = $(".activeState");
	$correctAnswer.hide();
	
	// Drop the rack
	exportRoot.gotoAndPlay("begin");
	
	// Remove intro cover
	stage.removeChild(introCover);
	$timer = $('#timerPlacement');
	$timer.show();
	var timerTimeline= new TimelineLite();
	timerTimeline.from($timer, 0.5, {scale: 0.7, autoAlpha:0});	
	
	// Bring on the first submit button
	$("#submitBtn").show();
	var submitTimeline= new TimelineLite();
	submitTimeline.from($("#submitBtn"), 0.5, {scale: 0.7, autoAlpha:0});	

	totalQuestions = $('.questions').size();
	questions = $('.questions');
	questions.hide();
	
	intro = $('#questionIntro');
	intro.hide();
	
	currentQuestionObject = $(questions.get(currentQuestion));
	currentQuestionObject.fadeIn();
	
	// Send off the click next instructions
	parent.skinLayout.clickNextObj.justHideClickNext();
	// Send off the closed captions
	if (parent.skinLayout.captionObj.isShowing) {
		parent.skinLayout.captionObj.showHide();
	}

}

function resetQuiz() {
	$("#finishScreen").hide();
	$("#finishDisplay").hide();
	currentQuestion = 0;
	currentQuestionObject = $(questions.get(currentQuestion));
	currentQuestionObject.show();
	currentQuestionObject.fadeIn();
	exportRoot.gotoAndPlay("begin");
	score = 0;
	totalCorrect = 0;
	
	// Reset checks
	resetQuestion(answerKey1);
	resetQuestion(answerKey2);
	resetQuestion(answerKey3);
	resetQuestion(answerKey4);
	resetQuestion(answerKey5);
	resetQuestion(answerKey6);
	resetQuestion(answerKey7);
	resetQuestion(answerKey8);
	resetQuestion(answerKey9);
	
	// Set up initial Timer
	timeKeeper = new Date();
	sTime = timeKeeper.getTime();
	counter = window.setInterval(updateTime, 500);
	countDown = 16000;
	pauseCounter = false;
	updateScore(0);
	updateCorrect(0);
	$("#submitBtn").show();
}

function resetQuestion(key) {	
	$.each(key, function( count, question ) {								
		$('#' + question.id).removeAttr('checked');		
	});
}
	

function processQuestion(index, key) {
	var bAllCorrect = true;
	var bAllPlaced = true;
	
	$.each(key, function( count, question ) {								
		var select = ($('#' + question.id).is(':checked') ? 1 : 0 )
		
		//only check items with selections
		if( typeof select != 'undefined' ) {
			if( select !== question.answer )
				bAllCorrect = false;
			} else {
				bAllPlaced = false;
		}
	});
	
	if ( bAllPlaced && bAllCorrect ) {
		//set the popup msg
		$( "#feedbackHeader" ).html("That's correct!");
		$( "#feedbackMessage" ).html(answerMsgs[index - 1] + "<br /><a id='nextBtn' class='button clickable' href='javascript:void(0)' id='next' onclick='nextQuestion()'>NEXT</a>");
		$( "#feedbackHeader" ).addClass( "correct" );
		$( "#feedbackHeader" ).removeClass( "incorrect" );
		exportRoot.play();
			
		//answeredCorrect.play();
		playSound("uniroyal_correct");
				
		//exportRoot.gotoAndPlay(answerSteps[index - 1]);
		updateScore((Math.floor(seconds * 50)) + (retryToggle ? 100 : 200));	
		updateCorrect(1);	
		
		//reset retryToggle
		retryToggle = false;
		countDown = 16000;
		
		$correctAnswer = $(".activeState");
		$correctAnswer.show();
		
	} else {
		//set the popup msg
		$( "#feedbackHeader" ).html("That's incorrect.");
		$( "#feedbackHeader" ).addClass( "incorrect" );
		$( "#feedbackHeader" ).removeClass( "correct" );
		playSound("uniroyal_fail");
		//answeredIncorrect.play();
		
		//Give one more try
		if( !retryToggle ) {
			//hold the countDown
			retryToggle = true;
			$( "#feedbackMessage" ).html("Please try again.<br /><br /><a id='retryBtn' class='button clickable' href='javascript:void(0)' id='retry' onClick='nextQuestion();'>RETRY</a>");
			//go back to the one we had up
			currentQuestion = currentQuestion - 1;
		}
		else {
			//toggle
			$( "#feedbackMessage" ).html(answerMsgs[index - 1] + "<br /><br /><a id='nextBtn' class='button clickable' href='javascript:void(0)' id='next' onclick='nextQuestion()'>NEXT</a></div>");
			retryToggle = false;
			countDown = 16000;
			$correctAnswer = $(".activeState");
			$correctAnswer.show();
		}
	}
	pauseCounter = true;
	$( "#feedback" ).fadeIn();
}

// On each submit click 
function submitClick() {
	questions = $('.questions');
	///currentQuestionObject = $(questions.get(currentQuestion));
	//currentQuestionObject.hide();
	currentQuestion = currentQuestion + 1;
	
	// Hide Submit until next
	$("#submitBtn").hide();
	switch(currentQuestion) {
		case 1: {			
			processQuestion(currentQuestion, answerKey1);
			break;
		}
		case 2: {
			processQuestion(currentQuestion, answerKey2);	
			break;
		}
		case 3: {
			processQuestion(currentQuestion, answerKey3);
			break;
		}
		case 4: {
			processQuestion(currentQuestion, answerKey4);	
			break;
		}
		case 5: {
			processQuestion(currentQuestion, answerKey5);			
			break;
		}
		case 6: {
			processQuestion(currentQuestion, answerKey6);			
			break;
		}
		case 7: {
			processQuestion(currentQuestion, answerKey7);			
			break;
		}
		case 8: {
			processQuestion(currentQuestion, answerKey8);			
			break;
		}
		case 9: {
			processQuestion(currentQuestion, answerKey9);			
			break;
		}
		case 10: {
			currentQuestion = 1;	
			break;
		}
		default: {
			//console.log("Invalid Question Index!");
			return;
		}		
	}
}

function nextQuestion() {
	currentQuestionObject = $(questions.get(currentQuestion - 1));
	currentQuestionObject.hide();
	
	// Hide the correct answers until next
	$correctAnswer = $(".activeState");
	$correctAnswer.hide();
	
	if( retryToggle ) {
		$("#feedback").hide();	
		questions = $('.questions');
		currentQuestionObject = $(questions.get(currentQuestion));
		currentQuestionObject.show();
		pauseCounter = false;
		$("#submitBtn").show();
		switch(currentQuestion + 1) {
				case 1: {			
					resetQuestion(answerKey1);
					break;
				}
				case 2: {
					resetQuestion(answerKey2);	
					break;
				}
				case 3: {
					resetQuestion(answerKey3);
					break;
				}
				case 4: {
					resetQuestion(answerKey4);	
					break;
				}
				case 5: {
					resetQuestion(answerKey5);			
					break;
				}
				case 6: {
					resetQuestion(answerKey6);			
					break;
				}
				case 7: {
					resetQuestion(answerKey7);			
					break;
				}
				case 8: {
					resetQuestion(answerKey8);		
					break;
				}
				case 9: {
					resetQuestion(answerKey9);		
					break;
				}
				case 10: {
					currentQuestion = 1;	
					break;
				}
				default: {
					//console.log("Invalid Question Index!");
					return;
				}		
		}
	}
	else {
		$("#feedback").hide();	
		if (currentQuestion >= 9){
			window.clearInterval(counter);
			$("#finishScreen").show();
			$("#finishDisplay").show();
			exportRoot.removeChild(exportRoot.questionBox);					
			if (totalCorrect >= 7){
				exportRoot.removeChild(exportRoot.questionBox);
				parent.courseObj.pageNext();
				parent.courseObj.setNextEnabled(true);
				/* $("#finishDisplay").css("height", "550px"); */
				$( "#finishFeedbackHeader" ).html("Congratulations! You received your Adventurer Badge<br />and are ready to move to the next level!<br />");
				$( "#finishFeedbackHeader" ).addClass( "correct" );
				$( "#finishFeedbackHeader" ).removeClass( "incorrect" );
				$( "#finishFeedbackMessage" ).html("You are well on your way to becoming a Uniroyal<sup>&reg;</sup> Tire Expert!<br /><br />Points earned:<br /><span class='correct'>" + score + "</span><br /><img class='badge' id='adventurerBadger' src='images/adventurerBadge.png' style='width: 320px; margin: 20px 0'><a id='nextBtn' class='button clickable' href='javascript:void(0)' id='next' onClick='parent.courseObj.pageNext(); return false;'>CONTINUE</a></div>");
				
				playSound("mod2_20_Challenge_Congrats");
				//correctFeedback.play();
				
				//instantiate a TimelineLite    
				var feedbackTimeline = new TimelineLite();
				feedbackTimeline.from($("#finishScreen"), 0.5, {autoAlpha:0});
				feedbackTimeline.from($( "#finishFeedbackHeader" ), 0.5, {top:100, autoAlpha:0});
				feedbackTimeline.from($( "#finishFeedbackMessage" ), 0.5, {autoAlpha:0});
				feedbackTimeline.from($( "#adventurerBadger" ), 0.5, {scale:.5, autoAlpha:0}, "+=0.5");
				feedbackTimeline.from($( "#nextBtn" ), 0.5, {autoAlpha:0}, "+=.25");
				feedbackTimeline.play();
				
			} else {
				//console.log("no dice");
				$("#finishDisplay").css("height", "260px");
				$( "#finishFeedbackHeader" ).addClass( "incorrect" );
				$( "#finishFeedbackHeader" ).removeClass( "correct" );
				$( "#finishFeedbackHeader" ).html("You’ve still got some work to do!<br /><br />");
				$( "#finishFeedbackMessage" ).html("Hang in there, we’ll help you drive up your score!<br /><br />Points earned:<br /><span class='incorrect'>" + score + "</span><br /><br /><br /><div style='width: 450px; position: absolute; display: inline; top: 232px; left: 50%; margin-left: -225px'><a style='float: left' href='javascript:void(0)' id='nextBtn' class='button clickable' onClick='resetQuiz();'>RETRY</a><a style='float: right' href='javascript:void(0)' id='nextBtn' class='button clickable' onClick='parent.courseObj.gotoPageIndex(1); return false;'>REVIEW COURSE</a></div>");
				playSound("mod2_21_Challenge_TryAgain");
				//incorrectFeedback.play();
			}	
		} else {
			$("#feedback").hide();	
			$($questions.get(currentQuestion)).fadeIn();
			countDown = 16000;
			pauseCounter = false;
			$("#countDown").show();
			$("#submitBtn").show();
			//var submitTimeline= new TimelineLite();
			//submitTimeline.to($("#submitBtn"), 0.5, {scale: 1, alpha:1});
			$("#scoreFlash").alpha = 1;
		}
	}
}

// Set up a new timer every question
function updateTime() {
	cTime = Date.now();
	diff = cTime - sTime;
	if( !pauseCounter ) {		
		countDown -= diff;
		if (countDown <= 0) {
			playSound("buzz_out");
			//outofTime.play();
			$("#seconds").html("<span class='timesup'>Time's Up!</span>");
			pauseCounter = true;
			countDown = 0;
		}
		else {
			seconds = Math.max(0, Math.floor(countDown/1000));
			$("#seconds").html(seconds < 10 ? "0" + seconds : seconds);
		}
	}
	//last time capture
	sTime = cTime;
}

