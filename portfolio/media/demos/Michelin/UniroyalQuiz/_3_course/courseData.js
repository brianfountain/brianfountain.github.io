// Start course
/* ANSWER KEY
answer key:
1. B
2. A, B, C
3. B
4. A, C
5. A
6. C
7. A
8. C
9. B
10. C
11. A
12. B
13. A, B, C
*/
var courseData = {
   	title:"Heavy Truck Tires - Final Quiz",
   	type:'course',
   	ioMode:'_SCORM1_2',
	logo:{
		path: '_2_skin/images/logo.png',
		width: '254px',
		height: '73px'
	},
	
   	retakeAssessmentIndex: 2,
   	vars:
   	[{
        	name:'courseVar',
        	value:'Hello Course Variable'  	
    }],
   
   additionalPreloadImages: [
		// Player
		'_1_player/libs/jQuery.jPlayer.2.2.0/skins/michelin/images/audioPlaybar.png',
		'_1_player/libs/jQuery.jPlayer.2.2.0/skins/michelin/images/jplayerMichelin.png',
		'_1_player/libs/jQuery.jPlayer.2.2.0/skins/michelin/images/jplayerMichelinSeek.gif',
		// Skin
		'_2_skin/images/logo.png',
		'_2_skin/images/back.png',
		'_2_skin/images/checkbox_correct.png',
		'_2_skin/images/checkbox_off.png',
		'_2_skin/images/checkbox_on.png',
		'_2_skin/images/complete_checkmark.png',
		'_2_skin/images/forward.png',
		'_2_skin/images/loadingLogo.png',
		'_2_skin/images/loadingBackground.gif',
		
		// Course 
		'_3_course/images/bg/bg-min.png',
		'_3_course/images/bg/bg-center.png',
		'_3_course/images/bg/tireStackLeft.png',
		'_3_course/images/bg/tireStackRight.png',
		'_3_course/images/char/tiger/tiger.png',
		'_3_course/images/char/tiger/tiger1.png',
		'_3_course/images/char/tiger/tiger2.png',
		'_3_course/images/char/tiger/tiger3.png',
		'_3_course/images/char/tiger/tigerBlink1.png',
		'_3_course/images/char/tiger/tigerBlink2.png',
		'_3_course/images/char/tiger/tigerBlink3.png',
		
		// Title Page
		'_3_course/pages/title/img/brandOverview.png',
		'_3_course/pages/title/img/start_btn.png',
		'_3_course/pages/title/img/title_hill.png',
		'_3_course/pages/title/img/UniroyalLogo_800px.png'
	],
   	content:[//Start content 
      
      	{
			title: 'Title',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true,
			data:{url: '_3_course/pages/title/index.html' }
		},
		{
			title: 'Introduction',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to begin the quiz.',
			data:{
				url: '_3_course/pages/introduction/index.html', 
				audio: '_3_course/audio/mod4_02_Roadmap.mp3',
				caption:'mod4_02_roadmap_CC.js'
			}
		},{ 
		 	//title: localize('title', 'p001'),
			title: 'Final Quiz',
			type: 'iFramePage',
			showInToc: true,
			hidePageNumber: false,
			showTitle: false,
			backEnabled: true,
			nextEnabled: true,
			clickNextTexto:'Click the Begin button to start the quiz.',
			data:{
				url: '_3_course/pages/moduleOverview/index.html',
				audio: '_3_course/audio/mod4_03_Intro.mp3',
				caption:'mod4_03_intro_CC.js'
			}
		 },{
				 title:'Question 1',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 nextEnabled: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 1'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">In what price tier does the Uniroyal<span class="shrinkage"><sup><small><small>&reg;</small></small></sup></span> brand fall?</p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Budget'
						  }
					   },
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Intermediate'
						  }
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Premium'
						  }
						}
					]
				 }
			},{
				 title:'Question 2',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 2'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
						htmlText:'<p class="questionText">Integrating Uniroyal<sup><small><small>&reg;</small></small></sup> into the Michelin Group’s total offering is of what value to you? </p><p class="questionInstructionText">Select all that apply.</p>'
					},
					isScored: true,
					multiSelect:true,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Reduces your need to rely on multiple vendors'
						  }
					   },
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Streamlines your business processes'
						  }
					   },{
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Streamlines your systems interfaces'
						  }
					  },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Adds customer base who only values tires as an investment'
						  }
					  }
					]
				 }
			},{
				 title:'Question 3',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 3'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">Uniroyal<sup><small><small>&reg;</small></small></sup> customers generally track mileage and cost per mile.</p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'True'
						  }
					   },
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'False'
						  }
					   }
					]
				 }
			},{
				 title:'Question 4',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 4'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">Uniroyal<sup><small><small>&reg;</small></small></sup> commercial truck tire customers have which of the following characteristics?</p><p class="questionInstructionText">Select all that apply.</p>'
					},
					isScored: true,
					multiSelect:true,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Own used vehicles'
						  }
					   },
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Lease new vehicles'
						  }
					   },{
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Have limited knowledge of tire features and benefits'
						  }
					  },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Always retread their tires'
						  }
					  }
					]
				 }
			},{
				 title:'Question 5',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 5'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">Uniroyal<sup><small><small>&reg;</small></small></sup> customers see tire purchases in terms of price, not investment.</p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'True'
						  }
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'False'
						  }
					   }
					]
				 }
			},{
				 title:'Question 6',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 6'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">The _________ contains all the Uniroyal<sup><small><small>&reg;</small></small></sup> commercial truck tire product information along with available warranty information. </p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Digital Sales Tool'
						  }
					   },
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Uniroyal<sup><small><small>&reg;</small></small></sup> Tire Selector'
						  }
					   },{
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Uniroyal<span class="shrinkage"><sup><small><small>&reg;</small></small></sup></span> Commercial Truck Tire Data Book'
						  }
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Uniroyal<span class="shrinkage"><sup><small><small>&reg;</small></small></sup></span> Warranty Terms'
						  }
						}
					]
				 }
			},{
				 title:'Question 7',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 7'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">_______ tires are largely responsible for the handling of the truck.</p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,

					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Steer'
						  }
					   },
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Drive'
						  }
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Trailer'
						  }
					  }
					]
				 }
			},{
				 title:'Question 8',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 8'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">_______ tires withstand strong lateral and braking forces regardless of load.</p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						   isCorrect:false,
						   choiceText:{
							 htmlText:'Steer'
						  }
					  },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Drive'
						  }
					   },{
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Trailer'
						}
					   }
					]
				 }
			},{
				 title:'Question 9',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 9'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">_________ tires maximize traction on the driving surface. </p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Steer'
						  }
					   },
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Drive'
						  }
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Trailer'
						}
					   }
					]
				 }
			},{
				 title:'Question 10',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 10'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">The ________ reduces stress at the belt edges and promotes summit endurance.</p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Sacrificial shoulder rib'
						  }
					   },
					   {
						  isCorrect:false,
						  choiceText:{
							 htmlText:'DuraShield<sup><small><small>&reg;</small></small></sup>Heavy-Duty construction'
						  }
					   },{
						  isCorrect:true,
						  choiceText:{
							 htmlText:'Pyramidal steel belt construction'
						  }
					  },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'Heavy gauge inner liner '
						  }
					  }
					]
				 }
			},{
				 title:'Question 11',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 11'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">A customer with a regional truck comes into the branch looking for a tire with a scrub fighting shoulder. What tire would you recommend?</p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						 isCorrect:true,
						  choiceText:{
							 htmlText:'RS20<sup><small><small>&trade;</small></small></sup>'
						}
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'LT40<sup><small><small>&trade;</small></small></sup>'
						  }
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'RS30<sup><small><small>&trade;</small></small></sup>'
							}
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'HS50<sup><small><small>&trade;</small></small></sup>'
							}
					   }
					]
				 }
			},{
				  title:'Question 12',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 12'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">A customer needs an on/off road drive tire for his dump truck.</p><p class="questionInstructionText">Select the correct option.</p>'
					},
					isScored: true,
					multiSelect:false,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						 isCorrect:false,
						  choiceText:{
							 htmlText:'HS20<sup><small><small>&trade;</small></small></sup>'
						}
					   },{
						  isCorrect:true,
						  choiceText:{
							 htmlText:'HD60<sup><small><small>&trade;</small></small></sup>'
						  }
					   },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'RD30<sup><small><small>&trade;</small></small></sup>'
						}
					   },{
						   isCorrect:false,
						   choiceText:{
							 htmlText:'HS50<sup><small><small>&trade;</small></small></sup>'
						  }
					  }
					]
				 }
			},{
				 title:'Question 13',
				 type:'multiSelect',
				 hidePageNumber: true,
				 showInToc: false,
				 data:{
					headerText: {
						htmlText:'Final Quiz'
					},
					titleText: {
						htmlText:'QUESTION 13'
					},
					/*imgPath: {
						url: '_3_course/images/activityImages/image1.jpg'
					},*/
					questionText:{
					   htmlText:'<p class="questionText">A long haul truck pulls up to the center. Which Uniroyal<sup>&reg;</sup> tires would you recommend for this vehicle?</p><p class="questionInstructionText">Select all that apply.</p>'
					},
					isScored: true,
					multiSelect:true,
					showFeedback:false,
					correctFeedback:'<p><b>Correct!</b></p>',
					incorrectFeedback:'<p><b>Incorrect.</b> The correct answer is shown.</p>',
					choices:[
					   {
						  isCorrect:true,
						  choiceText:{
							 htmlText:'LS24<sup><small><small>&trade;</small></small></sup>'
						  }
					   },{
						  isCorrect:true,
						  choiceText:{
							 htmlText:'LT40<sup><small><small>&trade;</small></small></sup>'
						  }
					   },{
						  isCorrect:true,
						  choiceText:{
							 htmlText:'RD30<sup><small><small>&trade;</small></small></sup>'
						  }
					  },{
						  isCorrect:false,
						  choiceText:{
							 htmlText:'HS50<sup><small><small>&trade;</small></small></sup>'
						  }
					  }
					]
				 }
			},{
				 title:'Course Results',
				 type:'assessmentCompletion',
				 data:{
					scoredCourse:true,
					minimumPassingScore:80,
					passedText:{
					   htmlText:'Congratulations! You passed the quiz.'
					},
					failedText:{
					   htmlText:'SORRY, YOU DID NOT PASS.'
					},
					completedText:{
					   htmlText:'YOU PASSED THE QUIZ!'
					},
					clickNext:{
					   htmlText:'Click the forward arrow to continue.'
					},
					chooseOption:{
					   htmlText:'Please retry quiz:'
					},
					reviewCourse:{
					   htmlText:'REVIEW COURSE'
					},
					retakeTest:{
					   htmlText:'RETAKE QUIZ'
					},
					minPassScore:{
					   htmlText:'Minimum passing score: '
					},
					yourScore:{
					   htmlText:'Your score: '
					}
				 }
      },{
			title: 'Course Results',
			type: 'iFramePage',
			showInToc: false,
			hidePageNumber: false,
			showTitle: false,
			backEnabled: true,
			nextEnabled: false,
			clickNextTexto:'Click Save & Exit to quit. You can then print your certificate.',
			data:{
				url: '_3_course/pages/summary/index.html',
				audio: '_3_course/audio/mod4_18_Congrats.mp3',
				caption: 'mod4_18_congrats_CC.js'
			}
	  },{
			title: 'Course Complete',
			type: 'assessmentCompletion',
			data: {
				 scoredCourse: false,
				minimumPassingScore: 80,
				passedText: {
					htmlText: ''
				},
				failedText: {
					htmlText: 'You did not receive a passing score.'	
				},
				completedText: {
					htmlText: ''
				}
			}
		}
   ]// End content
};
// End course