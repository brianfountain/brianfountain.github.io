var renderer = {
    
	getPage: function (page) {
        var extCmp;
        switch (page.type) {
            case 'uContentPage':
                extCmp = this.getUContent(page.data);
                break;
            case 'iFramePage':
                extCmp = this.getIFrame(page.data);
                break;
            case 'iVideoPage':
                extCmp = this.getIVideo(page.data);
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
    getUContent: function (uContentData) {
        var extContentCmp;

        var extUContent;
        // IMAGE Media Map HTML
        var mapHTML = '';
        var mapAttr = '';
        if (uContentData.contentText == null) {
            /* Deprecating existing imagemap functionality -st */
            /*
            if (uContentData.contentMedia.map != null) {
            mapHTML = renderer.getImgMap(uContentData.contentMedia.map);
            }
            */

			var mediaPath = uContentData.contentMedia.path;
            var mediaContent;
            var inputsContent = '';
            if (mediaPath.toLowerCase().indexOf('.mp4') > -1) {
                mediaContent = '<div id="mediaPlayer" style="width: ' + uContentData.contentMedia.width + 'px; height: ' + uContentData.contentMedia.height + 'px;"></div>';
            } else {
                if (uContentData.contentMedia.imgMap != null) {
                    mapAttr = 'usemap="#imageMap"';
                    mapHTML = renderer.getImageMap(uContentData.contentMedia.imgMap);
                }
                mediaContent = '<img style="width: ' + uContentData.contentMedia.width + 'px; height: ' + uContentData.contentMedia.height + 'px;" src="' + uContentData.contentMedia.path + '" width="' + uContentData.contentMedia.width + '" height="' + uContentData.contentMedia.height + '" ' + mapAttr + ' />' + mapHTML;
            }
            //Inputs
            /* Resume work on this in the future to accommodate floating text/other inputs on top of an image */
            if (uContentData.contentMedia.inputs != null) {
                var inputsContent = '';
                /*
                inputsContent = '<div id="mediaInputs" style="position: absolute; left: 0px; top: 0px; border-style:solid; border-color: #000000; background-color: transparent; border-width:5px; width: ' + uContentData.contentMedia.width + 'px; height: ' + uContentData.contentMedia.height + 'px;">'; 
                inputsContent += '<div style="position: absolute; left: 100px; top: 100px;border-style:solid; border-color: #000000; background-color: transparent; border-width:5px; width: 100px; height: 100px;"></div>';
                inputsContent += '<div style="position: absolute; left: 200px; top: 100px;border-style:solid; border-color: #000000; background-color: transparent; border-width:5px; width: 100px; height: 100px;"></div>';				
                inputsContent += '<input type="text" style="position: absolute; left: 100px; top: 100px; width: 100px; height: 100px;" id="input1" />';
                inputsContent += '</div>';
                */
            }


            //No Text
            extUContent = new Ext.Panel({
                flex: 1,
                border: false,
                layout: 'absolute',
                items: [
						{
						    x: 0,
						    y: 0,
						    border: false,
						    mediaObj: uContentData.contentMedia,
						    html: '<div align="center" style="">' + mediaContent + '</div>',
						    //html: mediaContent,
						    listeners: {
						        afterrender: function (cmp) {
						            renderer.sizeCmpImage(cmp);
						        }
						    }
						}/*,  This causes problems, causes click events in content to be blocked
						{
						    x: 0,
							y: 0,
							height: 1000,
							layout: 'absolute',
							bodyCssClass: 'noBackgroundColor',
						    border: false,
							html: inputsContent
						}	
						*/
					]

            });
        } else if (uContentData.contentMedia == null) {
            //No Image
            extUContent = new Ext.Panel({
                flex: 1,
                border: false,
                layout: 'fit',
                items: [
						{
						    padding: 10,
						    border: false,
						    autoScroll: true,
						    html: uContentData.contentText.htmlText
						}
					]
            });
        } else {
            /* Deprecating existing imagemap functionality -st */
            /*
            if (uContentData.contentMedia.map != null) {
            mapHTML = renderer.getImgMap(uContentData.contentMedia.map);
            }
            */

            var mediaPath = uContentData.contentMedia.path;
            var mediaContent;
            if (mediaPath.toLowerCase().indexOf('.mp4') > -1) {
                mediaContent = '<div id="mediaPlayer" style="width: ' + uContentData.contentMedia.width + 'px; height: ' + uContentData.contentMedia.height + 'px;"></div>';
            } else {
                if (uContentData.contentMedia.imgMap != null) {
                    mapAttr = 'usemap="#imageMap"';
                    mapHTML = renderer.getImageMap(uContentData.contentMedia.imgMap);
                }
                mediaContent = '<img src="' + uContentData.contentMedia.path + '" width="' + uContentData.contentMedia.width + '" height="' + uContentData.contentMedia.height + '" ' + mapAttr + ' />' + mapHTML;
            }

            switch (uContentData.contentMedia.align) {
                case 'left':
                    extUContent = new Ext.Panel({
                        flex: 1,
                        border: false,
                        layout: 'hbox',
                        layoutConfig: {
                            align: 'stretch',
                            pack: 'start'
                        },
                        items: [
								{
								    flex: 0,
								    padding: 10,
								    width: uContentData.contentMedia.width,
								    mediaObj: uContentData.contentMedia,
								    border: false,
								    html: '<div>' + mediaContent + '</div>'
									,
								    listeners: {
								        afterrender: function (cmp) {
								            renderer.sizeCmpImage(cmp);
								        }
								    }
								},

								{
								    flex: 1,
								    padding: 10,
								    border: false,
								    autoScroll: true,
								    html: uContentData.contentText.htmlText
								}
							]
                    });
                    break;
                case 'top':
                    extUContent = new Ext.Panel({
                        flex: 1,
                        border: false,
                        layout: 'vbox',
                        layoutConfig: {
                            align: 'stretch',
                            pack: 'start'
                        },
                        items: [
								{
								    flex: 0,
								    padding: 10,
								    border: false,
								    height: uContentData.contentMedia.height,
								    mediaObj: uContentData.contentMedia,
								    html: '<div align="center">' + mediaContent + '</div>'
									,
								    listeners: {
								        afterrender: function (cmp) {
								            renderer.sizeCmpImage(cmp);
								        }
								    }

								},
								{
								    flex: 1,
								    padding: 10,
								    border: false,
								    autoScroll: true,
								    html: uContentData.contentText.htmlText
								}
							]
                    });

                    break;
                case 'right':
                    extUContent = new Ext.Panel({
                        flex: 1,
                        border: false,
                        layout: 'hbox',
                        layoutConfig: {
                            align: 'stretch',
                            pack: 'start'
                        },
                        items: [
								{
								    flex: 1,
								    padding: 10,
								    border: false,
								    autoScroll: true,
								    html: uContentData.contentText.htmlText
								},
								{
								    flex: 0,
								    padding: 10,
								    border: false,
								    width: uContentData.contentMedia.width,
								    mediaObj: uContentData.contentMedia,
								    html: mediaContent
									,
								    listeners: {
								        afterrender: function (cmp) {
								            renderer.sizeCmpImage(cmp);
								        }
								    }

								}
							]
                    });

                    break;
                case 'bottom':
                    extUContent = new Ext.Panel({
                        flex: 1,
                        border: false,
                        layout: 'vbox',
                        layoutConfig: {
                            align: 'stretch',
                            pack: 'start'
                        },
                        items: [
							{
							    flex: 1,
							    padding: 10,
							    border: false,
							    autoScroll: true,
							    html: uContentData.contentText.htmlText
							},
							{
							    flex: 0,
							    padding: 10,
							    border: false,
							    mediaObj: uContentData.contentMedia,
							    height: uContentData.contentMedia.height,
							    html: '<div align="center">' + mediaContent + '</div>'
								,
							    listeners: {
							        afterrender: function (cmp) {
							            renderer.sizeCmpImage(cmp);
							        }
							    }


							}
						]
                    });
            }
        }


        return extUContent;
    },
    getIFrame: function (iFrameData) {

        var extIFrame = {
            flex: 0,
            /* padding: 10, */
            id: 'iFrameHolder',
            border: false,
            layout: 'fit',
            layoutConfig: {
                align: 'stretch',
                pack: 'start'
            },
            items: [{
                xtype: 'box',
                id: 'iframe-win',
                autoEl: {
                    tag: 'iframe',
                    scrolling: 'auto',
                    frameborder: 'no',
                    src: iFrameData.url
                }
            }]
            /* html: '<iframe id="iFrameContent" scrolling="auto" frameborder="no" ></iframe>' */
        };

        return extIFrame;
    },
	getIVideo: function (iFrameData) {

        var extIFrame = {
            flex: 1,
            id: 'iVideoHolder',
            border: false,
            layout: 'fit',
            layoutConfig: {
                align: 'stretch',
                pack: 'start'
            },
            items: []
        };

        return extIFrame;
    },
    getImageMap: function (mapObj) {
        var mapHTML = '<map name="imageMap" id="imageMap">';
        var zones = mapObj.zones;
        for (var i = 0; i < zones.length; i++) {
            var zone = zones[i];
            var zoneCoords = zone.coords;
            var mapCoords = {
                topLeftX: zoneCoords.x,
                topLeftY: zoneCoords.y,
                bottomRightX: zoneCoords.x + zoneCoords.w,
                bottomRightY: zoneCoords.y + zoneCoords.h
            };
            mapHTML += '<area shape="rect" class="handCursor" coords="' + mapCoords.topLeftX + ',' + mapCoords.topLeftY + ',' + mapCoords.bottomRightX + ',' + mapCoords.bottomRightY + '" onclick="courseObj.mapActions(' + i + ')" />';
        }
        mapHTML += '</map>';

        return mapHTML;
    },

    getMultiSelect: function (questionData) {
        /*
		var boxClick = new Howl({ urls: ['_3_course/audio/uniroyal_checkbox.mp3'], autoplay: false, loop: false, volume: 1.0 });
		var boxHover = new Howl({ urls: ['_3_course/audio/uniroyal_hover.mp3'], autoplay: false, loop: false, volume: 1.0 });
		var submitClicked = new Howl({ urls: ['_3_course/audio/uniroyal_submit_button.mp3'], autoplay: false, loop: false, volume: 1.0 });
		*/
		
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
						    html: '<img class="correct" src="_2_skin/images/' + imgBase + '_correct.png" width="44" height="40" />'
						},
						{
						    padding: 0,
						    width: 44,
							id: 'fqChoiceCheckboxes',
						    border: false,
						    html: '<img class="clickable" src="_2_skin/images/' + imgBase + '_' + imgDesignation + '.png" width="44" height="40" />'
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
								'click', function (e, t, o) {renderer.onChoiceClick(e, t, o, this); boxClick.play();},
								this,
								{ choiceObj: c.choiceObj },
								'mouseover', function () {boxClick.play(); alert('mouseover')}, this.onMouseOver, { choiceObj: c.choiceObj },
								'mouseout', function () {boxClick.play();  alert('mouseout')}, this.onMouseOut, { choiceObj: c.choiceObj }	
							);
                    },
					mouseover : function(c) { console.log("mouse over"); },
    				mouseout : function(c) { console.log("mouse out"); }
					//this.el.on('mouseover', this.onMouseOver, this);
			//this.el.on('mouseout', this.onMouseOut, this);
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
					click: function (button, evt) { renderer.gradeQuestion(); submitClicked.play();}
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
					html: '<img class="finalQuizSign" src="_2_skin/images/finalQuizSign.gif" /><p class="quizRoadsignText">' + questionData.titleText.htmlText + '</p><img class="quizRoadsign" src="_2_skin/images/quizRoadsign.png" />'
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
            imgCheckbox.src = "_2_skin/images/" + imgBase + "_on.png";
        } else {
            imgCheckbox.src = "_2_skin/images/" + imgBase + "_off.png";
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
        
		$(window).mousedown(function() { 
			congratsClip.stop();
			tryAgainClip.stop();
			//console.log("mutoClipo");
		});	
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
						   	 html: '<div style="background: transparent url(_2_skin/images/quizWatermark.png) bottom right no-repeat; text-align: center; -moz-user-select: none; height: 100%">' +
							'<div style="width: 70%; margin: auto; position: relative; padding-top: 10%;">' +
									'<p class="mcText" style="width: 100%; margin-bottom: 20px"><i>'+ completionData.completedText.htmlText + '</i></p>' +
									'<p class="mcLessonText">' + completionData.minPassScore.htmlText + '<br /><span style="color:#D21004">' + completionData.minimumPassingScore + '%</span>' +
									'<br /><br />'+ completionData.yourScore.htmlText + '<br /><span style="color:#D21004">' + courseObj.calculateScore() + '%</span></p>' +
									'<p class="mcLessonText" style="margin-top: 25px">' + completionData.clickNext.htmlText + '</p></div></div>'
						}/*,
						{
						    flex: 1,
						    padding: 10,
						    layout: 'hbox',
						    border: false,
						    layoutConfig: {
						        pack: 'center',
						        align: 'middle'
						    },
						    items: [
								{
								    xtype: 'button',
								    width: 200,
								    height: 40,
								    padding: 10,
								    text: 'Review Course',
								    listeners: {
								        click: function (button, evt) { courseObj.gotoPageIndex(0); }
								    }
								}
							]

						}*/
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
						    html: '<div style="background: transparent url(_2_skin/images/quizWatermark.png) bottom right no-repeat; text-align: center; -moz-user-select: none; height: 100%">' +
							'<div style="width: 70%; margin: auto; position: relative; padding-top: 10%;">' +
									'<p class="mcText" style="width: 100%; margin-bottom: 20px"><i>'+ completionData.failedText.htmlText + '</i></p>' +
									'<p class="mcLessonText">' + completionData.minPassScore.htmlText + '<br /><span style="color:#D21004">' + completionData.minimumPassingScore + '%</span>' +
									'<br /><br />'+ completionData.yourScore.htmlText + '<br /><span style="color:#D21004">' + courseObj.calculateScore() + '%</span></p>' +
									'<br /><br /><p class="mcLessonText">' + completionData.chooseOption.htmlText  + ' </p>' +
									/*'<a href="#" class="button" onClick="courseObj.gotoPageIndex(0); return false;" style="">' + completionData.reviewCourse.htmlText + '</a></div>' +*/
									'<div class="button clickable" style="width: 200px"><a href="#" onClick="courseObj.gotoPageIndex(courseData.retakeAssessmentIndex); return false;">' + completionData.retakeTest.htmlText +'</a></div></div></div>'
						}/*,
						{
						    flex: 1,
						    layout: 'hbox',
						    border: false,
						    layoutConfig: {
						        pack: 'center',
						        align: 'middle'
						    },
						    items: [
								{
								    xtype: 'button',
								    width: 200,
								    height: 40,
								    padding: 0,
								    text: 'Retake Assessment',
								    listeners: {
								        click: function (button, evt) { courseObj.gotoPageIndex(courseData.retakeAssessmentIndex); }
								    }
								},
								{
								    xtype: 'tbspacer',
								    width: 100
								},

								{
								    xtype: 'button',
								    width: 200,
								    height: 40,
								    padding: 0,
								    text: 'Review Course',
								    listeners: {
								        click: function (button, evt) { courseObj.gotoPageIndex(0); }
								    }
								}
							]

						}*/
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

			/*
				[
					{
					    padding: 10,
					    border: false,
					    html: '<p>You have completed the course.</p>' +
								'<p>' + completionData.completedText.htmlText + '</p>'
					},
						{
						    layout: 'hbox',
						    border: false,
						    layoutConfig: {
						        pack: 'center',
						        align: 'middle'
						    },
						    items: [
								{
								    xtype: 'button',
								    width: 200,
								    height: 40,
								    padding: 10,
								    text: 'Review Course',
								    listeners: {
								        click: function (button, evt) { courseObj.gotoPageIndex(0); }
								    }
								}
							]

						}
						
				]
			*/
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
    sizeCmpImage: function (cmp) {
        var imgFinder = cmp.getEl();

        while (imgFinder.down('img') == null) {
            imgFinder = imgFinder.down('div');
            if (imgFinder == null || imgFinder.id == 'mediaPlayer') break;
        }
        var parent = cmp.findParentByType('panel').findParentByType('panel');
        var maxWidth = parent.getWidth();
        var maxHeight = parent.getHeight();
        var imgWidth = cmp.mediaObj.width;
        var imgHeight = cmp.mediaObj.height;

        var ratioX = maxWidth / imgWidth;
        var ratioY = maxHeight / imgHeight;
        var ratio = Math.min(ratioX, ratioY);
        if (ratio > 1) ratio = 1;

        var newWidth = imgWidth * ratio;
        var newHeight = imgHeight * ratio;
        if (imgFinder.id == 'mediaPlayer') {
            jwplayer("mediaPlayer").setup({ flashplayer: "_1_player/jwplayer/player.swf", file: cmp.mediaObj.path, width: newWidth, height: newHeight });
        } else if (imgFinder != null) {
            var img = imgFinder.down('img');


            img.setWidth(newWidth);
            img.setHeight(newHeight);

            //Image map rescaling (if present)
            var imageMap = document.getElementById('imageMap');
            if (imageMap != null) {
                this.scaleImageMap(imageMap, ratio);
            }
        }
        //alert(parent.getWidth() + "x" + parent.getHeight() + "|" + img.getWidth() + "x" + img.getHeight());

    },

    scaleImageMap: function (imageMap, ratio) {
        var areas = imageMap.areas;
        for (var i = 0; i < areas.length; i++) {
            var area = areas[i];
            var aryCoords = area.coords.split(',');
            var newCoords = '';
            for (var j = 0; j < aryCoords.length; j++) {
                aryCoords[j] = Math.ceil(parseInt(aryCoords[j]) * ratio);
                if (newCoords != "") newCoords += ',';
                newCoords += String(aryCoords[j]);
            }
            area.coords = newCoords;

            var x = 0;
        }

    },
    interations: {
        getTabsExplore: function (tabs) {



        }

    }

}