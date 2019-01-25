// Start course
var courseData = {
   	title:"Heavy Truck Tires - Module 3",
   	type:'course',
   	ioMode:'_SCORM1_2',
	logo:{
		path: '_2_skin/images/logo.png',
		width: '254px',
		height: '73px'
	},
	
   	retakeAssessmentIndex: 6,
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
		'_3_course/images/char/dave/dave1.png',
		'_3_course/images/char/dave/dave2.png',
		'_3_course/images/char/dave/dave3.png',
		'_3_course/images/char/dave/dave4.png',
		'_3_course/images/char/dave/dave5.png',
		'_3_course/images/char/dave/dave6.png',
		'_3_course/images/char/dave/dave7.png',
		'_3_course/images/char/dave/dave8.png',
		'_3_course/images/char/jose/jose1.png',
		'_3_course/images/char/jose/jose2.png',
		'_3_course/images/char/jose/jose3.png',
		'_3_course/images/char/pat/pat1.png',
		'_3_course/images/char/pat/pat2.png',
		'_3_course/images/char/pat/pat3.png',
		'_3_course/images/char/tiger/tiger.png',
		'_3_course/images/windowFrame-min.png',
		'_3_course/images/badge1_glint_/badge1_glint_1.png',
		'_3_course/images/badge1_glint_/badge1_glint_2.png',
		'_3_course/images/badge1_glint_/badge1_glint_3.png',
		'_3_course/images/badge1_glint_/badge1_glint_4.png',
		'_3_course/images/badge1_glint_/badge1_glint_5.png',
		'_3_course/images/badge1_glint_/badge1_glint_6.png',
		'_3_course/images/badge1_glint_/badge1_glint_7.png',
		'_3_course/images/badge1_glint_/badge1_glint_8.png',
		'_3_course/images/badge2_glint_/badge2_glint_1.png',
		'_3_course/images/badge2_glint_/badge2_glint_2.png',
		'_3_course/images/badge2_glint_/badge2_glint_3.png',
		'_3_course/images/badge2_glint_/badge2_glint_4.png',
		'_3_course/images/badge2_glint_/badge2_glint_5.png',
		'_3_course/images/badge2_glint_/badge2_glint_6.png',
		'_3_course/images/badge2_glint_/badge2_glint_7.png',
		'_3_course/images/badge2_glint_/badge2_glint_8.png',
		'_3_course/images/badge3_glint_/badge3_glint_1.png',
		'_3_course/images/badge3_glint_/badge3_glint_2.png',
		'_3_course/images/badge3_glint_/badge3_glint_3.png',
		'_3_course/images/badge3_glint_/badge3_glint_4.png',
		'_3_course/images/badge3_glint_/badge3_glint_5.png',
		'_3_course/images/badge3_glint_/badge3_glint_6.png',
		'_3_course/images/badge3_glint_/badge3_glint_7.png',
		'_3_course/images/badge3_glint_/badge3_glint_8.png',
		'_3_course/images/badge3_glint_/badge3_glint_9.png',
		'_3_course/images/badge4_glint_/badge4_glint_1.png',
		'_3_course/images/badge4_glint_/badge4_glint_2.png',
		'_3_course/images/badge4_glint_/badge4_glint_3.png',
		'_3_course/images/badge4_glint_/badge4_glint_4.png',
		'_3_course/images/badge4_glint_/badge4_glint_5.png',
		'_3_course/images/badge4_glint_/badge4_glint_6.png',
		'_3_course/images/badge4_glint_/badge4_glint_7.png',
		'_3_course/images/badge4_glint_/badge4_glint_8.png',
		'_3_course/images/badge4_glint_/badge4_glint_8.png',
		'_3_course/images/tigerWave/tigerWave1.png',
		'_3_course/images/tigerWave/tigerWave2.png',
		'_3_course/images/tigerWaveClone/tigerWaveClone1.png',
		// Title Page
		'_3_course/pages/title/img/brandOverview.png',
		'_3_course/pages/title/img/start_btn.png',
		'_3_course/pages/title/img/UniroyalLogo_800px.png',
		// Title Page
		'_3_course/pages/title/img/brandOverview.png',
		'_3_course/pages/title/img/start_btn.png',
		// Customer Knowledge Game
		'_3_course/pages/customerKnowledge/images/background.png',
		'_3_course/pages/customerKnowledge/images/brushedalu.gif',
		'_3_course/pages/customerKnowledge/images/dave.png',
		'_3_course/pages/customerKnowledge/images/dave_1.png',
		'_3_course/pages/customerKnowledge/images/dave_2.png',
		'_3_course/pages/customerKnowledge/images/dave_3.png',
		'_3_course/pages/customerKnowledge/images/desk.png',
		'_3_course/pages/customerKnowledge/images/jose.png',
		'_3_course/pages/customerKnowledge/images/jose_1.png',
		'_3_course/pages/customerKnowledge/images/jose_2.png',
		'_3_course/pages/customerKnowledge/images/jose_3.png',
		'_3_course/pages/customerKnowledge/images/pat.png',
		'_3_course/pages/customerKnowledge/images/pat_1.png',
		'_3_course/pages/customerKnowledge/images/pat_2.png',
		'_3_course/pages/customerKnowledge/images/pat_3.png',
		'_3_course/pages/customerKnowledge/images/register.png',
		'_3_course/pages/customerKnowledge/images/splash_customers.png',
		'_3_course/pages/customerKnowledge/images/splash_rulesleft.png',
		'_3_course/pages/customerKnowledge/images/splash_rulesright.png',
		'_3_course/pages/customerKnowledge/images/tools-databook.png',
		'_3_course/pages/customerKnowledge/images/tourBadge.png'
		
	],
   	content:[//Start content 
      
      	{
			title: 'Title',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{url: '_3_course/pages/title/index.html' }
		},
		{
			title: 'Introduction',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the truck to begin.',
			data:{	url: '_3_course/pages/introduction/index.html',
					audio: '_3_course/audio/mod3_02_Roadmap.mp3',
					caption:'mod3_02_Roadmap_CC.js' }
		},
		{
			title: 'Module 3 Overview',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{	url: '_3_course/pages/moduleOverview/index.html',
					audio: '_3_course/audio/mod3_03_Objs.mp3',
					caption:'mod3_03_Objs_CC.js' }
		},
		{
			title: 'Customer Needs',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click each of the customers, then click the forward arrow to continue.',
			data:{	url: '_3_course/pages/customers/index.html',
					audio: '_3_course/audio/mod3_04_CustomerNeeds.mp3',
					caption:'mod3_04_customerneeds_CC.js' }
		},
		{
			title: 'Customer Needs - Applications',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Drag and drop the need to each customer. Click the forward arrow to continue.',
			data:{	url: '_3_course/pages/customerNeeds/index.html',
					audio: '_3_course/audio/mod3_05_CustomerNeeds_Interaction.mp3',
					caption:'mod3_05_customerneedsinteractions_CC.js' }
		},
		{
			title: 'Customer Recommendations',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{	url: '_3_course/pages/customerRecommendations/index.html',
					audio: '_3_course/audio/mod3_06_Recommendations.mp3',
					caption:'mod3_06_recommendations_CC.js' }
		},{
			title: 'Scenario - Dave',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Select your answer above.',
			data:{	url: '_3_course/pages/scenarioDave/index.html',
					audio: '_3_course/audio/mod3_07_DaveScenario.mp3',
					caption:'mod3_07_davescenario_CC.js' }
		},
		{
			title: 'Scenario - Pat',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Select your answer above.',
			data:{	url: '_3_course/pages/scenarioPat/index.html',
					audio: '_3_course/audio/mod3_08_PatScenario.mp3',
					caption:'mod3_08_patscenario_CC.js' }
		},
		{
			title: 'Scenario - Jose',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Select your answer above.',
			data:{	url: '_3_course/pages/scenarioJose/index.html',
					audio: '_3_course/audio/mod3_09_JoseScenario.mp3',
					caption:'mod3_09_jose_scenario_CC.js' }
		},
		{
			title: 'Product Knowledge Customer Challenge',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the START button to start.',
			data:{
				url: '_3_course/pages/customerKnowledge/index.html', 
				audio: '_3_course/audio/mod3_10_Challenge.mp3',
				caption:'mod3_10_Challenge_CC.js'}
		},
		{
			title: 'Module Summary',
			type: 'iFramePage',showInToc: false,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the Save & Exit button to close this module.',
			data:{
				url: '_3_course/pages/summary/index.html', 
				audio: '_3_course/audio/mod3_22_Summary.mp3',
				caption:'mod3_22_Summary_CC.js'}
		}
   ]// End content
};
// End course