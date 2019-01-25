// Set answers
// B
var answerKey1 = [{ value: "q1_s1", answer: 0 }, {value: "q1_s2", answer: 1 }, { value: "q1_s3", answer: 0 }, { value: "q1_s4", answer: 0 }];
// D
var answerKey2 = [{ value: "q2_s1", answer: 0 }, {value: "q2_s2", answer: 0 }, { value: "q2_s3", answer: 0 }, { value: "q2_s4", answer: 1 }];
// C
var answerKey3 = [{ value: "q3_s1", answer: 0 }, {value: "q3_s2", answer: 0 }, { value: "q3_s3", answer: 1 }, { value: "q3_s4", answer: 0 }];
// B,C
var answerKey4 = [{ value: "q4_s1", answer: 0 }, {value: "q4_s2", answer: 1 }, { value: "q4_s3", answer: 1 }, { value: "q4_s4", answer: 0 }];

var answerMsgs = [
	"The mileage guarantee promises 20% more mileage.",
	"Improved fuel efficiency comes from 5% better rolling resistance than the MICHELIN<sup>&reg;</sup> XZA3<sup>&reg;</sup>+ EVERTREAD with the same incredibly long mileage and even wear.",
	"The MICHELIN<sup>&reg;</sup> X<sup>&reg;</sup> LINE<sup>&trade;</sup> ENERGY Z can be retreaded three times under the limited warranty.",
	"Even wear of the tire is supported by the miniature sipes and the decoupling groove."
];
var p = window.parent;
var answerSteps = ["step1", "step2", "step3", "step4"];

// Set up our questions
var stage, answer, question, totalQuestions, currentQuestionObject, questions;

// Set the initial score
var totalCorrect = 0;
var currentQuestion = 0;

var tryAgainToggle = true;
var retryToggle = false;

// For use within normal web clients 
var isiPad = navigator.userAgent.match(/iPad/i) != null;

// For use within iPad developer UIWebView
// Thanks to Andrew Hedges!
var ua = navigator.userAgent.toLowerCase();
var isiPad = /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

function beginQuiz() {	
	// Hide the next button to avoid overlapping at start
	$('#nextBtn').hide();
	totalQuestions = $('.questions').size();
	$questions = $('.questions');
	currentQuestionObject = $($questions.get(currentQuestion));
	currentQuestionObject.addClass( "slide-in" );
	
	// Apply tags to progress meter
	$(".questions").each(function (){
		var template = "<p class='inactive'><span></span></p>";
		$(".progress").append(template);
	});
	checkIndex(0);
}

function checkIndex(questionObject){
	var buildQuestion = new TimelineMax();
    var currentQuestion = $('.mcQuestion');
	var currentInstruction = $('.mcInstruction');
	var choice = $('.choice');
    buildQuestion
		.set(currentQuestion, {className: '+=fadeIn'}, 0.5)
		.set(currentInstruction, {className: '+=fadeIn'}, 0.5)
		.staggerTo(choice, 0.4, {opacity:1.00, ease:Power4.easeOut, delay: 0.5}, .3);
		
	if ($(".active") != null){
         $(".progress > p").removeClass("active").addClass("inactive");
         $(".progress > p").eq(questionObject).removeClass("inactive").addClass("active");
    } 
	$( ".mcQuestionNumber" ).html("Question " + (questionObject + 1) + " of " + $('.questions').size());
	
	$("#submitBtn, #nextBtn").css({ "top": currentQuestionObject.height() + 165} );
	$("#feedbackMask").css({ "height": currentQuestionObject.outerHeight() });
};

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
		if( typeof select != 'undefined' ) {
			if( select !== question.answer )
				bAllCorrect = false;
			} else {
				bAllPlaced = false;
			}
		});
	
	if ( bAllPlaced && bAllCorrect ) {
		// Quiz question answered correctly
		$( "#feedbackHeader" ).html("<h1>Correct!</h1>");
		$( "#feedbackMessage" ).html(answerMsgs[index - 1]);
		$( "#nextBtn > .quizButtonText" ).html("NEXT");
		retryToggle = false;
	} else {
		$( "#feedbackHeader" ).html("<h1>Not quite.</h1>");
		$("#feedbackHeader").addClass("incorrect").removeClass("correct");
		if (tryAgainToggle) {
			// Quiz try again - first choice incorrect - try again
			if( !retryToggle ) {
				retryToggle = true;
				$( "#feedbackMessage" ).html("<p>Please try again.</p>");
				currentQuestion = currentQuestion - 1;
				$( "#nextBtn > .quizButtonText" ).html("RETRY");
			}
			else {
				// Quiz try again - second choice incorrect
				$( "#feedbackMessage" ).html(answerMsgs[index - 1]);
				retryToggle = false;
				$( "#nextBtn > .quizButtonText" ).html("NEXT");
			}
		} else {
			// No Quiz try again - wrong choice selected
			$( "#feedbackMessage" ).html(answerMsgs[index - 1]);
			$( "#nextBtn > .quizButtonText" ).html("NEXT");
		}
	}
}

// On each submit click 
function submitClick() {
	$("#feedbackMask").show();
	$("#feedback").show().addClass("slide-in").removeClass("slide-out");
	questions = $('.questions');
	currentQuestionObject = $(questions.get(currentQuestion));
	currentQuestion = currentQuestion + 1;
	$("#submitBtn").hide().removeClass("fadeIn");
	$("#nextBtn").show().addClass("fadeIn");
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
		default: {
			console.log("Invalid Question Index!");
			return;
		}		
	}
}

function nextQuestion() {
	$("#feedbackMask").hide();
	$("#feedback").addClass("slide-out");
	$questions = $('.questions');
	
	if( retryToggle ) {
		$("#nextBtn").hide().removeClass("fadeIn");
		$("#submitBtn").show().addClass("fadeIn");
		// Close the feedback and allow second chance
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
		   default: { return;
		   }  
		}
	} else {
		// If on last question reached, handle feedback screen
		if (currentQuestion >= 4){
			// Show and hide everything
			$("#finishDisplay").show();
			$(".headline").hide(); 
			$("#finishFeedbackImage").addClass( "slide-in" ).removeClass( "slide-out" );
			$(currentQuestionObject).addClass( "slide-out" ).removeClass( "slide-in" );
			$("#finishFeedbackHeader, #finishFeedbackMessage").addClass( "fadeIn" );
			$("#nextBtn").hide().removeClass("fadeIn");
			$("body.quiz").addClass( "tintIn" );
			$('.progress, .mcQuestionNumber').addClass( "fadeOut" ).removeClass( "fadeIn" );
			
			// Set HTML
			$( "#finishFeedbackHeader" ).html("Congratulations!");
			$( "#finishFeedbackMessage" ).html("<span class='statusText'>You have completed this course.</span><div class='buttonLine'><div class='blLeft button slide-in' onclick='p.addTransitionPage(0);'><span class='buttonText'>RETAKE COURSE</span><div class='roll-state'></div></div><div class='button slide-in blRight' onclick='parent.courseObj.courseExit(); return false;'><span class='buttonText'>SAVE &amp; EXIT</span><div class='roll-state'></div></div></div>");
			$( "#finishFeedbackImage" ).html("<img src='../../_media/images/bib_outro.png' />");
			
			if(isiPad){ $(currentQuestionObject).hide(); }
			
			// Send completed to LMS
			parent.courseObj.io.setStatus('completed');
		} else {
			// Advance to next question if not done
			previousQuestionObject = $($questions.get(currentQuestion - 1));
			currentQuestionObject = $($questions.get(currentQuestion));
			checkIndex(currentQuestion);
			$(currentQuestionObject).addClass( "slide-in" ).removeClass( "slide-out" );
			$(previousQuestionObject).addClass( "slide-out" ).removeClass( "slide-in" );
			if(isiPad) { $(previousQuestionObject).hide(); }
			$("#nextBtn").hide().removeClass("fadeIn");
			$("#submitBtn").show().addClass("fadeIn");
		}
	}
}

window.onresize = function(){
 	$questions = $('.questions');
	currentQuestionObject = $($questions.get(currentQuestion));
	$("#submitBtn, #nextBtn").css({ "top": currentQuestionObject.height() + 165} );
	$("#feedbackMask").css({ "height": currentQuestionObject.outerHeight()});
};

