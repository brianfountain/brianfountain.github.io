// Start course
var courseData = {
   	title:"Heavy Truck Tires - Module 2",
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
		'_3_course/images/char/tiger/tigerSmall0.png',
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
		// Rack 'Em Up Game
		'_3_course/pages/rackemup/images/activeState.png',
		'_3_course/pages/rackemup/images/adventurerBadge.png',
		'_3_course/pages/rackemup/images/brushedalu.gif',
		'_3_course/pages/rackemup/images/hd60.png',
		'_3_course/pages/rackemup/images/hs50.png',
		'_3_course/pages/rackemup/images/ls24.png',
		'_3_course/pages/rackemup/images/lt40.png',
		'_3_course/pages/rackemup/images/mainbackground.png',
		'_3_course/pages/rackemup/images/rackback.png',
		'_3_course/pages/rackemup/images/rackfront.png',
		'_3_course/pages/rackemup/images/rd30.png',
		'_3_course/pages/rackemup/images/rs20.png',
		'_3_course/pages/rackemup/images/splash_rulesleft.png',
		'_3_course/pages/rackemup/images/splash_rulesright.png',
		'_3_course/pages/rackemup/images/splash_tire.png',
		'_3_course/pages/rackemup/images/tiretoss.png',
		'_3_course/pages/rackemup/images/tools-databook.png',
		'_3_course/pages/rackemup/images/truck_1.png',
		'_3_course/pages/rackemup/images/truck_2.png'
	],
   	content:[// Start content 
      
      	{
			title: 'Title',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{url: '_3_course/pages/title/index.html' }
		},
		{
			title: 'Introduction',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the truck to begin.',
			data:{	url: '_3_course/pages/introduction/index.html',
					audio: '_3_course/audio/mod2_02_Roadmap.mp3',
					caption:'mod2_02_Roadmap_CC.js' }
		},
		{
			title: 'Module 2 Overview',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{	url: '_3_course/pages/moduleOverview/index.html',
					audio: '_3_course/audio/mod2_03_Objs.mp3',
					caption:'mod2_03_Objs_CC.js' }
		},
		{
			title: 'Market Applications',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Drag and drop the definitions to the correct labels. Click forward button to continue.',
			data:{	url: '_3_course/pages/marketApplications/index.html',
					audio: '_3_course/audio/mod2_04_Apps.mp3',
					caption:'mod2_04_Apps_CC.js' }
		},
		{
			title: 'Tire Fitment',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{	url: '_3_course/pages/tireFitment/index.html',
					audio: '_3_course/audio/mod2_05_TireFitment_combined.mp3',
					caption:'mod2_05_TireFitment_CC.js' }
		},
		{
			title: 'Tire Construction',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Select each of the tire construction features. Then click the forward arrow to continue.',
			data:{	url: '_3_course/pages/tireConstruction/index.html',
					audio: '_3_course/audio/mod2_06_DuraShield.mp3',
					caption:'mod2_06_DuraShield_CC.js' }
		},{
			title: 'The Uniroyal<span class="shrinkage"><sup>&reg;</sup></span> Products',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{	url: '_3_course/pages/theUniroyalProducts/index.html',
					audio: '_3_course/audio/mod2_07_Products.mp3',
					caption:'mod2_07_Products_CC.js' }
		},{
			title: 'The Uniroyal<span class="shrinkage"><sup>&reg;</sup></span> Products, continued',
			type: 'iFramePage',showInToc: false,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Select each tire to learn more. When finished, click the forward arrow to continue.',
			data:{	url: '_3_course/pages/theUniroyalProducts2/index.html',
					audio: '_3_course/audio/mod2_08_Products.mp3',
					caption:'mod2_08_Products_CC.js' }
		},
		{
			title: 'The Uniroyal<span class="shrinkage"><sup>&reg;</sup></span> Commercial Truck Tire Data Book',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the icon to view the Data Book. Click the forward arrow to continue.',
			data:{	url: '_3_course/pages/dataBook/index.html',
					audio: '_3_course/audio/mod2_09_DataBook.mp3',
					caption:'mod2_09_DataBook_CC.js' }
		},
		{
			title: 'Rack `em Up Challenge!',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the BEGIN button to start.',
			data:{
				url: '_3_course/pages/rackemup/index.html', 
				audio: '_3_course/audio/mod2_10_Challenge.mp3',
				caption:'mod2_10_Challenge_CC.js'}
		},{
			title: 'Module Summary',
			type: 'iFramePage',showInToc: false,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the Save & Exit button to quit this module.',
			data:{
				url: '_3_course/pages/summary/index.html', 
				audio: '_3_course/audio/mod2_22_Summary.mp3',
				caption:'mod2_22_Summary_CC.js'}
		}
   ]// End content
};
// End course