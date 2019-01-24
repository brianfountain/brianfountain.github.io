//Custom Skin-specific JS here
var mediaPlayerElement;

var skinLayout = {
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
	    var viewport = new Ext.Viewport({
            layout: 'border',
            title: 'Michelin Player',
             items: [{
				/*region: 'north',
                height: 0,
                border: false,
				id: 'headerAreaHolder',
				
				items: [{
					id: 'logo',
					contentEl: 'logette',
                    layout: 'fit',
                    border: false,
                    autoScroll: false,
                    items: []
				 }]*/
			},{
                region: 'center',
                border: false,
                id: 'contentArea',
                layout: 'fit',
                autoScroll: false,
                items: [],
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
	
},

initPositioning: function () {
    var contentArea = Ext.getCmp('contentArea');
    contentArea.setSize(contentArea.ownerCt.getWidth(), contentArea.ownerCt.getHeight());
    contentArea.setAutoScroll(false);
 },

resizePageEvent: function (newWidth, newHeight) {
},

getContentArea: function () {
    return Ext.getCmp('contentArea');
},

iFrameLoadEvent: function() {	
 	console.log("Iframe loaded");
},

showPageEvent: function (page) {
	//console.log("show page event");
	skinLayout.closePopups();
},

launchCertificate: function(certPath, winName, windowSettings){
	window.open(certPath, winName, windowSettings);
	$(this).attr('target', '_blank');
	courseObj.courseExit();
	return false;
},
setNextEnabled: function (isEnabled) {
    if (isEnabled) {
		
	} else {
		
    }
},
setBackEnabled: function (isEnabled) {
    if (isEnabled) {
		
	} else {
		
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
				
				popItems.push({
					region: 'south',
					border: false,
					bodyCssClass: 'noBackgroundColor',
					padding: 5,
					height: 0,
					html: '<div style="display:none">&nbsp;</div>' + action.content.body
				});

				 win = new Ext.Panel({
                    id: action.content.uniqueID,
                    renderTo: contentArea.body,
                    autoScroll: true,
                    cls: 'FixedPopup',
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
