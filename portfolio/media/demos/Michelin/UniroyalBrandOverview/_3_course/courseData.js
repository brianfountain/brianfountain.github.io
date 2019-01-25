// Start course
var courseData = {
   	title:"Heavy Truck Tires - Module 1",
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
		//---------------------------------------------10
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
		//---------------------------------------------20
		'_3_course/images/char/dave/dave5.png',
		'_3_course/images/char/dave/dave6.png',
		'_3_course/images/char/dave/dave7.png',
		'_3_course/images/char/dave/dave8.png',
		/*'_3_course/images/char/jose/jose01.png',
		//---------------------------------------------30
		'_3_course/images/char/jose/jose02.png',
		'_3_course/images/char/jose/jose03.png',
		'_3_course/images/char/jose/joseBlink1.png',
		'_3_course/images/char/jose/joseBlink2.png',
		'_3_course/images/char/jose/joseBlink3.png',
		'_3_course/images/char/pat/pat01.png',
		'_3_course/images/char/pat/pat02.png',
		'_3_course/images/char/pat/pat03.png',
		'_3_course/images/char/pat/pat04.png',
		'_3_course/images/char/pat/pat05.png',
		//---------------------------------------------40
		'_3_course/images/char/pat/pat06.png',
		'_3_course/images/char/pat/pat07.png',
		'_3_course/images/char/pat/pat08.png',
		'_3_course/images/char/pat/patBlink.gif',
		'_3_course/images/char/pat/patBlink1.png',
		'_3_course/images/char/pat/patBlink2.png',
		'_3_course/images/char/pat/patBlink3.png',*/
		'_3_course/images/char/tiger/tiger.png',
		/*'_3_course/images/char/tiger/tiger1.png',
		'_3_course/images/char/tiger/tiger2.png',
		//---------------------------------------------50
		'_3_course/images/char/tiger/tiger3.png',
		'_3_course/images/char/tiger/tigerBlink1.png',
		'_3_course/images/char/tiger/tigerBlink2.png',
		'_3_course/images/char/tiger/tigerBlink3.png',*/
		'_3_course/images/windowFrame-min.png',
		'_3_course/images/badge1_glint_/badge1_glint_1.png',
		'_3_course/images/badge1_glint_/badge1_glint_2.png',
		'_3_course/images/badge1_glint_/badge1_glint_3.png',
		'_3_course/images/badge1_glint_/badge1_glint_4.png',
		'_3_course/images/badge1_glint_/badge1_glint_5.png',
		//---------------------------------------------60
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
		//---------------------------------------------70
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
		//---------------------------------------------80
		'_3_course/images/badge4_glint_/badge4_glint_1.png',
		'_3_course/images/badge4_glint_/badge4_glint_2.png',
		'_3_course/images/badge4_glint_/badge4_glint_3.png',
		'_3_course/images/badge4_glint_/badge4_glint_4.png',
		'_3_course/images/badge4_glint_/badge4_glint_5.png',
		'_3_course/images/badge4_glint_/badge4_glint_6.png',
		'_3_course/images/badge4_glint_/badge4_glint_7.png',
		'_3_course/images/badge4_glint_/badge4_glint_8.png',
		'_3_course/images/tigerWave/tigerWave1.png',
		'_3_course/images/tigerWave/tigerWave2.png',
		//---------------------------------------------90
		'_3_course/images/tigerWaveClone/tigerWaveClone1.png',
		// Title Page
		'_3_course/pages/title/img/brandOverview.png',
		'_3_course/pages/title/img/start_btn.png',
		/* '_3_course/pages/title/img/title_hill.png', */
		'_3_course/pages/title/img/UniroyalLogo_800px.png',
		//Introduction Page
		'_3_course/pages/introduction/img/screen1/element1.png',
		'_3_course/pages/introduction/img/screen1/element2.png',
		'_3_course/pages/introduction/img/screen1/element3.png',
		'_3_course/pages/introduction/img/screen1/headline.png',
		'_3_course/pages/introduction/img/screen1/hill.png',
			//---------------------------------------------100
		'_3_course/pages/introduction/img/screen1/logo.png',
		'_3_course/pages/introduction/img/screen1/window_white.png',
		'_3_course/pages/introduction/img/screen1/window-screen1.png',
		'_3_course/pages/introduction/img/screen2/hill.png',
		'_3_course/pages/introduction/img/screen2/Window_Module1_01_bullet1.png',
		'_3_course/pages/introduction/img/screen2/Window_Module1_01_bullet2.png',
		'_3_course/pages/introduction/img/screen2/Window_Module1_01_bullet3.png',
		'_3_course/pages/introduction/img/screen2/Window_Module1_01_bullet4.png',
		'_3_course/pages/introduction/img/screen2/Window_Module1_01_titleSign.png',
		'_3_course/pages/introduction/img/screen3/cloud.png',
			//---------------------------------------------110
		'_3_course/pages/introduction/img/screen3/roadmap-min.png',
		'_3_course/pages/introduction/img/screen3/truck_v2.png',
		'_3_course/pages/introduction/img/screen3/truck_v2.png',
		// Module 1 Overview
		'_3_course/pages/moduleOverview/img/screen/hill.png',
		'_3_course/pages/moduleOverview/img/screen/Window_Module1_03_b1.png',
		'_3_course/pages/moduleOverview/img/screen/Window_Module1_03_b2.png',
		'_3_course/pages/moduleOverview/img/screen/Window_Module1_03_b3.png',
		'_3_course/pages/moduleOverview/img/screen/Window_Module1_03_t1.png',
		'_3_course/pages/moduleOverview/img/screen/Window_Module1_03_titleSign.png',
		// Uniroyal Approach
		'_3_course/pages/uniroyalApproach/img/screen/b1.png',
			//---------------------------------------------120
		'_3_course/pages/uniroyalApproach/img/screen/b2.png',
		'_3_course/pages/uniroyalApproach/img/screen/b3.png',
		'_3_course/pages/uniroyalApproach/img/screen/b4.png',
		'_3_course/pages/uniroyalApproach/img/screen/affordability.png',
		'_3_course/pages/uniroyalApproach/img/screen/chartLine.png',
		'_3_course/pages/uniroyalApproach/img/screen/dependability.png',
		'_3_course/pages/uniroyalApproach/img/screen/reliability.png',
		'_3_course/pages/uniroyalApproach/img/screen/titleSign.png',
		'_3_course/pages/uniroyalApproach/img/screen/uniroyalLogo.png',
		'_3_course/pages/uniroyalApproach/img/screen/chart/b-bfgoodrich.png',
			//---------------------------------------------130
		'_3_course/pages/uniroyalApproach/img/screen/chart/b-complete.png',
		'_3_course/pages/uniroyalApproach/img/screen/chart/b-michelin.png',
		'_3_course/pages/uniroyalApproach/img/screen/chart/b-uniroyal.png',
		'_3_course/pages/uniroyalApproach/img/screen/chart/chart-bfgoodrich.png',
		'_3_course/pages/uniroyalApproach/img/screen/chart/chart-michelin.png',
		'_3_course/pages/uniroyalApproach/img/screen/chart/chart-road.png',
		'_3_course/pages/uniroyalApproach/img/screen/chart/chart-uniroyal.png',
		// Our Target End User
		'_3_course/pages/ourTargetEndUser/img/screen/b0.png',
		'_3_course/pages/ourTargetEndUser/img/screen/b1.png',
		'_3_course/pages/ourTargetEndUser/img/screen/b2.png',
			//---------------------------------------------140
		'_3_course/pages/ourTargetEndUser/img/screen/b3.png',
		'_3_course/pages/ourTargetEndUser/img/screen/b4.png',
		'_3_course/pages/ourTargetEndUser/img/screen/b5.png',
		'_3_course/pages/ourTargetEndUser/img/screen/b6.png',
		'_3_course/pages/ourTargetEndUser/img/screen/b7.png',
		'_3_course/pages/ourTargetEndUser/img/screen/hill.png',
		'_3_course/pages/ourTargetEndUser/img/screen/Window_Module1_01_titleSign.png',
		//Uniroyal Commercial Truck Tires
		'_3_course/pages/commercialTruckTires/img/tires/tire1-min.png',
		'_3_course/pages/commercialTruckTires/img/tires/tire2-min.png',
		'_3_course/pages/commercialTruckTires/img/tires/tire3-min.png',
			//---------------------------------------------150
		'_3_course/pages/commercialTruckTires/img/tires/tire4-min.png',
		'_3_course/pages/commercialTruckTires/img/tires/tire5-min.png',
		'_3_course/pages/commercialTruckTires/img/tires/tire6-min.png',
		'_3_course/pages/commercialTruckTires/img/screen/tools/build1.png',
		'_3_course/pages/commercialTruckTires/img/screen/tools/build2.png',
		'_3_course/pages/commercialTruckTires/img/screen/tools/build3.png',
		'_3_course/pages/commercialTruckTires/img/screen/tools/build4.png',
		'_3_course/pages/commercialTruckTires/img/screen/tools/sign.png',
		'_3_course/pages/commercialTruckTires/img/screen/tools/tools-databook.png',
		'_3_course/pages/commercialTruckTires/img/screen/tools/linkPending.png',
			//---------------------------------------------160
		'_3_course/pages/commercialTruckTires/img/screen/tools/tools-dst.png',
		'_3_course/pages/commercialTruckTires/img/screen/tools/tools-website.png',
		'_3_course/pages/commercialTruckTires/img/screen/build1-min.png',
		'_3_course/pages/commercialTruckTires/img/screen/build2-min.png',
		'_3_course/pages/commercialTruckTires/img/screen/build3-min.png',
		'_3_course/pages/commercialTruckTires/img/screen/sign.png',
		'_3_course/pages/commercialTruckTires/img/screen/tires6-min.png',
		//Uniroyal Customers
		'_3_course/pages/customers/img/label/box_dave.png',
		'_3_course/pages/customers/img/label/box_jose.png',
		'_3_course/pages/customers/img/label/box_pat.png',
			//---------------------------------------------170
		'_3_course/pages/customers/img/screen/sign.png',
		//Get Up To Speed
		'_3_course/pages/getUpToSpeed/images/brushedalu.gif',
		'_3_course/pages/getUpToSpeed/images/splash_rulesleft.png',
		'_3_course/pages/getUpToSpeed/images/splash_rulesright.png',
		'_3_course/pages/getUpToSpeed/images/splash_tires.png',
		'_3_course/pages/getUpToSpeed/images/getuptospeed_horizon.jpg',
		'_3_course/pages/getUpToSpeed/images/getuptospeed_largedash.png',
		'_3_course/pages/getUpToSpeed/images/steeringwheel.png',
		'_3_course/pages/getUpToSpeed/images/traveler_badge.png',
		
		//Summary	
		/* '_3_course/pages/summary/img/badge1.png', 
		'_3_course/pages/summary/img/badge1_off.png',	
		'_3_course/pages/summary/img/badge1_on.png',	
		/* '_3_course/pages/summary/img/badge2.png',	 
		'_3_course/pages/summary/img/badge2_off.png',
			//---------------------------------------------180	
		/* '_3_course/pages/summary/img/badge3.png',
		'_3_course/pages/summary/img/badge3_off.png',	
		/* '_3_course/pages/summary/img/badge4.png', 
		'_3_course/pages/summary/img/badge4_off.png',*/		
		'_3_course/pages/summary/img/clipboard.png',	
		'_3_course/pages/summary/img/t1.png',	
		'_3_course/pages/summary/img/t2.png',	
		'_3_course/pages/summary/img/t3.png',
		'_3_course/pages/summary/img/t4.png',	
		'_3_course/pages/summary/img/t5.png',
			//---------------------------------------------190	
		'_3_course/pages/summary/img/t6.png'
	],
   	content:[// Start content 
      
      	{
			title: 'Title',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true,
			data:{url: '_3_course/pages/title/index.html' }
		},
		{
			title: 'Introduction',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the Uniroyal<span class="shrinkage"><sup>&reg;</sup></span> truck to begin.',
			data:{
				url: '_3_course/pages/introduction/index.html', 
				audio: '_3_course/audio/mod1_02_intro_mix.mp3',
				caption:'mod1_03_Introduction_CC.js'
			}
		},{
			title: 'Module 1 Overview',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{
				url: '_3_course/pages/moduleOverview/index.html', 
				audio: '_3_course/audio/mod1_05_Objs.mp3',
				caption:'mod1_05_Objs_CC.js'
			}
		},{
			title: 'The Uniroyal<span class="shrinkage"><sup>&reg;</sup></span> Approach',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click each brand to learn more. Click the forward arrow to continue.',
			data:{
				url: '_3_course/pages/uniroyalApproach/index.html', 
				audio: '_3_course/audio/mod1_06_UniroyalApproach_and_Interaction.mp3',
				caption: 'mod1_06_UniroyalApproach_and_Interaction_CC.js'
			}
		},{
			title: 'Our Target End User',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{
				url: '_3_course/pages/ourTargetEndUser/index.html',
				audio: '_3_course/audio/mod1_08_TargetEndUser.mp3', 
				caption: 'mod1_08_TargetEndUser_CC.js'
			}
		},{
			title: 'Commercial Truck Tires and Tools',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the forward arrow to continue.',
			data:{
				url: '_3_course/pages/commercialTruckTires/index.html',
				audio: '_3_course/audio/mod1_09_Tires_and_Tools.mp3',
				caption: 'mod1_09_Tires_and_Tools_CC.js'
			}
		},{
			title: 'Uniroyal<span class="shrinkage"><sup>&reg;</sup></span> Customers',
			type: 'iFramePage',showInToc: true,hidePageNumber: false, showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click each customer for more information. Click the forward arrow to continue.',
			data:{
				url: '_3_course/pages/customers/index.html', 
				audio: '_3_course/audio/mod1_11_Customers.mp3',
				caption: 'mod1_11_Customers_CC.js'
			}
		},{
			title: 'Get Up To Speed',
			type: 'iFramePage',showInToc: true,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click the BEGIN button to start.',
			data:{
				url: '_3_course/pages/getUpToSpeed/index.html',
				audio: '_3_course/audio/mod1_12_Challenge.mp3',
				caption: 'mod1_12_Challenge_CC.js'
			}
		},{
			title: 'Module 1 Summary',
			type: 'iFramePage',showInToc: false,hidePageNumber: false,showTitle: false,backEnabled: true,nextEnabled: true, clickNextTexto:'Click Save & Exit to continue on to Module 2.',
			data:{
				url: '_3_course/pages/summary/index.html',
				audio: '_3_course/audio/mod1_20_Summary.mp3',
				caption: 'mod1_20_Summary_CC.js'
			}
		} 
   ]// End content
};
// End course