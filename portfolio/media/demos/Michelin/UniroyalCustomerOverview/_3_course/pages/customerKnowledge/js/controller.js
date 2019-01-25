// Set answers 	

// A
var answerKey1 = [{ value: "q1_s1", answer: 1 },{value: "q1_s2", answer: 0 },{ value: "q1_s3", answer: 0 },{ value: "q1_s4", answer: 0 }];
// A, B, C
var answerKey2 = [{ value: "q2_s1", answer: 1 },{value: "q2_s2", answer: 1 },{ value: "q2_s3", answer: 1 }, { value: "q2_s4", answer: 0 }];
// A
var answerKey3 = [{ value: "q3_s1", answer: 1 },{value: "q3_s2", answer: 0 },{ value: "q3_s3", answer: 0 }];
// A, B
var answerKey4 = [{ value: "q4_s1", answer: 1 },{value: "q4_s2", answer: 1 },{ value: "q4_s3", answer: 0 },{ value: "q4_s4", answer: 0 },{ value: "q4_s5", answer: 0 },{ value: "q4_s6", answer: 0 }];
// C
var answerKey5 = [{ value: "q5_s1", answer: 0 },{value: "q5_s2", answer: 0 },{ value: "q5_s3", answer: 1 }];
// B
var answerKey6 = [{ value: "q6_s1", answer: 0 },{value: "q6_s2", answer: 1 },{ value: "q6_s3", answer: 0 }];
// A
var answerKey7 = [{ value: "q7_s1", answer: 1 },{value: "q7_s2", answer: 0 },{ value: "q7_s3", answer: 0 },{ value: "q7_s4", answer: 0 }];
// A
var answerKey8 = [{ value: "q8_s1", answer: 1 },{value: "q8_s2", answer: 0 },{ value: "q8_s3", answer: 0 },{ value: "q8_s4", answer: 0 }];
// D
var answerKey9 = [{ value: "q9_s1", answer: 0 },{value: "q9_s2", answer: 0 },{ value: "q9_s3", answer: 0 },{ value: "q9_s4", answer: 1 }];

var hintMsgs = [
	"Remember that she needs the recommended trailer tire for her long haul trucks.",
	"Remember that long haul truck owners are worried about the distance they go and having reliability in a tire to get there.",
	"Remember you're looking for a steer tire for a long haul truck.",
	"Remember that Jose has a concrete pouring company, so he's on urban roads often.",
	"Try again.",
	"Try again.",
	"Try again. Remember that Dave's business is regional.",
	"Select the only difference in the list.",
	"Select the only difference in the list."
];

var answerMsgs = [
	"LT40<span class='shrinkage'><sup>&trade;</sup></span> is the best recommendation for Pat's trailer tires.",
	"The benefits of the LT40<span class='shrinkage'><sup>&trade;</sup></span> are that it is a long lasting tire combatting irregular wear, has StoneBlocker<span class='shrinkage'><sup>&trade;</sup></span> Design to protect the casing, and has DuraShield<span class='shrinkage'><sup>&reg;</sup></span> construction for retreadability.",
	"The LS24<span class='shrinkage'><sup>&trade;</sup></span> is the recommended fitment for a long haul steer tire.",
	"Jose needs on/off road tires so offering him the HS50<span class='shrinkage'><sup>&trade;</sup></span> and HD60<span class='shrinkage'><sup>&trade;</sup></span> are the best options.",
	"The HD60<span class='shrinkage'><sup>&trade;</sup></span> <strong>is not</strong> a recommended replacement for an on/off road steer tire. Uniroyal only recommends the HS50<span class='shrinkage'><sup>&trade;</sup></span> for Jose's trucks.",
	"Although all Uniroyal truck tires have DuraShield<span class='shrinkage'><sup>&reg;</sup></span> construction, the HD60<span class='shrinkage'><sup>&trade;</sup></span> and HS50<span class='shrinkage'><sup>&trade;</sup></span> have an additional belt ply enhancing hazard protection.",
	"The RD30<span class='shrinkage'><sup>&trade;</sup></span> is the best recommendation, however, the RS20<span class='shrinkage'><sup>&trade;</sup></span> and LS24<span class='shrinkage'><sup>&trade;</sup></span> could be acceptable fitments depending on your specific application.",
	"All of the Uniroyal<span class='shrinkage'><sup>&reg<sup></span> truck tires have this feature.",
	"The RS20<span class='shrinkage'><sup>&trade;</sup></span> has a tough, solid shoulder that fights scrub, while the LS24<span class='shrinkage'><sup>&trade;</sup></span> focuses on combating irregular wear with a sacrificial rib design.",	
];
/*
// Uniroyal Game Loop
var loop = new Howl({ urls: ['../../audio/uniroyal_loop.mp3'], autoplay: false, loop: true, volume: 1.0 });
// Selection box clicked
var boxClick = new Howl({ urls: ['../../audio/uniroyal_checkbox.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Answered the question correctly
var answeredCorrect = new Howl({ urls: ['../../audio/uniroyal_correct.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Answered the question incorrectly
var answeredIncorrect = new Howl({ urls: ['../../audio/uniroyal_fail.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Selection box hover
var boxHover = new Howl({ urls: ['../../audio/uniroyal_hover.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Character Footsteps
var footsteps = new Howl({ urls: ['../../audio/uniroyal_mod3_footsteps.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Submit button clicked
var submitClicked = new Howl({ urls: ['../../audio/uniroyal_submit_button.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Out of time fire off buzzer
var outofTime = new Howl({ urls: ['../../audio/buzz_out.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Game passed successfully.
var correctFeedback = new Howl({ urls: ['../../audio/mod3_20_Challenge_Congrats.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Game failed
var incorrectFeedback = new Howl({ urls: ['../../audio/mod3_21_Challenge_TryAgain.mp3'], autoplay: false, loop: false, volume: 1.0 });
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
	
	//createjs.MotionGuidePlugin.install();

	canvas = document.getElementById("canvas");
	images = images||{};
	
	var manifest = [
		{src:"images/background.png", id:"background"},
		{src:"images/dave.png", id:"dave"},
		{src:"images/dave_1.png", id:"dave_1"},
		{src:"images/dave_2.png", id:"dave_2"},
		{src:"images/dave_3.png", id:"dave_3"},
		{src:"images/desk.png", id:"desk"},
		{src:"images/jose.png", id:"jose"},
		{src:"images/jose_1.png", id:"jose_1"},
		{src:"images/jose_2.png", id:"jose_2"},
		{src:"images/jose_3.png", id:"jose_3"},
		{src:"images/Pat.png", id:"Pat"},
		{src:"images/pat_1.png", id:"pat_1"},
		{src:"images/pat_2.png", id:"pat_2"},
		{src:"images/pat_3.png", id:"pat_3"},
		{src:"images/register.png", id:"register"},
		{src:"../../audio/buzz_out.mp3", id:"buzz_out"},
		{src:"../../audio/mod3_20_Challenge_Congrats.mp3", id:"mod3_20_Challenge_Congrats"},
		{src:"../../audio/mod3_21_Challenge_TryAgain.mp3", id:"mod3_21_Challenge_TryAgain"},
		{src:"../../audio/uniroyal_checkbox.mp3", id:"uniroyal_checkbox"},
		{src:"../../audio/uniroyal_correct.mp3", id:"uniroyal_correct"},
		{src:"../../audio/uniroyal_fail.mp3", id:"uniroyal_fail"},
		{src:"../../audio/uniroyal_hover.mp3", id:"uniroyal_hover"},
		{src:"../../audio/uniroyal_loop.mp3", id:"uniroyal_loop"},
		{src:"../../audio/uniroyal_mod3_footsteps.mp3", id:"uniroyal_mod3_footsteps"},
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
	exportRoot = new lib.productknowledge();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(15);
	createjs.Ticker.addEventListener("tick", stage);
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
	$("#submitBtn").mousedown(function() { 
		playSound("uniroyal_submit_button");
		//submitClicked.play();
	});	
	
	// Set up sound effect for selection button rollovers	
	$("label").mouseover(function() { 
		playSound("uniroyal_hover");
		//boxHover.play();
	});	
	
	$("label").mousedown(function() { 
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
	jpgsTimeline.from($(".sBar"), 0.5, {scale:.5, autoAlpha:0}, "-=0.1");
	jpgsTimeline.from($(".sTire"), 0.5, {scale:.2, autoAlpha:0}, "-=0.1");
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
	//loop.play();
	playSound("uniroyal_loop", -1);
	countDown = 16000;
	pauseCounter = false;
	
	$correctAnswer = $(".activeState");
	$correctAnswer.hide();
	
	// Pat walks in
	exportRoot.gotoAndPlay("patIntro");
	
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
	exportRoot.gotoAndPlay("patIntro");
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
		$('#' + question.value).removeAttr('checked');		
	});
}
	

function processQuestion(index, key) {
	var bAllCorrect = true;
	var bAllPlaced = true;
	
	$.each(key, function( count, question ) {								
		var select = ($('#' + question.value).is(':checked') ? 1 : 0 )
		
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
		$( "#feedbackMessage" ).html(answerMsgs[index - 1] + "<br /><a style='margin-top: 10px' href='javascript:void(0)' id='nextBtn' class='button clickable' onclick='nextQuestion()'>NEXT</a>");
		$( "#feedbackHeader" ).addClass( "correct" );
		$( "#feedbackHeader" ).removeClass( "incorrect" );
		//exportRoot.play();
			
		playSound("uniroyal_correct");
		//answeredCorrect.play();
						
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
		
		//answeredIncorrect.play();
		playSound("uniroyal_fail");
		
		//Give one more try
		if( !retryToggle ) {
			//hold the countDown
			retryToggle = true;
			$( "#feedbackHeader" ).html("That's not quite right.");
			$( "#feedbackMessage" ).html(hintMsgs[index - 1] + "<br /><br /><a id='retryBtn' class='button clickable' href='javascript:void(0)' id='retry' onClick='nextQuestion();'>RETRY</a>");
			//go back to the one we had up
			currentQuestion = currentQuestion - 1;
		}
		else {
			//toggle
			$( "#feedbackMessage" ).html(answerMsgs[index - 1] + "<br /><br /><a id='nextBtn' class='button clickable' href='javascript:void(0)' id='next' onclick='nextQuestion()'>NEXT</a>");
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
	//var submitTimeline= new TimelineLite();
	//submitTimeline.to($("#submitBtn"), 0.5, {alpha:0});
		
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
				$( "#finishFeedbackHeader" ).html("Congratulations! You received your Tour Guide Badge<br />and are ready to move to the final assessment!<br />");
				$( "#finishFeedbackHeader" ).addClass( "correct" );
				$( "#finishFeedbackHeader" ).removeClass( "incorrect" );
				$( "#finishFeedbackMessage" ).html("You are well on your way to becoming a Uniroyal<sup>&reg;</sup> Tire Expert!<br /><br />Points earned:<br /><span class='correct'>" + score + "</span><br /><img id='adventurerBadger' src='images/tourBadge.png' style='width: 320px; margin: 20px 0'><a id='continueBtn' href='javascript:void(0)' class='button clickable' onClick='parent.courseObj.pageNext(); return false;'>CONTINUE</a>");
				
				//correctFeedback.play();
				playSound("Mod3_20_Challenge_Congrats");
				
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
				$( "#finishFeedbackHeader" ).html("You\'ve still got some work to do!<br /><br />");
				$( "#finishFeedbackMessage" ).html("Hang in there, we\'ll help you drive up your score!<br /><br />Points earned:<br /><span class='incorrect'>" + score + "</span><br /><br /><br /><div style='width: 450px; position: absolute; display: inline; top: 232px; left: 50%; margin-left: -225px'><a style='float: left' href='javascript:void(0)' id='retryBtn' class='button clickable' onClick='resetQuiz();'>RETRY</a><a id='reviewBtn' style='float: right' href='javascript:void(0)' class='button clickable' onClick='parent.courseObj.gotoPageIndex(1); return false;'>REVIEW COURSE</a></div>");
				//incorrectFeedback.play();
				playSound("Mod3_21_Challenge_TryAgain");
			}	
		} else {
			$("#feedback").hide();	
			$($questions.get(currentQuestion)).fadeIn();
			exportRoot.play();
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
			//outofTime.play();
			playSound("buzz_out");
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