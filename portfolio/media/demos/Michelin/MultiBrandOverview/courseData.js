var courseData = {
	title: "Winning With the Michelin Fleet of Brands",
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
                url: '_pages/introduction/index.html'
            }
		},{
			title: 'Family of Brands',
			type: 'iFramePage',
			data: {
                url: '_pages/familyofbrands/index.html'
            }
		},{
			title: 'Understanding Fleet Needs',
			type: 'iFramePage',
			data: {
                url: '_pages/understandingfleetneeds/index.html'
            }
		},{
			title: 'Warranty',
			type: 'iFramePage',
			data: {
                url: '_pages/warranty/index.html'
            }
		},{
			title: 'Knowledge Check',
			type: 'iFramePage',
			data: {
                url: '_pages/quiz/index.html'
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