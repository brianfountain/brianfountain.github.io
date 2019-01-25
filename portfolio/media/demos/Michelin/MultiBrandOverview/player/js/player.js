var courseMenuInited = false;
var extReady = false;
var gesturePlay = false;

var controller = {
    getVar: function (name) {
        var currentPage = courseObj.getCurrentPageObj();
        return courseObj.courseDataHelper.getNodeVar(currentPage, name);
    },
    setVar: function (name, val) {
        var currentPage = courseObj.getCurrentPageObj();
        var objVar = controller.getVar(name);
        if (objVar != null) {
            objVar.value = val;
        } else {
            var newVar = new Object();
            newVar.name = name;
            newVar.value = val;
            currentPage.vars.push(newVar);
        }
    },
    getNodeVar: function (node, name) {
        return courseObj.courseDataHelper.getNodeVar(node, name);
    },
    setSwipeEnabled: function (isEnabled) {
        courseObj.swipeHelper.enabled = isEnabled;
    },
	getPageViewed: function (name) {
        var videoKey = name + courseObj.currentIndex;
		
		if(videoKey in courseObj.videoViewed)
			return courseObj.videoViewed[videoKey];
		else {
			courseObj.videoViewed[videoKey] = false;
			return courseObj.videoViewed[videoKey];
		}
    },
    setPageViewed: function (name) {
		var videoKey = name + courseObj.currentIndex;
        courseObj.videoViewed[videoKey] = true;		
	}
}
var courseObj = {
    io: ioOffline,
    currentIndex: 0,
	highIndex: 0,
	isScored: -1,
	videoPlayed: 0,
	videoTotal: 0,
	videoTracked: [],
	videoViewed: [],
    videoCommit: 0,
	nextEnabled: true,
    backEnabled: true,
	init: function () {
		$iphoneMessage = $("#iphoneMessage");
		$iphoneMessage.hide();
        courseObj.swipeHelper.init();
        courseObj.courseDataHelper.init();

        switch (courseData.ioMode) {
            case "SCORM1_2":
                this.io = ioScorm1_2;
                break;
        }
		this.io.init();
		
		var bookmark = this.io.getBookmark();
		var progressData = this.io.getSuspend();
		
		//parse the tracking data
		parseSuspendData(progressData);
		
        if (bookmark != '') {
            if (parseInt(bookmark) > 0) {
   				//Ext.Msg.buttonText.yes = localize('ui_yes');
				//Ext.Msg.buttonText.no = localize('ui_no');
				//Ext.Msg.buttonText.yes = 'yes';
				//Ext.Msg.buttonText.no = 'no';
				$("#bookmarkDialog").addClass('fadeIn').removeClass('fadeOut');
				Ext.Msg.show({
                    closable: false,
                    bookmark: parseInt(bookmark),
                    title: 'BOOKMARKED',
                    msg: 'Would you like to pick up where you left off?',
                    buttons: Ext.Msg.YESNO,
                    fn: courseObj.bookmarkResponse,
                    icon: Ext.MessageBox.QUESTION
                });
            } else {
				//init to incomplete
				courseObj.io.setStatus('incomplete');
				courseObj.io.commit();
                showPage();
            }
            //this.currentIndex = parseInt(bookmark);	
        } else {
            showPage();
        }
    },
    swipeHelper: {
        enabled: false,
        bTracking: false,
        startX: -1,
        startY: -1,
        init: function () {
            
        },
		initFrame: function () {
			var frame = document.getElementById('iframe-win');
		}
    },
    courseDataHelper: {
        uniqueIndex: 0,
        getUniqueIndex: function () {
            var index = courseObj.courseDataHelper.uniqueIndex;
            courseObj.courseDataHelper.uniqueIndex++;
            return index;
        },
        init: function () {
            courseObj.courseDataHelper.initNode(courseData, null);
        },
        initNode: function (node, parent) {
            //Set node base vars
            node.id = courseObj.courseDataHelper.getUniqueIndex();
            node.parent = parent;
            if (node.vars == null) node.vars = new Array();
            node.vars.push({ name: '$v', value: 0 }); /* Visited? Internal Variable */

            //Set node-type-specific vars, and recurse
            switch (node.type) {
                case 'course':
                    courseObj.courseDataHelper.initNodeArray(node.content, node);
                    break;
                case 'section':
                    courseObj.courseDataHelper.initNodeArray(node.data, node);
                    break;
                case 'uContentPage': case 'assessmentCompletion': case 'iFramePage':

                    break;
                case 'multiSelect':

                    break;

            }
		},
        initNodeArray: function (nodeArray, parent) {
            for (var nodeIndex = 0; nodeIndex < nodeArray.length; nodeIndex++) {
                courseObj.courseDataHelper.initNode(nodeArray[nodeIndex], parent);
            }
        },
        getNodeVar: function (node, name) {
            var returnVar = null;
            for (var varIndex = 0; varIndex < node.vars.length; varIndex++) {
                var objVar = node.vars[varIndex];
                if (objVar.name == name) {
                    returnVar = objVar;
                    break;
                }
            }
            if (returnVar == null && node.parent != null) {
                returnVar = courseObj.courseDataHelper.getNodeVar(node.parent, name);
            }
            return returnVar;
        },
        setNodeVar: function (node, name, val) {

        }
    },
    bookmarkResponse: function (buttonID, text, opt) {
        if (buttonID == 'yes') {
            courseObj.currentIndex = opt.bookmark;
			
            //Currently not storing question responses which are required for scoring... so upon returning, send them to the assessment start if they left mid-assessment.
				if (courseObj.getIsScored()) {
					if (courseObj.currentIndex > courseData.retakeAssessmentIndex) {
						courseObj.currentIndex = courseData.retakeAssessmentIndex;
					}
				}
		 }
		$('.cover').addClass('show').addClass('noSkew').removeClass('remove');
		$('#iframe-page body').css('background', 'green');
        showPage();
    },
    flatContent: null,
    uniqueIndex: 0,
    getUniqueIndex: function () {
        var index = this.uniqueIndex;
        this.uniqueIndex++;
        return index;
    },
    getFlatContent: function () {
        if (this.flatContent == null) {
            this.initFlatContent();
        }
        return this.flatContent;
    },
    getIsScored: function () {
        if (this.isScored == -1) {
            var hasScoredQuestion = false;
            var flatContent = this.getFlatContent();
            for (var i = 0; i < flatContent.length; i++) {
                var page = flatContent[i];
                if (page.isScored == true) {
                    hasScoredQuestion = true;
                    break;
                }
            }

            this.isScored = hasScoredQuestion;
        }
        return this.isScored;
    },
    initFlatContent: function () {
        this.flatContent = this.getPagesInSection(courseData.content);
    },
    getPagesInSection: function (section) {
        var pages = new Array();
        for (var i = 0; i < section.length; i++) {
            var item = section[i];
            item.id = this.getUniqueIndex();
            switch (item.type) {
                case 'section':
                    var pagesInSection = this.getPagesInSection(item.data);
                    for (var j = 0; j < pagesInSection.length; j++) {
                        pages.push(pagesInSection[j]);
                    }
                    break;
                default:
                    pages.push(item);
                    break;
            }
        }
        return pages;
    },
    pageNext: function () {
		this.currentIndex++;
		if( this.currentIndex > this.highIndex )
			this.highIndex = this.currentIndex;
		showPage();
	},
	
    pageBack: function () {
		this.currentIndex--;
		showPage();
	},
	
	triggerPageTransition: function(index) {
		//force unload of assets - when complete spawn preloader - jump to specified page index  
		var tSequence = new TimelineLite();
		tSequence.to(tCurtain, 1, {left:100, autoAlpha:0}).to(tPreload, 1, {autoAlpha:0});
	},
	
	gotoPageIndex: function (index) {
        this.currentIndex = index;
        showPage();
    },
    courseExit: function () {
        this.io.finish();
        setTimeout(function () {
            if (top.window != null) {
                top.window.close();
            }
        }, 500);
    },
    getCurrentPageObj: function () {
        return courseObj.getFlatContent()[this.currentIndex];
    },	
	getQuestionFeedback: function (questionData) {
		var message = "";
        for (var i = 0; i < questionData.choices.length; i++) {
            var choice = questionData.choices[i];
            if (choice.isSelected && choice.feedbackText != null) {
                message += (choice.feedbackText + " ");
			}
        }
        return message;		
	},
    getQuestionIsCorrect: function (questionData) {
        var isCorrect = true;
        for (var i = 0; i < questionData.choices.length; i++) {
            var choice = questionData.choices[i];
            if ((choice.isCorrect && !choice.isSelected) || (choice.isSelected && !choice.isCorrect)) {
                isCorrect = false;
                break;
			}
        }
        return isCorrect;
    },
    getScoredQuestions: function () {
		var flatPages = courseObj.getFlatContent();
        var questions = new Array();
        for (var i = 0; i < flatPages.length; i++) {
            var page = flatPages[i];
            if (page.type == 'multiSelect') {
                if (page.data.isScored) {
                    questions.push(page.data);
                }
            }
        }
        return questions;
    },
    calculateScore: function () {
        var questions = this.getScoredQuestions();
        var totalQuestions = questions.length;
        var correctQuestions = 0;
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            if (this.getQuestionIsCorrect(question)) {
                correctQuestions++;
            }
        }
        return Math.ceil(correctQuestions / totalQuestions * 100);

    },
    mapActions: function (zoneIndex) {
        var page = this.getCurrentPageObj();
        var mapZone = page.data.contentMedia.imgMap.zones[zoneIndex];
        if (mapZone.actionQueue != null) {
            var actions = mapZone.actionQueue.actions;
            if (actions != null) {
                for (var i = 0; i < actions.length; i++) {
                    var action = actions[i];
                    this.executeAction(action);
                }
            }
        }

    },
    executeAction: function (action) {
        switch (action.action) {
            case 'GotoPageBack':
                courseObj.pageBack();
                break;
            case 'GotoPageNext':
                courseObj.pageNext();
                break;
            case 'NavBackEnable':
                courseObj.setBackEnabled(true);
                break;
            case 'NavBackDisable':
                courseObj.setBackEnabled(false);
                break;
            case 'NavNextEnable':
                courseObj.setNextEnabled(true);
                break;
            case 'NavNextDisable':
                courseObj.setNextEnabled(false);
                break;
            case 'GotoPage':
                courseObj.gotoPageIndex(action.pageIndex);
                break;
            case 'LaunchFile':
                window.open(action.file.path, 'w' + this.uniqueID(), 'modal=yes');
                break;
            case 'LaunchURL':
                window.open(action.url, 'w' + this.uniqueID(), 'modal=yes');
                break;
            case 'InvokeJavascript':
                eval(action.javascript);
                break;
        }
    },    
    setNextEnabled: function (isEnabled) {
        courseObj.nextEnabled = isEnabled;
        skinLayout.setNextEnabled(isEnabled);
    },
    setBackEnabled: function (isEnabled) {
        courseObj.backEnabled = isEnabled;
        skinLayout.setBackEnabled(isEnabled);
    },
    
    uniqueID: function () {
        var newDate = new Date;
        return newDate.getTime();
    },
    preloader: {
        complete: false,
		images: [],
        loadIndex: 0,
        loadsComplete: 0,
		speed: 0,
        speedThreshold: 100,
        init: function () {
			if (typeof systemChecker == "object") {
				systemChecker.checkSpeed(courseObj.preloader.speedCallback);
			} else {
				courseObj.preloader.preloadStart();
			}
		},        
		speedCallback: function (speed) {
			courseObj.preloader.speed = speed;
            courseObj.preloader.preloadStart();
			
            //switch to low rez for smaller bandwidth
			
            /*if( speed < systemChecker.speedThreshold)
				console.log("less than");
            */
	    },
		preloadStart: function () {
 			if (courseData.preload == false) {
                courseObj.preloader.complete = true;
				//console.log("preloadStart");
                initExt();
            } else {
                courseObj.preloader.images = this.getImages();
                for(i=0; i<10;i++){
					 courseObj.preloader.loadNextImage();
				}
            }
        },
        preloadComplete: function () {
           //console.log("preload complete");
			courseObj.preloader.complete = true;
			$('.preloader').addClass('show').removeClass('hide');
			$('.cover').addClass('show');
			$('.loadingMessage').css('display', 'none');
            initExt();
			
		},
        loadNextImage: function () {
            var progress = Math.ceil(courseObj.preloader.loadIndex / courseObj.preloader.images.length * 100);
            $("#progressbar").progressbar({ value: progress });
            if (courseObj.preloader.loadIndex < courseObj.preloader.images.length) {
                var imagePath = courseObj.preloader.images[courseObj.preloader.loadIndex];
                courseObj.preloader.loadIndex++;
                var image = new Image();
                image.onload = courseObj.preloader.imageLoadComplete;
                image.src = imagePath;
            } 
        },
        imageLoadComplete: function (evt) {
            //alert('loadComplete: ' + evt + ': ' + courseObj.preloader.loadIndex);
            courseObj.preloader.loadsComplete++;
            if (courseObj.preloader.loadsComplete == courseObj.preloader.images.length){
                courseObj.preloader.preloadComplete();
            }else{
                courseObj.preloader.loadNextImage();
            }
            

        },
        getImages: function () {
            var images = new Array();
            var imageTypes = ['.jpg', '.png', '.gif'];
            //Iterate through additionalPreloadImages
            if (courseData.additionalPreloadImages != null) {
                for (var pI = 0; pI < courseData.additionalPreloadImages.length; pI++) {
                    images.push(courseData.additionalPreloadImages[pI]);
                }

            }
            //Iterate through Pages
            for (var i = 0; i < courseData.content.length; i++) {
                var page = courseData.content[i];
                switch (page.type) {
                    case 'uContentPage':
                        if (page.data.contentMedia != null) {
                            var isImage = false;
                            var path = page.data.contentMedia.path;
                            for (var k = 0; k < imageTypes.length; k++) {
                                var typeCheck = imageTypes[k];
                                if (path.toLowerCase().indexOf(imageTypes[k].toLowerCase()) > -1) {
                                    isImage = true;
                                    break;
                                }
                            }
                            if (isImage) images.push(path);
                        }

                }
            }
            return images;

        }

    }
}

function createSuspendData() {
	var suspendData =  courseObj.highIndex + "-" + courseObj.videoPlayed + "-" + courseObj.videoTotal;
	var arrayData = "({";
	
	//build array string
	for(key in courseObj.videoTracked)
	{
		 if (typeof courseObj.videoTracked[key] !== 'function')
			arrayData += ("'" + key + "':" + courseObj.videoTracked[key] + ",");
	}
	arrayData += "})";
	suspendData += "-" + arrayData;
	
	arrayData = "({";
	
	//build array string for videoViewed
	for(key in courseObj.videoViewed)
	{
		 if (typeof courseObj.videoViewed[key] !== 'function')
			arrayData += ("'" + key + "':" + courseObj.videoViewed[key] + ",");
	}
	
	arrayData += "})";
	suspendData += "-" + arrayData;
	return suspendData;
}

function parseSuspendData(suspendData) {
	var rawList = suspendData.split("-");
	
	//skip if we get back junk
	if( rawList.length < 4 )
		return;
		
	//assign to course tracking vars
	courseObj.highIndex = rawList[0] - 0;
	courseObj.videoPlayed = rawList[1] - 0;
	courseObj.videoTotal = rawList[2] - 0;
	
	//parse out the array as object
	courseObj.videoTracked = eval(rawList[3]);
	courseObj.videoViewed = eval(rawList[4]);
}
	
function getCurrentStatus() {
	//currently just all or nothing
	if( courseObj.highIndex >= courseObj.getFlatContent().length-2 ) //-2 (0 index and total pages -1): completion page not required
		return 'completed';
	else
		return 'incomplete';
}

function showPage() {
    //Set visited var
    controller.getVar('$v').value = 1;

    var bookmark = courseObj.currentIndex;
	var progressData = createSuspendData();
	
    //Check connected status
    if (courseObj.io.checkConnected()) {
        var setBookmarkResult = courseObj.io.setBookmark(bookmark);
        var setSuspendResult = courseObj.io.setSuspend(progressData);
		//var setStatusResult = courseObj.io.setStatus(getCurrentStatus()); //doing in quiz only
        var commitResult = courseObj.io.commit();
    } else {
        skinLayout.notConnected();
    }

    var page = courseObj.getCurrentPageObj();

    if (courseObj.currentIndex == 0) {
        //courseObj.setBackEnabled(false);
    } else {
        //courseObj.setBackEnabled(true);
    }

    var maxIndex = courseObj.getFlatContent().length - 1;

    //adding these odd caveats specifically for authoring tool preview mode
    if (courseObj.currentIndex < 0) courseObj.currentIndex = 0;
    if (courseObj.currentIndex > maxIndex) courseObj.currentIndex = maxIndex;

    if (courseObj.currentIndex == maxIndex) {
        //courseObj.setNextEnabled(false);
    } else {
        //courseObj.setNextEnabled(true);
    }

    if (page.backEnabled != null) {
        if (!page.backEnabled) courseObj.setBackEnabled(false);
    }
    if (page.nextEnabled != null) {
        if (!page.nextEnabled) courseObj.setNextEnabled(false);
    }

	switch (page.type) {
        case 'uContentPage':
            //
            break;
        case 'multiSelect':
            //Ext.getCmp('btnNext').hide();
            courseObj.setNextEnabled(false);
            break;
    }

    //controller.setSwipeEnabled(gesturePlay);
    //skinLayout.showPageEvent(page);

    var extContentCmp = renderer.getPage(page);
    var contentArea = skinLayout.getContentArea();

    contentArea.removeAll();
    contentArea.add(extContentCmp);
    contentArea.doLayout();
	
	skinLayout.showPageEvent(page);
	
	//skinLayout.positionVideoHolder();

}


var isReady = false;
//var audioPlayer;
Ext.onReady(function () {
    extReady = true;
	//audioPlayer = new MediaElementPlayer('#audioPlayer');
    initExt();
});
/*
soundManager.onready(function(){
	soundReady = true;
	initExt();
});
*/
function initExt() {
		
    if (extReady && courseObj.preloader.complete && !isReady) {
        courseObj.initFlatContent();
        skinLayout.initViewport();
        courseObj.init();
		/*
		setTimeout(function(){
			document.getElementById('splashAndPreload').style.display = 'none';
		}, 1000);
		*/
		startCourse();
		
		isReady = true;
    }
}