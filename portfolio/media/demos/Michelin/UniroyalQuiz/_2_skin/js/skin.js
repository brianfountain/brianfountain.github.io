//Custom Skin-specific JS here
var mediaPlayerElement;
//local pre-def to be overwritten by CADSPlayerGlobal
var rootPath = "_3_course/pages/media/";
var captionPath = "_3_course/captions/";
var enableCaption = false;
var enableVersion = true;



var skinLayout = {
	
	audioActions: [],
	audioPlaying: false,
	audioMainFile: "",
	audioMainPos: 0,
	playerEnabled: true,
	mainTrans: "",
	popupList: [],
    onAudioTime: function(evt){
		//alert(evt.position);
		for (var i = 0; i< skinLayout.audioActions.length; i++){
			//alert(skinLayout.audioActions[i]);
			skinLayout.audioActions[i](evt);
		}
	},
    initViewport: function () {
	//switch video for iPhone
	if (systemChecker.osName == "iPhone") {
		alert("Not designed for smartphones, best viewed on a desktop or tablet.");
		window.close();
		//$("#iphoneMessage").show();
		skinLayout.videoPlayer = vidHTML5;
	}
	
        var viewport = new Ext.Viewport({
            layout: 'border',
            title: 'Uniroyal Player',
             items: [{
				region: 'north',
                height: 31,
                border: false,
				contentEl: 'headerContent',
				id: 'headerAreaHolder',
				items: [{
					id: 'logo',
					contentEl: 'logette',
                    layout: 'fit',
                    border: false,
                    autoScroll: false,
                    items: []
				 },{
					id: 'audioPlayerHolder',
					bodyCssClass: 'noBackgroundColor',
					border: false,
					contentEl: 'audioContent',
					listeners: {
							afterrender: function (cmp) {
								skinLayout.positionAudioHolder();
							}
						}					
					}]
			},
			{
				region: 'south',
				height: 6,
				border: false,
				contentEl: 'footerContent',
				items: [{
					id: 'navigation',
                    layout: 'fit',
                    border: false,
                    autoScroll: false,
					contentEl: 'footerNavigation',
                    items: []
				 }]
			},{
                region: 'center',
                border: false,
                id: 'contentAreaHolder',
                layout: 'absolute',
                autoScroll: false,
                items: [{
						id: 'contentArea',
						layout: 'fit',
						border: false,
						autoScroll: false,
						items: []
					},
					{
				    id: 'pageNumbers',
				    border: false,
				    width: '100%',
				    padding: '0',
				    pagingTemplate: '<div class="pagesNumbering">*PageNumbering*</div>',
				    html: '',
				    listeners: {
				        afterrender: function (cmp) {
							var contentAreaHolder = Ext.getCmp('contentAreaHolder');	
				            skinLayout.positionPageNumbers(contentAreaHolder.getWidth() - 81, 0);
						}
				    }
				},
				{
				    id: 'version',
				    border: false,
				    width: 250,
				    padding: '0px 10px',
                    bodyCssClass: 'noBackgroundColor',
				    versionTemplate: '<div class="versionDisplay">*Version*</div>',
				    html: '<div style="display: block; text-align: left;">&nbsp;&nbsp;&nbsp;&nbsp;</div>',				  				    
					listeners: {
				        afterrender: function (cmp) {
							var contentAreaHolder = Ext.getCmp('contentAreaHolder');	
				            skinLayout.positionVersion(contentAreaHolder.getWidth(), contentAreaHolder.getHeight() - 40);
						}
				    }
				},{
				// Caption overlay display
					layout: 'absolute',
				    layoutConfig: {
						align: 'stretch',
						pack: 'start'
					},
					border: false,
				    id: 'captionHolder',
				    cls: 'captionHolder',
					hidden: true,
				    items: [
						{
							flex: 1,
							xtype: 'displayfield',
							id: 'captionBacking',
						 	border: false,
							width: '100%',
						    layout: 'fit',
						    layoutConfig: {
						        align: 'stretch'
						    },
							autoScroll: true
						},
						{
							xtype: 'displayfield',
							id: 'captionBox',
						    cls: 'captionBoxCls',
							border: false,
						    layout: 'fit',
						    layoutConfig: {
						        align: 'stretch'
						    },
							autoScroll: true
						}
					],
					
				    listeners: {
				        afterrender: function (cmp) {
				            var contentAreaHolder = Ext.getCmp('contentAreaHolder');
				            var captionHolder = Ext.getCmp('captionHolder');
				            captionHolder.setWidth(contentAreaHolder.getWidth());
							var captionBacking = Ext.getCmp('captionBacking');
				            captionBacking.setWidth(contentAreaHolder.getWidth());
				        }

				    }
				},{
				// Click next to continue overlay display
					layout: 'absolute',
				    layoutConfig: {
						align: 'stretch',
						pack: 'start'
					},
					border: false,
				    id: 'clickNextHolder',
					hidden: true,
				    items: [
						
						{
							xtype: 'displayfield',
							id: 'clickNextBacking',
							border: false,
						    layout: 'fit',
						    layoutConfig: {
						        align: 'stretch'
						    },
							autoScroll: false
						},
						{
							xtype: 'displayfield',
							id: 'clickNextField',
							border: false,
						    layout: 'fit',
						    layoutConfig: {
						        align: 'stretch'
						    },
							clickNextTemplate: '<p class="clickNextText">*ClickNext*</div>',
							html: '',	
						    autoScroll: false
						},
						{
							xtype: 'displayfield',
							id: 'closeClickNextField',
							border: false,
						    layout: 'fit',
						    layoutConfig: {
						        align: 'stretch'
						    },
							/*html: '<a href="javascript:void(0)" onClick="skinLayout.clickNextObj.showHideClickNext();" class="button" id="closeShowNextButton">GOT IT!</a>',	*/
							html: '<a href="javascript:void(0)" onClick="skinLayout.clickNextObj.showHideClickNext();" id="closeShowNextButton"><i class="fa fa-close"></i></a>',
						    autoScroll: false
						}
					],
					
				    listeners: {
				        afterrender: function (cmp) {
				            
				
				        }
					 }
				},
				{
                layout: 'hbox',
                border: false,
                autoHeight: true,
                id: 'menuHolder',
                cls: 'menuHolder',
                hidden: true,
                items: [{
                    flex: 1,
                    id: 'courseMenu',
               		title: 'Menu',
                    cls: 'courseMenuCls',
                    border: false,
                    layout: 'fit',
                    layoutConfig: {
                        align: 'stretch',
                        pack: 'start'
                    },
                    autoScroll: false
                }, {
                    flex: 0,
                    id: 'courseMenuBacking',
                    border: false,
                    layout: 'fit',
                    layoutConfig: {
                        align: 'stretch',
                        pack: 'start'
                    },
                    autoScroll: false
                }
				],
                listeners: {
					
                    afterrender: function (cmp) {
                        var contentAreaHolder = Ext.getCmp('contentAreaHolder');
                        var courseMenu = Ext.getCmp('courseMenu');
						var courseMenuBacking = Ext.getCmp('courseMenuBacking');
						
						var contentHeight = contentAreaHolder.getHeight();
						var contentWidth = contentAreaHolder.getWidth();
						
						if (mobilePlay)	{
							if(window.innerHeight > window.innerWidth){
								courseMenu.setHeight(contentHeight);
							}
							else {
								courseMenu.setHeight(Math.max(contentHeight, contentWidth));
							}	
						}
						else {
							courseMenu.setHeight(contentHeight);	
							courseMenuBacking.setHeight(contentHeight);		
							courseMenuBacking.setPosition(0, 0);	
						}
					}
				}
			}],
			// End content area items
            afterlayout: function (container, layout) {
                if (isReady) {
                    initPositioning();					
                };
            }
        }],
        listeners: {
            resize: function(cmp, adjWidth, adjHeight, rawWidth, rawHeight){ 
				if (isReady){
					skinLayout.resizePageEvent(adjWidth, adjHeight);
				}
            },
			afterlayout: function (container, layout) {
                if (isReady) {
                    skinLayout.initPositioning();
                }
            }
        }
    });
    skinLayout.initPositioning();
	
	//auto show the menu
	if (mobilePlay)
		skinLayout.courseMenuObj.showHide();
	
	$("#courseMenuBacking").mousedown(function(){  
			skinLayout.courseMenuObj.showHide();
	});	
	
},

setPageNumber: function () {
    var pageNumbers = Ext.getCmp('pageNumbers');
    var template = pageNumbers.pagingTemplate;
    var currentPage = courseObj.currentIndex + 1;
 	var totalPages = courseObj.flatContent.length;

	//if mobile use the special numbering
	if (mobilePlay) {
		currentPage = courseObj.mobileCurPage + 1;
		totalPages = courseObj.mobileMaxPage;
	}	

    var pagingText = template.replace('*PageNumbering*', currentPage + ' / ' + totalPages);
    pageNumbers.update(pagingText);
    var pageObj = courseObj.getCurrentPageObj();
    if (pageObj.hidePageNumber != null) {
        if (pageObj.hidePageNumber) {
            pageNumbers.hide();
        } else {
            pageNumbers.show();
        }
    } else {
        pageNumbers.show();
    }
	if (mobilePlay) {
		pageNumbers.hide();
	}
},

setClickNextText: function() {
	var clickNextField = Ext.getCmp('clickNextField');
	var clickNextTemplate = clickNextField.clickNextTemplate;
	var page = courseObj.getCurrentPageObj();
	var clickNextText = clickNextTemplate.replace('*ClickNext*', page.clickNextTexto);
	clickNextField.update(clickNextText);
},

setClickNextTextExternally: function(newText) {
	var clickNextField = Ext.getCmp('clickNextField');
	var clickNextTemplate = clickNextField.clickNextTemplate;
	var clickNextText = clickNextTemplate.replace('*ClickNext*', newText);
	clickNextField.update(clickNextText);
	if (!skinLayout.clickNextObj.isShowing) {
		skinLayout.clickNextObj.showHideClickNext();
	}
},

initPositioning: function () {
    var contentArea = Ext.getCmp('contentArea');
    contentArea.setSize(contentArea.ownerCt.getWidth(), contentArea.ownerCt.getHeight());
    contentArea.setAutoScroll(false);

	//update caption size/pos
	skinLayout.captionObj.updatePosition();
	skinLayout.clickNextObj.updatePosition();

    //Slide out menu immediately if this is first run
    if (!skinLayout.courseMenuObj.inited) {
        skinLayout.courseMenuObj.inited = true;
        skinLayout.courseMenuObj.getComponentRef().getEl().fadeOut('r', {
            duration: .1
        });
        skinLayout.courseMenuObj.buildMenu();
        var courseMenuTree = Ext.getCmp('courseMenuTree');
        if (!mobilePlay)
			courseMenuTree.expandAll();
        courseMenuTree.hide();
    }
	else if (mobilePlay) {
		skinLayout.courseMenuObj.mobileOrient();
	}
	
	skinLayout.positionAudioHolder(); 
},

resizePageEvent: function (newWidth, newHeight) {
 	if (skinLayout.courseMenuObj.isShowing && !mobilePlay) {
		//hide instantly but do the maintenance
		Ext.getCmp('menuHolder').hide();
        skinLayout.courseMenuObj.showHide();
		$("#navTopicMenu").removeClass('menuActive');
    }
	skinLayout.positionVersion(newWidth, newHeight - 80);
	skinLayout.positionPageNumbers(newWidth - 80, 0);
},

getContentArea: function () {
    return Ext.getCmp('contentArea');
},

iFrameLoadEvent: function() {	
 	
},

callAttention: function(divName, isClass, animSpeed, myParams, isIframe) {
 	var iframe = $('#iframe-win');
 	var cDiv =(isClass ? ".":"#") + divName;
 	if (isIframe) {
		TweenMax.to($(cDiv, iframe.contents()), animSpeed, myParams);
	} else {
		TweenMax.to($(cDiv), 1, myParams);
	}
},

muteHowls: function(audioCompletedFlag){
	console.log("muteHowls called");
	//console.log("audioCompletedFlag is = " + audioCompletedFlag);
	// Mute all Howler sounds
	/*
	if (renderer.getAssessmentCompletion.audioCompletedFlag) {
		console.log("audioCompletedFlag is = " + audioCompletedFlag);
		Howler.mute();
	}
	*/
},

showPageEvent: function (page) {
	//skinLayout.muteHowls();
	// Hide Closed Captioning Button on each page load
	if (enableCaption)
		$("#navCC").css( "display", "inline" );
	else
		$("#navCC").css( "display", "none" );
	
	// Hide Version info on each page load
	if (enableVersion)
		skinLayout.showVideoVersion();
	else
		skinLayout.hideVideoVersion();
			
	// Hide 'Click Next to Continue' Text on each page load
	$("#continue").css( "display", "none" );
		
	// Check content complete to enable menu
	skinLayout.setMenuEnabled(true);
	
	// Hide special on phone
	if (mobilePlay) {}
	
	skinLayout.setPageNumber();
	
	// Show instruction text
	skinLayout.setClickNextText();
	
	if (skinLayout.clickNextObj.isShowing) {
     	var page = courseObj.getCurrentPageObj();
		skinLayout.clickNextObj.showHideClickNext();
	}
	
	//Hide Course Menu if showing
    if (skinLayout.courseMenuObj.isShowing && !mobilePlay) {
        skinLayout.courseMenuObj.showHide();
		$("#navCC").removeClass('menuActive');
    }

	//Clear popups
	skinLayout.closePopups();
	
	//Clear values per page
	skinLayout.captionObj.resetCaption();
		
	//Set caption data if any
	if (page.data.caption != null) {
		var filePath;
		filePath = captionPath + page.data.caption;
		skinLayout.captionObj.loadCaptions(filePath);
	}	
	
	if (soundReady){
		var audioPlayerHolder = Ext.getCmp('audioPlayerHolder');
		audioPlayerHolder.hide();	

		$("#jquery_jplayer_1").jPlayer("stop");	
		
		skinLayout.audioPlaying = false;
		skinLayout.audioMainFile = "";
		skinLayout.audioMainPos = 0;
		try {
			$("#jquery_jplayer_1").unbind($.jPlayer.event.timeupdate);
			$("#jquery_jplayer_1").unbind($.jPlayer.event.ended);
		} catch(e) { }
		
		if (page.data.audio != null){
			audioPlayerHolder.show();
			
			$("#jquery_jplayer_1").jPlayer("setMedia", {
				mp3: page.data.audio
			});
			//$("#jquery_jplayer_1").jPlayer("play");	
			
			//CC Binding
			//$("#jquery_jplayer_1").bind(parent.$.jPlayer.event.timeupdate, 
			$("#jquery_jplayer_1").bind($.jPlayer.event.timeupdate, 
				function(e){
					skinLayout.captionObj.refreshCaption(e.jPlayer.status.currentTime * 1000);
				}
			);	
			//$("#jquery_jplayer_1").bind(parent.$.jPlayer.event.ended, 
			$("#jquery_jplayer_1").bind($.jPlayer.event.ended, 
				function(e){
					skinLayout.captionObj.refreshCaption(999999); //default to last caption when sound is dumped by jplayer
					var page = courseObj.getCurrentPageObj();
					if (typeof(page.clickNextTexto) != "undefined"){
						skinLayout.clickNextObj.showHideClickNext();
					}
					//skinLayout.clickNextObj.showHideClickNext();
				}
			);								
		}
	}	
},
hideVideoVersion: function () {
	var version = Ext.getCmp('version');
	version.hide();
},
showVideoVersion: function (file) {
	var version = Ext.getCmp('version');
	var template = version.versionTemplate;
	var versionText;
	var line = "";
	
	version.hide();
	
	if (courseData.version)
		line = "version: " + versionText + "<br>";
	else
		line = "version: undefined <br>";
	
	if (file)
		line += "playing: " + file;
	
	if (line.length > 0) {
		var newText = template.replace('*Version*', line);
		version.update(newText);
		version.show();
	}
},

positionVersion: function (winWidth, winHeight) {
	var version = Ext.getCmp('version');
	var x = winWidth - version.getWidth() - 20;
	var y = winHeight - version.getHeight();
	version.setPosition(x, y);
},

positionPageNumbers: function (winWidth, winHeight, show) {
	var pageNumbers = Ext.getCmp('pageNumbers');
	var x = winWidth;
	var y = 0;
	pageNumbers.setPosition(x, y);
},

positionAudioHolder: function () {
    var headerAreaHolder = Ext.getCmp('headerAreaHolder');
    var audioPlayerHolder = Ext.getCmp('audioPlayerHolder');
    var x = headerAreaHolder.getWidth() - 574;
    var y = -11;
	audioPlayerHolder.setPosition(x, y);
	audioPlayerHolder.setSize(260, 42);
},

launchCertificate: function(certPath, winName, windowSettings){
	//console.log("launchCertificate");
	window.open(certPath, winName, windowSettings);
	$(this).attr('target', '_blank');
	courseObj.courseExit();
	return false;
},

clickNextObj: {
	updatePosition: function () {
			var clickNextHolder = Ext.getCmp('clickNextHolder');
			//var clickNextField = Ext.getCmp('clickNextField');
			var footerNav = Ext.getCmp('navigation');
			var contentAreaHolder = Ext.getCmp('contentAreaHolder');
			
			clickNextHolder.setPosition(6, (contentAreaHolder.getHeight() - 96));
			clickNextHolder.setSize('100%', 85);
			
			//clickNextField.setPosition((contentAreaHolder.getWidth() - clickNextField.getWidth()), 0);
		},
		
        showHideClickNext: function () {
			var clickNextHolder = Ext.getCmp('clickNextHolder');
            clickNextHolder.getEl().stopFx();

			skinLayout.clickNextObj.updatePosition();
            
            if (!this.isShowing) {
                this.isShowing = true;
                clickNextHolder.show();				
				clickNextHolder.getEl().slideIn('b');
				//Tweenlite.to(clickNextHolder, 0.5, {x: '-=100px'});
		    }
			else {
                this.isShowing = false;
               clickNextHolder.getEl().hide();
				
				clickNextHolder.getEl().slideOut('b', {
                    callback: skinLayout.clickNextObj.slideOutStart()
                });
				
				/* Tweenlite.to(clickNextHolder, 0.5, {x: '+=100px'}); */
            }
        },
		
		justHideClickNext: function () {
			var clickNextHolder = Ext.getCmp('clickNextHolder');
			clickNextHolder.getEl().hide();
		},
		
		slideOutStart: function () {
            setTimeout(function () {
                Ext.getCmp('clickNextHolder').hide();
            }, 500);
        },
		
}, 
captionObj: {
        inited: false,
        isShowing: false,
        autoScroll: false,
		captionIndex: -1,
		captions: new Array(),
		curFile:"",
		
        getComponentRef: function () {
            return Ext.getCmp('captionBox');
        },
		
		loadCaptions: function (fileName) {
			var script = document.createElement('script');
			script.setAttribute("type","text/javascript");
			script.setAttribute("src", fileName);
			
			if (typeof script != "undefined")
			{
				if (script.readyState){  //IE
					script.onreadystatechange = function(){
						if (script.readyState == "loaded" || script.readyState == "complete"){
							script.onreadystatechange = null;
							skinLayout.captionObj.initCaptions();
						}
					};
				}
				else {  //Others
					script.onload = function(){
						skinLayout.captionObj.initCaptions();
					};
				}			
			
				document.getElementsByTagName("head")[0].appendChild(script);
			}
		},
		
		initCaptions: function () {
			this.captions = captionData;
			this.captionIndex = -1;		

			//clear display
			var captionBox = Ext.getCmp('captionBox');
			captionBox.setValue("");
		},
		
		removeCaptions: function () {
			if (this.curFile == "")
				return;
			
			//get all scripts
			var scriptList = document.getElementsByTagName("script");
			
			//search backwards for matching elements to remove
			for (var i = scriptList.length; i >= 0; i--){ 
				if (scriptList[i] && scriptList[i].getAttribute("src")!=null && scriptList[i].getAttribute("src").indexOf(curFile)!=-1)
					scriptList[i].parentNode.removeChild(scriptList[i]) //remove element by calling parentNode.removeChild()
			 }	
			 //clear the curFile and data reference
			 this.curFile = "";
			 captionData = [];
		},
		
		updatePosition: function () {
			var captionHolder = Ext.getCmp('captionHolder');
            var captionBox = Ext.getCmp('captionBox');
			var footerNav = Ext.getCmp('navigation');
			var contentAreaHolder = Ext.getCmp('contentAreaHolder');
			
			//captionHolder.setPosition(((contentAreaHolder.getWidth()/2) - (700)/2), (contentAreaHolder.getHeight() - 90));
			captionHolder.setPosition(6, (contentAreaHolder.getHeight() - 90));
			captionHolder.setSize('100%', 85);
		},
		
        showHide: function () {
			var captionForcedClosed;
			var captionHolder = Ext.getCmp('captionHolder');
            captionHolder.getEl().stopFx();

			skinLayout.captionObj.updatePosition();
            
            if (!this.isShowing) {
                this.isShowing = true;
                captionHolder.show();				
				captionHolder.getEl().slideIn('b');
				$("#navCC").addClass('menuActive');
				
		    }
			else {
                this.isShowing = false;
                captionHolder.getEl().slideOut('b', {
                    callback: skinLayout.captionObj.slideOutStart()
                });
				$("#navCC").removeClass('menuActive');
				

            }
        },
		
        slideOutStart: function () {
            setTimeout(function () {
                Ext.getCmp('captionHolder').hide();
            }, 500);
        },
		
		resetCaption:function() {
			var captionBox = Ext.getCmp('captionBox');
			
			//clear display
			captionBox.setValue("");
			
			//init values
			this.captions = [];
			this.captionIndex = -1;		
			
			//clear old file
			this.removeCaptions();
		},
		
		refreshCaption: function(miliseconds) {
			var curIdx;
			
			for(var i = 0; i < this.captions.length; i++)
			{
				if( miliseconds > this.captions[i].time ) 
					curIdx = i; //track last match
				else
					break;
			}
			
			this.displayCaption(curIdx);
		},
		
		displayCaption: function(index) {
			//ignore if current index
			if (index == this.captionIndex)
				return;
				
			var captionBox = Ext.getCmp('captionBox');
			
			//set current index
			this.captionIndex = index;
			
			// check for additional blocks to display
			if (this.captionIndex < this.captions.length) {
				//display new caption
				captionBox.setValue(this.captions[this.captionIndex].text);
			}
			else {
				//clear existing
				captionBox.setValue("");
			}			
		}
	},
 
courseMenuObj: {
    inited: false,
    isShowing: false,
    /* width: 400, */
    autoScroll: false,
    getComponentRef: function () {
        return Ext.getCmp('courseMenu');
    },
	getBackingComponentRef: function () {
        return Ext.getCmp('courseMenuBacking');
    },

    showHide: function (bForceShow) {
		if (bForceShow && this.isShowing)
			return;
			
		this.getComponentRef().getEl().stopFx();
        var courseMenuTree = Ext.getCmp('courseMenuTree');
		var courseMenu = Ext.getCmp('courseMenu');
        var menuHolder = Ext.getCmp('menuHolder');
        if (!this.isShowing) {
            controller.setSwipeEnabled(false);
			$("#navTopicMenu").addClass("menuActive");
            this.isShowing = true;
            menuHolder.show();
			courseMenuTree.show();
  
			//force resize
			if (mobilePlay) {
				var contentAreaHolder = Ext.getCmp('contentAreaHolder');// Hide Closed Captioning Button on each page load
				courseMenu.setSize(contentAreaHolder.getWidth(), contentAreaHolder.getHeight());
			}
			else {
				courseMenu.setSize(400, '100%');
			}
			
			var xPos = courseMenu.ownerCt.getWidth() - courseMenu.getWidth();
			courseMenu.setPosition(xPos, 0);

			//type specific maintence
			if (mobilePlay) {
				skinLayout.courseMenuObj.mobileCheckUpdate();
			}
			else {			
				//Update Course Menu Tree Selection				
				courseMenuTree.collapseAll();
				var currentPageObject = courseObj.getCurrentPageObj();
				var treeNode = courseMenuTree.getNodeById(currentPageObject.treeItem.id);
					treeNode.select();
					courseMenuTree.expandPath(treeNode.getPath());
					treeNode.ensureVisible();
				//currentPageObject.treeItem.select();
			}

            this.getComponentRef().getEl().fadeIn();
			//this.getBackingComponentRef().getEl().fadeIn();
			this.getBackingComponentRef().getEl().show();
        } else {
            $("#navTopicMenu").removeClass("menuActive");
			controller.setSwipeEnabled(true);
            this.isShowing = false;
            courseMenuTree.hide();
            this.getComponentRef().getEl().fadeOut('r', {
                callback: skinLayout.courseMenuObj.slideOutStart()
            });
			//this.getBackingComponentRef().getEl().fadeOut('r', {});
			this.getBackingComponentRef().getEl().hide();

        }
    },
    slideOutStart: function () {
        var menuHolder = Ext.getCmp('menuHolder');
        setTimeout(function () {
            Ext.getCmp('menuHolder').hide();
        }, 500);
        //		menuHolder.hide();
    },
	
    buildMenu: function () {
        var extCourseMenuRef = Ext.getCmp('courseMenu');
		var courseMenu = Ext.getCmp('courseMenu');
		
		if (mobilePlay) {
			//set the class for mobile style
			document.getElementById("courseMenu").className = "courseMenuClsMobile";
			document.getElementById('menuHolder').style.opacity = '1';			
			
			//courseMenu.setTitle(localize('title') );
			
			var children = this.getMobileNodes(courseData.content);
			var tree = new Ext.Panel({
				id: 'courseMenuTree',
				cls: 'courseMenuTreeClsMobile',
				border: false,
				/* width: 300, */
				autoScroll: true,
				autoShow: true,
				items: children,
				listeners: {
					afterrender: function (cmp) {
					}
				}
			});
		}
		else {
			var tree = new Ext.tree.TreePanel({
				xtype: 'treepanel',
				id: 'courseMenuTree',
				cls: 'courseMenuTreeCls',
				rootVisible: false,
				border: false,
				/* width: 300, */
				autoScroll: true,
				autoShow: true,
				lines: false,
				root: new Ext.tree.AsyncTreeNode({
					expanded: true,
					children: this.getTreeNode(courseData.content)
			   }),
				listeners: {
				   afterrender: function (cmp) {
					}
				}
			});		
		}
		
        extCourseMenuRef.add(tree);
        extCourseMenuRef.doLayout();
    },
	getMobileNodes: function (itemsArray) {
        var treeNode = new Array();
		for (var i = 0; i < itemsArray.length; i++) {
            var item = itemsArray[i];
            var treeItem;
			var videoNode = null;
			var bAdd = false;
			switch (item.type) {
                case 'section':
                   //scan for video object; only add if one is found
					for (var j = 0; j < item.data.length; j++) {
						videoNode = item.data[j];
						if (videoNode.type == 'iVideoPage') {
							bAdd = true;         
							break;
						}						
					}
					
					treeItem = new Ext.Panel({
                        border: false,
						flex: 0,
						height: 100,
						hidden: !item.showInToc,
						nodeData: videoNode,
						nodeComplete: false,
                        layout: 'hbox',
                        layoutConfig: {
							align: 'middle'
						},
						items: [
							{
								flex: 2,
								border: false,
								cls: 'menuItem',
								html: '<img src="_2_skin/images/exampleThumb.gif" width="80" height="80" alt="" class="menuItemThumb" /><h2 class="menuItemPageTitle">' + item.title + '</h2>'
							},
							{
								flex: 0,
								border: false,
								hidden: true,
								html: '<img src="_2_skin/images/complete_checkmark.png" width="62px" height="57px" alt="" />'
							}
						],
						listeners: {
                            render: function (panel) {
								panel.body.on('click', function() {
									skinLayout.courseMenuObj.mobileNodeClicked(panel.nodeData);									
								});								
							}							
                        }
                    });
					break;					
            }

            if (bAdd) {
                item.treeItem = treeItem;
                treeNode.push(treeItem);				
            }
		}
        return treeNode;
    },
	mobileNodeClicked: function (videoNode) {
		courseObj.gotoPageIndex(courseObj.getFlatContent().indexOf(videoNode));
		
		//android needs to handle visibility of the menu
		if (mobilePlay && systemChecker.osName == "Linux")
			skinLayout.courseMenuObj.showHide();
		
		skinLayout.videoAttempt = 0;		
		skinLayout.playCurrentVideo();
	},
	mobileNodeComplete: function (curPage) {
		var courseMenuTree = Ext.getCmp('courseMenuTree');
		var allComplete = true;

		//find the menu node with matching data
		courseMenuTree.items.each( function(i) {	
			if (i.nodeData == curPage) {
				//mark node as complete and show it
				i.nodeComplete = true;
				i.items.itemAt(1).show();
				i.doLayout();
			}
			
			if (!i.nodeComplete)
				allComplete = false;
		});
		
		if (allComplete) {
			//document.getElementById('mobileCompleteMessage').style.display = 'block';
			//document.getElementById('mobileCompleteMessage').style.zIndex  = '2147483645';
		}		
	},
	hideMobileComplete: function () {
		//document.getElementById('mobileCompleteMessage').style.display = 'none';
	},
	mobileOrient: function (width) {
		var contentAreaHolder = Ext.getCmp('contentAreaHolder');
		var courseMenu = Ext.getCmp('courseMenu');
		courseMenu.setSize(contentAreaHolder.getWidth(), contentAreaHolder.getHeight());
 		courseMenu.setPosition(0,0);
	},
	mobileCheckInit: function () {
		if (courseObj.videoViewed) {
			for (key in courseObj.videoViewed) {
				//backtrack and pull index from key name ie "video1"
				if (courseObj.videoViewed[key] == true) {
					var num = parseInt(key.substring(5));		
					skinLayout.courseMenuObj.mobileNodeComplete(courseObj.getFlatContent()[num]);
				}
			}
		}
	},
	mobileCheckUpdate: function () {
		//for each item in the menu check completion flag: nodeComplete
		var courseMenuTree = Ext.getCmp('courseMenuTree');
		courseMenuTree.items.each( function(i) {	
			var completeCheck = i.items.itemAt(1); 
		
			//toggle the visibility
		    if (i.nodeComplete)	{
				completeCheck.show();
			}
			else {
				completeCheck.hide();
			}
			
			//make sure check positions correctly
			i.doLayout();
		});		
	},	
    getTreeNode: function (itemsArray) {
        var treeNode = new Array();
        for (var i = 0; i < itemsArray.length; i++) {
            var item = itemsArray[i];
            if (item.title == 'Reference Materials') {
                var x = 0;
            }
            var treeItem;
            var bAdd = false;
            switch (item.type) {
				case 'iFramePage':
                case 'iVideoPage':
                case 'uContentPage':
                case 'multiSelect':
                    bAdd = true;
                    treeItem = {
                        id: 'treeNode' + item.id,
                        contentItem: item,
                        text: item.title,
                        leaf: true,
                        hidden: !item.showInToc,
                        listeners: {
                            click: function (treeNode, evt) {
                                skinLayout.courseMenuObj.courseMenuClicked(treeNode, evt);
                            }

                        }
                    }
                    break;
                case 'section':
                    bAdd = true;
                    treeItem = {
                        id: 'treeNode' + item.id,
                        contentItem: item,
                        text: item.title,
                        leaf: false,
                        hidden: !item.showInToc,
                        children: this.getTreeNode(item.data),
                        listeners: {
                            click: function (treeNode, evt) {
                                //skinLayout.courseMenuObj.courseMenuClicked(treeNode, evt); 
                                if (!treeNode.expanded) {
                                    treeNode.expand();
                                } else {
                                    treeNode.collapse();
                                }
                            }

                        }
                    }
                    break;
                case 'assessmentCompletion':
                    bAdd = true;
                    treeItem = {
                        id: 'treeNode' + item.id,
                        contentItem: item,
                        text: item.title,
                        leaf: true,
                        hidden: true,
                        listeners: {
                            click: function (treeNode, evt) {
                                skinLayout.courseMenuObj.courseMenuClicked(treeNode, evt);
                            }

                        }
                    }
                    break;
            }

            if (bAdd) {
                item.treeItem = treeItem;
                treeNode.push(treeItem);
            }

        }
        return treeNode;
    },
    courseMenuClicked: function (treeNode, evt) {
		var pageObj = treeNode.attributes.contentItem;
		courseObj.gotoPageIndex(courseObj.getFlatContent().indexOf(pageObj));
		//$("#navTopicMenu").removeClass('menuActive');
	},
    courseMenuClick: function () {
		if (skinLayout.menuEnabled) {
			skinLayout.courseMenuObj.showHide();
			//$("#navTopicMenu").addClass('menuActive');
		}
    },
	courseMenuBackingClick: function () {
		if (skinLayout.menuEnabled) {
			skinLayout.courseMenuObj.showHide();
			//$("#navTopicMenu").addClass('menuActive');
		}
    }
},
setNextEnabled: function (isEnabled) {
    if (isEnabled) {
		// Enabled state
		$("#navNext > a").removeClass( "nextDisabled" );
		$("#navNext > a > span").removeClass( "disableTint" );
		// Next Button Mouse Over
		$('#navNext>a').mouseover(function (e){  
			TweenLite.to("#nextArrow", .2, {css:{right: "-6px"}, ease:Power2.easeOut});
		});
				
		// Next Button Mouse Out
		$('#navNext>a').mouseout(function (e){  
			TweenLite.to("#nextArrow", .5, {css:{right: "0"}, ease:Power2.easeOut});
		});
	} else {
		// Disabled state
		$("#navNext > a").addClass( "nextDisabled" );
		$("#navNext > a > span").addClass( "disableTint" );
		// Next Button Mouse Out
		$('#navNext>a').mouseout(function (e){  
			TweenLite.to("#nextArrow", .5, {css:{right: "0"}, ease:Power2.easeOut});
		});
    }
},
setBackEnabled: function (isEnabled) {
    if (isEnabled) {
		// Enabled state
		$("#navBack > a").removeClass( "backDisabled" );
		$("#navBack > a > span").removeClass( "disableTint" );
		// Back Button Mouse Over
		$('#navBack>a').mouseover(function (e){  
			TweenLite.to("#backArrow", .5, {css:{left: "-6px"}, ease:Power2.easeOut});
		});

		// Back Button Mouse Out
		$('#navBack>a').mouseout(function (e){  
			TweenLite.to("#backArrow", .5, {css:{left: "0"}, ease:Power2.easeOut});
		});
	} else {
		// Disabled state
		$("#navBack > a").addClass( "backDisabled" );
		$("#navBack > a > span").addClass( "disableTint" );
		// Back Button Mouse Out
		$('#navBack>a').mouseout(function (e){  
			TweenLite.to("#backArrow", .5, {css:{left: "0"}, ease:Power2.easeOut});
		});
		
	}
},
setMenuEnabled: function (isEnabled) {
	//this one we track in skin
	skinLayout.menuEnabled = isEnabled;

    if (skinLayout.menuEnabled) {
		$("#navTopicMenu").stop().animate({opacity: "1.0"}, 'fast');
	} else {
		// Disabled state
		//$("#navTopicMenu").stop().animate({opacity: "0.4"}, 'fast');
	}
},
checkPlayEnabled: function () {
	if (skinLayout.playerEnabled) {
		$("#jplayer").jPlayer("play");
		skinLayout.audioPlaying = true;
	}
	else  {
		$("#jplayer").jPlayer("pause");
		skinLayout.audioPlaying = false;
	}
},
notConnected: function () {
    Ext.Msg.show({
        closable: false,
        title: 'Communication Failed',
        msg: 'LMS communication has failed. Please try again.<br /><br /><b>The course will now exit.</b>',
        buttons: Ext.Msg.OK,
        fn: skinLayout.notConnectedOK,
        icon: Ext.MessageBox.ERROR
    });
    //alert("Communication with LEARNet has failed. Please try again.\r\n\r\nThe course will now exit.");

},
notConnectedOK: function () {
    top.close();
	},
	
	positionPopups: function (scale) {
        var offsetTop = 0;

        if (courseObj.getCurrentPageObj().showTitle) {
            offsetTop += 38; //title space for current UI
        }

        //resize any popup collection
        for (var i = 0; i < skinLayout.popupList.length; i++) {
            var tempPopup = skinLayout.popupList[i];
			var offset = tempPopup.sender.offset(); //
               
            tempPopup.setSize(tempPopup.scaleData.w * scale, tempPopup.scaleData.h * scale);
            tempPopup.setPosition((tempPopup.scaleData.x * scale) + offset.left, (tempPopup.scaleData.y * scale) + offsetTop + offset.top);
        }
    },

    triggerModalPopup: function (title, body) {
		var action = {
			action: 'Popup_Modal',
			content:
			{
				title: title,
				body: body
			}
		}	
		skinLayout.showPopupAction(action, null);
	},
	
	 triggerFixedPopup: function (action, sender) {
		var action = {
			action: 'Popup_Modal',
			content:
			{
				title: title,
				body: body
			}
		}	
		skinLayout.showPopupAction(action, null);
	},
	
	showPopupAction: function (action, sender) {
    
        var contentArea = Ext.getCmp('contentArea');
        var isOldBrowser = false;  // e.g. Firefox2
		var popupLayoutMode;
        var offsetLeft = 0;
        var offsetTop = 0;

		switch (action.action) {
             case "Popup_Modal":
                popupLayoutMode = "MODAL";
                break;
            case "Popup_Fixed":
                popupLayoutMode = "FIXED";
                break;
        }

        //allow the abbreviated modal action
        if (popupLayoutMode != "MODAL") {
             if (courseObj.getCurrentPageObj().showTitle) {
                offsetTop += 38; //title space for current UI
            }
       }
		
        var xPos;
        var yPos;
        var win;

        switch (popupLayoutMode) {
            case "FIXED":
                var coords = action.content.window;
                var offset = sender.offset(); //
                var scale = 1; //renderer.lastScale;

                //check for existing window
                if (!skinLayout.checkUnique(action.content.uniqueID))
                    return;
		
                if (action.content.singular)
					skinLayout.closePopups(false);

			   var popItems = new Array();
				/*
				popItems.push({
					region: 'east',
					xtype: 'button',
					//xtype: 'button',
					cls: 'FixedPopup_CloseBtn',
					//text: 'X',
					listeners: {
						click: function (button, evt) { skinLayout.closePopups(true); }
					}
				});
				*/
				popItems.push({
					region: 'south',
					border: false,
					bodyCssClass: 'noBackgroundColor',
					padding: 5,
					height: 0,
					html: '<div style="display:none">&nbsp;</div>' + action.content.body
				});

				//video trumps audio if we have both
				if (action.content.video != null) {
					//pause audio if active
					if (skinLayout.audioPlaying) {
						$("#jplayer").jPlayer("pause");	
					}
					
					//disable main audio
					//skinLayout.setAudioEnabled(false);					
					
					//add video element
					popItems.push({
						region: 'center',
						id: 'popupVideoPlayerHolder',
						bodyCssClass: 'noBackgroundColor',
						border: false,
						contentEl: 'videoExtraContent',					
						listeners: {							
							afterrender: function (cmp) {
								cmp.show();	
								cmp.setPosition(0, 0);
							},
							show: function (cmp){
								if (videoReady){
									setTimeout(function(){skinLayout.playPopupVideo(action.content.video.m4v)}, 100);
								}
							}
						}							
					});
					
				}
				else if (action.content.audio != null) {
					//pause audio if active
					if (skinLayout.audioPlaying) {
						$("#jplayer").jPlayer("stop");	
					}
					
					try {
						$("#jplayer").unbind($.jPlayer.event.timeupdate);
					} catch(e) { }
				
					//disable main audio
					//skinLayout.setAudioEnabled(false);					
					
					$("#jplayer").jPlayer("setMedia", {
						mp3: action.content.audio
					});
					$("#jplayer").jPlayer("play");	
					
					//bind only if we have transitions
					if (action.content.transitions != null)  {
						//CC Binding
						$("#jplayer").bind($.jPlayer.event.timeupdate, 
							function(e){
								//IE zero's out at wrong time at the end so just ignore perfect 0
								if(e.jPlayer.status.currentTime != 0)
								{
									//console.log("Time: " + e.jPlayer.status.currentTime * 1000);
									skinLayout.transObj.refreshTransitions(e.jPlayer.status.currentTime * 1000);
								}
							}
						);
					}
					
					//Set transition data if any
					if (action.content.transitions != null) {
						skinLayout.mainTrans = skinLayout.transObj.curFile;
					
						//Clear values per page
						skinLayout.transObj.resetTransitions();
						
						//Load popup version
						skinLayout.transObj.loadTransitions(action.content.transitions, true);
					}				
				}
				
                win = new Ext.Panel({
                    id: action.content.uniqueID,
                    renderTo: contentArea.body,
                    autoScroll: true,
                    cls: 'FixedPopup',
                    //x: (coords.x * scale) + offset.left, //relative to the image
                    //y: (coords.y * scale) + offset.top + offsetTop,  //relative to the page
					x: coords.x,
					y: coords.y,
                    width: (coords.w * scale),
                    height: (coords.h * scale),
                    scaleData: coords,
					sender: sender,
                    border: true,
					layout: 'border',
                    items: popItems
                });

                //make border style optional
                win.addClass('FixedPopup_Border');
                
                //store popup for closing
                skinLayout.popupList.push(win);

                break;
	
          case "MODAL":
            // First, place win at extreme top-left to allow largest default layout (i.e. so win borders are not auto-reformatted);
            // Next, [calc] move win to centered position taking up set amount of screen space
            
            xPos = offsetLeft;
            yPos = offsetTop;
            
            win = new Ext.Window({
                renderTo: contentArea.body,
                x: 10,
                y: 10,
                autoHeight: false,
                maxHeight: contentArea.getHeight() - 10,
                maxWidth: contentArea.getWidth() - 10,
                offsetLeft: xPos,
                offsetTop: yPos,
				border: false,
				shadow: false,
				frame: false,
				cls: 'CoursePopup',
                title: action.content.title,
                items: [
                    {
                        border: false,
                        margins: { top: 10, right: 10, bottom: 10, left: 10 },
                        padding: 10,
                        html: '<div style="display:none">&nbsp;</div>' + action.content.body
                    }        
                ],
                autoScroll: true,
                modal: true,
                listeners: {
					afterlayout: function (cmp) {
                        var contentArea = Ext.getCmp('contentArea');
                        var contentAreaH = contentArea.getHeight();
                        var contentAreaW = contentArea.getWidth();

                        var cmpW = cmp.getWidth();
                        var cmpH = cmp.getHeight();

                        //prevent full width bug in IE
                        if (cmpW > (contentAreaW * 0.6) && ieVersNum < 10) {
                            cmp.setWidth(contentAreaW * 0.6);
                        }
						
                        if (cmpH > contentAreaH) {
                            // !!!  cmp.setWidth(cmpW + 35);  // width of scrollbars just added  !!!  Yikes! infinite recursive loop!
                            cmp.setHeight(contentAreaH);
                            cmp.setWidth(cmpW + (isOldBrowser || ieVersNum < 10 ? 0 : 35));  // 35=width of scrollbars just added
                        }
						
                        var newX = (contentAreaW - cmpW)/2;
                        var newY = (contentAreaH - cmpH)/2;                        
						
                        cmp.setPosition(newX, newY);
                    }
                }
            });
            break;
  
        }
        
 		win.show();
    },

	checkUnique: function (id) {
		//check popup collection for item with same id
        for (var i = 0; i < skinLayout.popupList.length; i++) {
			if (skinLayout.popupList[i].id == id)
                return false;
        }

        return true;
    },
	
	clearPopups: function() {
		//remove any popup collection
		for( var i = 0; i < skinLayout.popupList.length; i++) {
			skinLayout.popupList[i].hide();
			skinLayout.popupList[i] = null;
		}
		
		skinLayout.popupList = [];
	},
	
    closePopups: function (lastToClose) {    
		//stop any secondary players
		$("#jplayer").jPlayer("stop");	
		$("#jplayerVideoExtra").jPlayer("stop");
		//skinLayout.videoPlayer.stop();	
		
		//enable main
		if( lastToClose ) {
			//skinLayout.setAudioEnabled(true);
		
			if (skinLayout.audioMainFile != "") {
				skinLayout.prepAudioPlay(skinLayout.audioMainFile, skinLayout.audioMainPos);				
			}		
		}
		
		//reset transitions if any
		if( skinLayout.mainTrans != "" ) {				
			//Clear values per page
			skinLayout.transObj.resetTransitions();
			
			//Load popup version
			skinLayout.transObj.loadTransitions(skinLayout.mainTrans, false);
			skinLayout.mainTrans = "";
		}
		
		skinLayout.clearPopups();
	}			
}
