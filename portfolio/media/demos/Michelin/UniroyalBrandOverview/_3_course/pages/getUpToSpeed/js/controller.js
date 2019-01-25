// Set answers 	

// A, B, C
var answerKey1 = [{ value: "q1_s1", answer: 1 },{value: "q1_s2", answer: 1 },{ value: "q1_s3", answer: 1 },{ value: "q1_s4", answer: 0 }];
// B
var answerKey2 = [{ value: "q2_s1", answer: 0 },{value: "q2_s2", answer: 1 },{ value: "q2_s3", answer: 0 }];
// B, D
var answerKey3 = [{ value: "q3_s1", answer: 0 },{value: "q3_s2", answer: 1 },{ value: "q3_s3", answer: 0 },{ value: "q3_s4", answer: 1 }];
// A, B, D
var answerKey4 = [{ value: "q4_s1", answer: 1 },{value: "q4_s2", answer: 1 },{ value: "q4_s3", answer: 0 },{ value: "q4_s4", answer: 1 },{ value: "q4_s5", answer: 0 }];
// A
var answerKey5 = [{ value: "q5_s1", answer: 1 },{value: "q5_s2", answer: 0 },{ value: "q5_s3", answer: 0 }];

var answerMsgs = [
	"The Uniroyal<span class='shrinkage'><sup>&reg;</sup></span> Commercial Truck Tire Website, the Digital Sales Tool, and Uniroyal<span class='shrinkage'><sup>&reg;</sup></span> Commercial Truck Tire Data Book are the appropriate tools.",
	"The Uniroyal<span class='shrinkage'><sup>&reg;</sup></span> Brand is in the lower Intermediate price tier.",
	"Jose, Pat, and Dave may or may not retread their truck tires, and they all have limited knowledge of tire features and benefits.",
	"Dave may own used vehicles, see tires in terms of price and not investment, and depend on you for a great tire recommendation!",
	"Uniroyal<span class='shrinkage'><sup>&reg;</sup></span> offers 6 heavy truck tires in its line with a total of 28 sizing variations."
];

var answerSteps = ["step1", "step2", "step3", "step4", "step5"];
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
var boxHover = new Howl({ urls: ['../../audio/uniroyal_hover.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Character Footsteps accel.play(); 
var accel = new Howl({ urls: ['../../audio/uniroyal_truck_accellerate.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Submit button clicked submitClicked.play();
var submitClicked = new Howl({ urls: ['../../audio/uniroyal_submit_button.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Out of time fire off buzzer outofTime.play();
var outofTime = new Howl({ urls: ['../../audio/buzz_out.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Game passed successfully. correctFeedback.play();
var correctFeedback = new Howl({ urls: ['../../audio/mod1_18_Challenge_Congrats.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Game failed incorrectFeedback.play();
var incorrectFeedback = new Howl({ urls: ['../../audio/mod1_19_Challenge_TryAgain.mp3'], autoplay: false, loop: false, volume: 1.0 });
*/

// Set up our fla
var canvas, stage, exportRoot, introCover, images, answer, question, totalQuestions, currentQuestionObject, questions, counter, sTime, cTime, diff, intro, seconds, timeKeeper;

// Set the initial score
var score = 0;
var totalCorrect = 0;
var currentQuestion = 0;

var pauseCounter = false;
var retryToggle = false;
var countDown = 16000;

// For use within normal web clients 
var isiPad = navigator.userAgent.match(/iPad/i) != null;

// For use within iPad developer UIWebView
// Thanks to Andrew Hedges!
var ua = navigator.userAgent.toLowerCase();
var isiPad = /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

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
	
	canvas = document.getElementById("canvas");
	images = images||{};
	var manifest = [
		{src:"images/getuptospeed_horizon.jpg", id:"getuptospeed_horizon"},
		{src:"images/getuptospeed_largedash.png", id:"getuptospeed_largedash"},
		{src:"images/steeringwheel.png", id:"steeringwheel"},
		{src:"../../audio/buzz_out.mp3", id:"buzz_out"},
		{src:"../../audio/mod1_18_Challenge_Congrats.mp3", id:"mod1_18_Challenge_Congrats"},
		{src:"../../audio/mod1_19_Challenge_TryAgain.mp3", id:"mod1_19_Challenge_TryAgain"},
		{src:"../../audio/uniroyal_checkbox.mp3", id:"uniroyal_checkbox"},
		{src:"../../audio/uniroyal_correct.mp3", id:"uniroyal_correct"},
		{src:"../../audio/uniroyal_fail.mp3", id:"uniroyal_fail"},
		{src:"../../audio/uniroyal_hover.mp3", id:"uniroyal_hover"},
		{src:"../../audio/uniroyal_loop.mp3", id:"uniroyal_loop"},
		{src:"../../audio/uniroyal_submit_button.mp3", id:"uniroyal_submit_button"},
		{src:"../../audio/uniroyal_truck_accellerate.mp3", id:"uniroyal_truck_accellerate"}
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
	exportRoot = new lib.getUpToSpeed();
	
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	exportRoot.stop();
	stage.update();

	createjs.Touch.enable(stage);
	
	createjs.Ticker.setFPS(12);
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
	
	exportRoot.removeChild(exportRoot.cover);	
	introCover = new lib.cover();
	introCover.x = 0;
	introCover.y = 0;
	
	$beginButton = $("#beginBtn");
	$beginButton.show();
	
	stage.addChild(introCover);
	stage.update();
			
	// Hide question display on page load
	$questions = $('.questions');
	$questions.hide();
	
	$submitButton = $("#submitBtn");
	$submitButton.hide();
	$submitButton.mousedown(function() { 
		playSound("uniroyal_submit_button");
		//submitClicked.play();
	});	
		
	$("label").mouseover(function() { 
		playSound("uniroyal_hover");
		//boxHover.play();
	});	
	
	$("label").mousedown(function() { 
		playSound("uniroyal_checkbox");
		//boxClick.play();
	});	
	
	$("#questionIntro").show();
	//$("#cover").fadeOut();
	
	//instantiate a TimelineLite    
	var jpgsTimeline = new TimelineLite();
	//jpgsTimeline.from($(".sHeader"), 0.6, {left:100, autoAlpha:0}, "-=0.3");
	jpgsTimeline.from($(".sHeader"), 0.6, {scale:.4, autoAlpha:0}, "-=0.3");
	jpgsTimeline.from($(".sHeaderLine2"), 0.4, {autoAlpha:0}, "-=0.3");
	//jpgsTimeline.from($(".sHeaderLine3"), 0.6, {left:1000, autoAlpha:0}, "+=0.3");
	jpgsTimeline.from($(".sHeaderLine3"), 0.6, {scale:.4, autoAlpha:0}, "-=0.1");
	jpgsTimeline.from($(".sTires"), 0.5, {scale:.2, autoAlpha:0}, "-=0.1");
	jpgsTimeline.from($(".sBar"), 0.5, {scale:.5, autoAlpha:0}, "-=0.1");
	//tl.from($(".sRules"), 0.5, {autoAlpha:0}, "-=.1");
	//tl.from($("#beginBtn"), 0.5, {autoAlpha:0}, "-=.1");
	jpgsTimeline.from($(".sTop"), 1, {autoAlpha:0}, "-=0.25");
	jpgsTimeline.play();
}

// Temporary Score Calculations
function updateScore(scoreDelta) {
	score = Math.max(0, score + scoreDelta);
	$("#scoreText").html("Points: " + score);
	//exportRoot.scoreTxt.text = "Points: " + score;
	$( "#scoreFlash" ).html("+" + scoreDelta);
	var newScore = $("#scoreFlash");
	var t3 = new TimelineLite();
	t3.to(newScore, .4, {autoAlpha:1, scale: 4}).to(newScore, 1, {alpha:0, scale:1});
}

/*
function updateFPS(framesDelta) {
	var framesper = Math.max(0, framesper + framesDelta);
	createjs.Ticker.setFPS(framesper);
	console.log(framesper);
	stage.update();
}
*/

// Score Calculations
function updateCorrect(correctDelta) {
	totalCorrect = Math.max(0, totalCorrect + correctDelta);
	//exportRoot.answersCorrectTxt.text = "Correct: " + totalCorrect + " of 5";
	$("#answersCorrectText").html("Correct: " + totalCorrect + " of 5");
}

function beginQuiz() {	
	parent.$("#jquery_jplayer_1").jPlayer("stop");
	playSound("uniroyal_loop", -1);
	playSound("uniroyal_truck_accellerate");
	//loop.play();
	//accel.play(); 
	countDown = 16000;
	pauseCounter = false;
	
	if(!isiPad && !isAndroid){
		exportRoot.play();
	}	
			
	stage.removeChild(introCover);
	$timer = $('#timerPlacement');
	$timer.show();
	
	$submitButton.show();
	//instantiate a TimelineLite    
	var submitTimeline= new TimelineLite();
	submitTimeline.from($submitButton, 0.5, {scale: 0.7, autoAlpha:0});
		
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
	
	// Set up initial Timer
	timeKeeper = new Date();
	sTime = timeKeeper.getTime();
	counter = window.setInterval(updateTime, 500);
	countDown = 16000;
	pauseCounter = false;
	updateScore(0);
	updateCorrect(0);
	$("#submitBtn").show();
	playSound("uniroyal_truck_accellerate");
	//accel.play();
	if(!isiPad && !isAndroid){
		exportRoot.play();
	}	
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
		$( "#feedbackMessage" ).html(answerMsgs[index - 1] + "<br /><br /><a href='javascript:void(0)' id='nextBtn' class='button clickable' onclick='nextQuestion()'>NEXT</a>");
		$( "#feedbackHeader" ).addClass( "correct" );
		$( "#feedbackHeader" ).removeClass( "incorrect" );
		
		// Speed up Truck by 2 frames
		//updateFPS(2);
		
		// Update odometer
		exportRoot.odometer.gotoAndPlay(answerSteps[index - 1]);
		
		updateScore((Math.floor(seconds * 50)) + (retryToggle ? 100 : 200));	
		updateCorrect(1);
		
		playSound("uniroyal_correct");
		//answeredCorrect.play();
		
		//reset retryToggle
		retryToggle = false;
		countDown = 16000;
	} else {
		//set the popup msg
		$( "#feedbackHeader" ).html("That's incorrect.");
		$( "#feedbackHeader" ).addClass( "incorrect" );
		$( "#feedbackHeader" ).removeClass( "correct" );
		//answeredIncorrect.play();
		playSound("uniroyal_fail");
	
		//give one more try
		if( !retryToggle ) {
			//hold the countDown
			retryToggle = true;
			$( "#feedbackMessage" ).html("Please try again.<br /><br /><a href='javascript:void(0)' id='retryBtn' class='button clickable' onClick='nextQuestion();'>RETRY</a>");
			//go back to the one we had up
			currentQuestion = currentQuestion - 1;
		}
		else {
			//toggle
			$( "#feedbackMessage" ).html(answerMsgs[index - 1] + "<br /><br /><a href='javascript:void(0)' id='nextBtn' class='button clickable' onclick='nextQuestion()'>NEXT</a>");
			retryToggle = false;
			countDown = 16000;
		}
	}
	
	pauseCounter = true;
	$( "#feedback" ).fadeIn();
	
}

// On each submit click 
function submitClick() {
	questions = $('.questions');
	currentQuestionObject = $(questions.get(currentQuestion));
	currentQuestionObject.hide();
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
		default: {
			//console.log("Invalid Question Index!");
			return;
		}		
	}
}

function nextQuestion() {
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
		   default: {
			console.log("Invalid Question Index!");
			return;
		   }  
		}
		
	}
	else {
		$("#feedback").hide();	
		if (currentQuestion >= 5){
			window.clearInterval(counter);
			exportRoot.stop();
			$("#finishScreen").show();
			$("#finishDisplay").show();
			
			if (totalCorrect >= 4){
				parent.courseObj.pageNext();
				parent.courseObj.setNextEnabled(true);
				$( "#finishFeedbackHeader" ).html("Congratulations! You received your Traveler Badge and are ready to move to the next level!<br /><br />");
				$( "#finishFeedbackHeader" ).addClass( "correct" );
				$( "#finishFeedbackHeader" ).removeClass( "incorrect" );
				$( "#finishFeedbackMessage" ).html("You are well on your way to becoming a Uniroyal<span class='shrinkage'><sup>&reg;</sup></span> Tire Expert!<br /><br />Points earned:<br /><span class='correct'>" + score + "</span><br /><img class='badge' src='images/traveler_badge.png' style='width: 320px; margin: 20px 0'/><a href='javascript:void(0)' id='nextBtn' class='button clickable' onClick='parent.courseObj.pageNext(); return false;'>CONTINUE</a>");
				
				playSound("mod1_18_Challenge_Congrats");
				//correctFeedback.play();
				
				var t2 = new TimelineLite();
				t2.from($("#finishScreen"), 0.5, {autoAlpha:0});
				t2.from($( "#finishFeedbackHeader" ), 0.5, {top:100, autoAlpha:0});
				t2.from($( "#finishFeedbackMessage" ), 0.5, {autoAlpha:0});
				t2.from($( "#badge1_glint_" ), 0.5, {scale:.5, autoAlpha:0}, "+=0.5");
				t2.from($( "#nextBtn" ), 0.5, {autoAlpha:0}, "+=.25");
				t2.play();
				
			} else {
				//console.log("no dice");
				$("#finishDisplay").css("height", "260px");
				$( "#finishFeedbackHeader" ).addClass( "incorrect" );
				$( "#finishFeedbackHeader" ).removeClass( "correct" );
				$( "#finishFeedbackHeader" ).html("You’ve still got some work to do!<br /><br />");
				$( "#finishFeedbackMessage" ).html("Hang in there, we’ll help you drive up your score!<br /><br />Points earned:<br /><span class='incorrect'>" + score + "</span><br /><br /><br /><div style='width: 450px; position: absolute; display: inline; top: 232px; left: 50%; margin-left: -225px'><a style='float: left' href='javascript:void(0)' id='nextBtn' class='button clickable' onClick='resetQuiz();'>RETRY</a><a style='float: right' href='javascript:void(0)' id='nextBtn' class='button clickable' onClick='parent.courseObj.gotoPageIndex(1); return false;'>REVIEW COURSE</a></div>");
				//incorrectFeedback.play();
				playSound("mod1_19_Challenge_TryAgain");
			}	
		} else {
			$("#feedback").hide();	
			$($questions.get(currentQuestion)).fadeIn();
			countDown = 16000;
			pauseCounter = false;	
			$("#countDown").show();
			$("#submitBtn").show();
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
