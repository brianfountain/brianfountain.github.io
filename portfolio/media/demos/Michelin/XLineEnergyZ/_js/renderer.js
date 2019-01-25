var renderer = {
    
	getPage: function (page) {
        var extCmp;
        switch (page.type) {
            case 'iFramePage':
                extCmp = this.getIFrame(page.data);
                break;
            case 'multiSelect':
                extCmp = this.getMultiSelect(page.data);
                break;
            case 'assessmentCompletion':
                extCmp = this.getAssessmentCompletion(page.data);
                break;
        }
        extCmp.flex = 1;
        var title = {
            padding: 10,
            border: false,
            bodyCssClass: 'PageTitle',
            html: page.title
        };
        var items = new Array();
        if (page.showTitle) {
            items.push(title);
        }
        items.push(extCmp);
        var pageCmp = new Ext.Panel({
            id: 'content',
            layout: 'vbox',
            border: false,
            padding: 0,
            layoutConfig: {
                align: 'stretch',
                pack: 'start'
            },
            items: items
        });

		return pageCmp;

    },
    getIFrame: function (iFrameData) {

        var extIFrame = {
            flex: 0,
			id: 'iFrameHolder',
            border: false,
            layout: 'fit',
            layoutConfig: {
                align: 'stretch',
                pack: 'start'
            },
            items: [{
                xtype: 'box',
                id: 'iframe-page',
                autoEl: {
                    tag: 'iframe',
                    name:'page',
                    scrolling: 'auto',
                    frameborder: 'no',
                    src: iFrameData.url
                }
            }],
			 listeners: {
                render: function (ei) {
                    
                    /* Add your transition here */ 
                    //console.log('iframe is rendered!')
                }
			 }
           };
		return extIFrame;
    },

    getMultiSelect: function (questionData) {
       
		var choices = new Array();
        for (var i = 0; i < questionData.choices.length; i++) {
            var choice = questionData.choices[i];
            var imgDesignation = (choice.isSelected) ? "on" : "off";
            var imgBase = (questionData.multiSelect) ? "checkbox" : "radio";
			choice.questionData = questionData;
            var choiceExtObj = new Ext.Panel({
                layout: 'hbox',
                border: false,
                choiceObj: choice,
                layoutConfig: {
                    align: 'top',
                    pack: 'stretch'
                },
                items: [
						{
						    border: false,
							id: 'fqChoiceCorrect',
							hidden: true,
						    html: '<img class="correct" src="_media/images/' + imgBase + '_correct.png" width="44" height="40" />'
						},
						{
						    padding: 0,
						    width: 44,
							id: 'fqChoiceCheckboxes',
						    border: false,
						    html: '<img class="clickable" src="_media/images/' + imgBase + '_' + imgDesignation + '.png" width="44" height="40" />'
						},
						{
						    flex: 1,
						    border: false,
						    id: 'fqChoiceText',	
							bodyCssClass: 'clickable',
						    padding: 0,
						    html: choice.choiceText.htmlText
						}

					],
                listeners: {
                    render: function (c) {
                        choice.isSelected = (choice.isSelected == null) ? false : choice.isSelected;
							c.el.on(
								'click', function (e, t, o) {renderer.onChoiceClick(e, t, o, this);},
								this,
								{ choiceObj: c.choiceObj }	
							);
                    }
                }

            });
            choice.extCmp = choiceExtObj;
            choices.push(choiceExtObj);
        }
        choices.push(
			{ xtype: 'spacer', height: 20 },
			{
				 xtype: 'button',
				 text: 'SUBMIT',
				 bodyCssClass: 'clickable',
				 height: 65,
				 width: 200,
				 listeners: {
					click: function (button, evt) { renderer.gradeQuestion();}
				 }
           });

        extContentCmp = new Ext.Panel({
            id: 'multiSelect',
            reRendered: false,
            autoScroll: true,
            border: true,
            padding: '0',
            items: [
				{
					padding: 0,
					id: 'fqAddons',
					border: false,
					/*html: '<img class="finalQuizSign" src="_media/images/finalQuizSign.gif" /><p class="quizRoadsignText">' + questionData.titleText.htmlText + '</p><img class="quizRoadsign" src="_media/images/quizRoadsign.png" />'*/
					html: '<p class="quizRoadsignText">' + questionData.titleText.htmlText + '</p>'
				},
				{
				    padding: 0,
					id: 'fqQuestion',
				    border: false,
				    html: questionData.questionText.htmlText
				},
				{
					padding: 5,
					id: 'fqChoices',
					items: choices,
				    border: false
				}

			],
            listeners: {
                render: function (extCmp) {
                    //alert(extCmp.reRendered);
                    if (!extCmp.reRendered) {
						extCmp.reRendered = true;
                        setTimeout(
							function () {
							    var multiSelect = Ext.getCmp('multiSelect');
							    //multiSelect.hide();
							    multiSelect.show();
							    multiSelect.doLayout();
								courseObj.setNextEnabled(false);
							}
						, 1);

                    }
                    //alert('render');
                }			 
			}
		
		});

        return extContentCmp;
    },
    onChoiceClick: function (evt, t, obj, sender) {
        var choice = obj.choiceObj;
        var questionData = choice.questionData;
		var imgBase = (questionData.multiSelect) ? "checkbox" : "radio";
		
        if (!questionData.multiSelect) {
            //Turn off all others if in mutually exclusive mode
            for (var i = 0; i < questionData.choices.length; i++) {
                if (questionData.choices[i] != choice) {
                    renderer.setChoiceSelected(imgBase, questionData.choices[i], false);
                }
            }
        }
        renderer.setChoiceSelected(imgBase, choice, !choice.isSelected);
    },
    setChoiceSelected: function (imgBase, choice, selected) {
		//we have two images now so checkbox is the second (index 1)
		var childList = choice.extCmp.getEl().query('img');
        var imgCheckbox = childList[1];
					
		choice.isSelected = selected;
        if (choice.isSelected) {
            imgCheckbox.src = "_media/images/" + imgBase + "_on.png";
        } else {
            imgCheckbox.src = "_media/images/" + imgBase + "_off.png";
        }
    },
    gradeQuestion: function () {
        var page = courseObj.getCurrentPageObj();
        var questionData = page.data;
        if (questionData.showFeedback) {
            var isCorrect = courseObj.getQuestionIsCorrect(questionData);
            var title;
            var message;
            if (isCorrect) {
                title = 'Correct';
                message = questionData.correctFeedback;
				
            } else {
                title = 'Incorrect';
                message = questionData.incorrectFeedback;
            }
			renderer.showCorrectChoices();
            controller.setSwipeEnabled(false);
            Ext.Msg.show({
                closable: false,
				minWidth: 400,
                title: title,
                msg: message,
                buttons: Ext.Msg.OK,
                //fn: renderer.questionGraded,
                icon: Ext.MessageBox.INFO
            });


        } else {
			courseObj.setNextEnabled(true);
            courseObj.pageNext();
        }

    },
    questionGraded: function (buttonID, text, opt) {
        var page = courseObj.getCurrentPageObj();
        var questionData = page.data;
        if (questionData.autoAdvance) {
			controller.setSwipeEnabled(true);
			courseObj.setNextEnabled(true);
			courseObj.pageNext();
		}
		else {
			controller.setSwipeEnabled(true);
			courseObj.setNextEnabled(true);

			//renderer.showCorrectChoices();
		}
		
    },
	showCorrectChoices: function() {
		var choiceComp = Ext.getCmp('fqChoices');
		var choiceItems = choiceComp.items.itemAt(0); //pull data from first element
		var choiceObj = choiceItems.choiceObj;
		var questionData = choiceObj.questionData;
       
		for (var i = 0; i < questionData.choices.length; i++) {
			var curChoice = questionData.choices[i];
			
			if (curChoice.isCorrect)
			{
				//correct check is first item in the choice object
				var correctCheck = curChoice.extCmp.items.itemAt(0); 
				correctCheck.show();
				correctCheck.getEl().setStyle('z-index','1000');
			}
		}
		
		//hide the submit button (which is the last itme in the list)
		var submitElement = choiceComp.items.itemAt(choiceComp.items.length-1); 
		submitElement.hide();
        
	},	
    getAssessmentCompletion: function (completionData) {
		var items = new Array();
		var message;
        if (completionData.scoredCourse) {
            var score = courseObj.calculateScore();
            courseObj.io.setScore(score);
			
            if (score >= completionData.minimumPassingScore) {
                //Passed
                courseObj.io.setStatus('completed');
				congratsClip.play();
				//courseObj.muteHowls(true);
				items = [
						{
						    flex: 1,
						    padding: 0,
						    border: false,
						   	 html: '<div style="background: transparent url(_media/images/quizWatermark.png) bottom right no-repeat; text-align: center; -moz-user-select: none; height: 100%">' +
							'<div style="width: 70%; margin: auto; position: relative; padding-top: 10%;">' +
									'<p class="mcText" style="width: 100%; margin-bottom: 20px"><i>'+ completionData.completedText.htmlText + '</i></p>' +
									'<p class="mcLessonText">' + completionData.minPassScore.htmlText + '<br /><span style="color:#D21004">' + completionData.minimumPassingScore + '%</span>' +
									'<br /><br />'+ completionData.yourScore.htmlText + '<br /><span style="color:#D21004">' + courseObj.calculateScore() + '%</span></p>' +
									'<p class="mcLessonText" style="margin-top: 25px">' + completionData.clickNext.htmlText + '</p></div></div>'
						}
					]

            } else {
				//Failed
             	courseObj.setNextEnabled(false);
				//courseObj.muteHowls(true);
				tryAgainClip.play();
				items = [
						{
						    flex: 1,
						    padding: 0,
						    border: false,
						    html: '<div style="background: transparent url(_media/images/quizWatermark.png) bottom right no-repeat; text-align: center; -moz-user-select: none; height: 100%">' +
							'<div style="width: 70%; margin: auto; position: relative; padding-top: 10%;">' +
									'<p class="mcText" style="width: 100%; margin-bottom: 20px"><i>'+ completionData.failedText.htmlText + '</i></p>' +
									'<p class="mcLessonText">' + completionData.minPassScore.htmlText + '<br /><span style="color:#D21004">' + completionData.minimumPassingScore + '%</span>' +
									'<br /><br />'+ completionData.yourScore.htmlText + '<br /><span style="color:#D21004">' + courseObj.calculateScore() + '%</span></p>' +
									'<br /><br /><p class="mcLessonText">' + completionData.chooseOption.htmlText  + ' </p>' +
									/*'<a href="#" class="button" onClick="courseObj.gotoPageIndex(0); return false;" style="">' + completionData.reviewCourse.htmlText + '</a></div>' +*/
									'<div class="button clickable" style="width: 200px"><a href="#" onClick="courseObj.gotoPageIndex(courseData.retakeAssessmentIndex); return false;">' + completionData.retakeTest.htmlText +'</a></div></div></div>'
						}
					]

            }
        } else {
            //Non-scored Completion
            courseObj.io.setStatus('completed');
            items = [	
				{
					layout: 'vbox',
					border: false,
					padding: 0,
					layoutConfig: {
						align: 'stretch',
						pack: 'start'
					},
					html: $('#nonScoredCompletionContent').html()
				}
			]
        }
        //setTimeout('courseObj.io.commit()',1000);
        courseObj.io.commit();
		var extContentCmp = new Ext.Panel({
            layout: 'vbox',
            padding: 0,
            border: false,
            layoutConfig: {
                align: 'stretch',
                pack: 'start'
            },
            items: items
        });


        return extContentCmp;
    },
    interations: {
        getTabsExplore: function (tabs) {
	 }

    }

}