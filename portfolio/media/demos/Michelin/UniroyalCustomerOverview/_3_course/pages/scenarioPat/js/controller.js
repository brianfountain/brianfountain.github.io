// Set answers 	

// A
var answerKey1 = [{ value: "a1", answer: 1 },{value: "a2", answer: 0 },{ value: "a3", answer: 0 },{ value: "a4", answer: 0 }];

// Set up our fla
var question, currentQuestionObject, questions;

// Selection box clicked
var boxClick = new Howl({ urls: ['../../audio/uniroyal_checkbox.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Answered the question correctly
var answeredCorrect = new Howl({ urls: ['../../audio/uniroyal_correct.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Answered the question incorrectly
var answeredIncorrect = new Howl({ urls: ['../../audio/uniroyal_fail.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Selection box hover
var boxHover = new Howl({ urls: ['../../audio/uniroyal_hover.mp3'], autoplay: false, loop: false, volume: 1.0 });
// Submit button clicked
var submitClicked = new Howl({ urls: ['../../audio/uniroyal_submit_button.mp3'], autoplay: false, loop: false, volume: 1.0 });

var currentQuestion = 0;

var retryToggle = false;

function init(){
	// Set up sound effect for selection button rollovers	
	$("label").mouseover(function() { 
		boxHover.play();
	});	
	
	$("label").mousedown(function() { 
		boxClick.play();
	});	
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
		// Show correct feedback dialog
		$("#feedbackImages").attr("src","img/fbCorrect.png");
		// Change Pats's mood
		//$("#pat").attr("src","img/pat1.png");
		// Disable input choices
		$( ".options> div > input" ).prop( "disabled", true );
		$( ".options> div > input" ).css("pointer", "none");
		// Lock down input stylization so hover's aren't taken
		$("label.css-label").addClass("finalHover");
		// Toggle back retryToggle var
		retryToggle = false;
		// Hide retry button from feedback dialog
		$("#retryBtn").hide();
		// Show correct answer
		$(".activeState").fadeIn();
		// Change text
		parent.skinLayout.setClickNextTextExternally("Click the forward arrow to continue.");
		// No need for the submit button anymore
		$("#submitBtn").hide();
		// Play correct sound 
		answeredCorrect.play();
	
	} else {
		
		// Give one more try
		if( !retryToggle ) {
			// Toggle retryToggle to true
			retryToggle = true;
			// Show first try (again) feedback dialog
			$("#feedbackImages").attr("src","img/fbTryAgain.png");
			// Show retry button in feedback dialog
			$("#retryBtn").show();
		}
		else {
			// Disable input choices
			$( ".options> div > input" ).prop( "disabled", true );
			// Lock down input stylization so hover's aren't taken
			$("label.css-label").addClass("finalHover");
			// Show incorrect feedback dialog
			$("#feedbackImages").attr("src","img/fbIncorrect.png");
			// Hide retry button from feedback dialog
			$("#retryBtn").hide();
			// Toggle back retryToggle var
			retryToggle = false;
			// Show correct answer
			$(".activeState").fadeIn();
			// Show the user instructions and change text
			parent.skinLayout.setClickNextTextExternally("Click the forward arrow to continue.");
			// No need for the submit button anymore
			$("#submitBtn").hide();
			// play incorrect sound
			answeredIncorrect.play();
		}
	}
	// Bring in feedback every time.
	$( "#feedback" ).fadeIn();
}

// On each submit click 
function submitClick() {
	questions = $('.questions');
	processQuestion(currentQuestion, answerKey1);	
	parent.$("#jquery_jplayer_1").jPlayer("stop");	
	submitClicked.play();	
}

