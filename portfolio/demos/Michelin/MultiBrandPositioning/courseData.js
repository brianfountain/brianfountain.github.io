var courseData = {
	title: "Fleet Focused Brand Recommendations Module",
	type: 'course',
	ioMode: '_SCORM1_2',
    logo: {},
	retakeAssessmentIndex: 2,
	vars: [
        {
            name: 'introViewed',
            value: false
        },
        {
            name: 'quizReady',
            value: false
        }
    ],
	additionalPreloadImages: [
		// Player
		'_media/images/logo.png',
		'_media/images/poster.jpg',
        '_media/images/bib.jpg',
        '_media/images/preload_sheet.jpg'
	],
	content: [
		{
			title: 'Intro',
			type: 'iFramePage',
			data: {
                url: '_pages/intro/index.html'
            }
		},{
			title: 'Introduction',
			type: 'iFramePage',
			data: {
                url: '_pages/closerlook/index.html'
            }
		},{
			title: 'FLEET 1: SC Aggregate',
			type: 'iFramePage',
			data: {
                url: '_pages/fleet1/index.html'
            }
		},{
			title: 'FLEET 2: Yummy Transport',
			type: 'iFramePage',
			data: {
                url: '_pages/fleet2/index.html'
            }
		},{
			title: 'FLEET 3: Paper Piper Transport',
			type: 'iFramePage',
			data: {
                url: '_pages/fleet3/index.html'
            }
		},{
			title: 'FLEET 4: Green Circle Trucking',
			type: 'iFramePage',
			data: {
                url: '_pages/fleet4/index.html'
            }
		},{
			title: 'Conclusion',
			type: 'iFramePage',
			data: {
                url: '_pages/conclusion/index.html'
            }
		},{
			title: 'Course Complete',
			type: 'assessmentCompletion',
			data: {
				scoredCourse: false,
				minimumPassingScore: 80,
				passedText: {htmlText: ''},
				failedText: {htmlText: 'You did not receive a passing score.'},
				completedText: {htmlText: ''}
			}
		}
	]// End content
};
// End course