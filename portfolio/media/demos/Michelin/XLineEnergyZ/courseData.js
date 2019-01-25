var courseData = {
	title: "X Line",
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
		'_media/images/poster.jpg'
	],
	content: [
		{
			title: 'Intro',
			type: 'iFramePage',
			data: {
                url: '_pages/intro/index.html'
            }
		}, {
			title: 'Evolution of Excellence',
			type: 'iFramePage',
			data: {
                url: '_pages/evolution/index.html'
            }
		}, {
			title: 'Features',
			type: 'iFramePage',
			data: {
                url: '_pages/features/index.html'
            }
		}, {
			title: 'Warranty',
			type: 'iFramePage',
			data: {
                url: '_pages/warranty/index.html'
            }
		}, {
			title: 'Guarantee',
			type: 'iFramePage',
			data: {
                url: '_pages/guarantee/index.html'
            }
		}, {
			title: 'Quiz',
			type: 'iFramePage',
			data: {
                url: '_pages/quiz/index.html'
            }
		}, {
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