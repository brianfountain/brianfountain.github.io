//var rootPath = "https://web28.streamhoster.com/netd/michelin/InteractiveServices/MI_04_AT/";
var rootPath = "https://web28.streamhoster.com/netd/michelin/videos/";
//var rootPath = "_3_course/videos/";
var enableCaption = true;

var systemChecker = {
	browserCheck: false,
	flashCheck: false,
	osName:"unknown",
	browserName:"unknown",
	browserVersion:0,
	flashMajor:0,
	flashMinor:0,
	startTime:0,
	endTime:0,
	downloadSize:872448, //for speedTest.jpg
	speedThreshold: 10,
	speedCallback: null,
	
	initFlashDetect: function (fileName) {
		var script = document.createElement('script');
		script.setAttribute("type","text/javascript");
		//script.setAttribute("src", "http://michelin.netdimensions.com/michelin/CADSPlayerGlobal/flashDetect.js");
		script.setAttribute("src", "flashDetect.js");
		
		if (typeof script != "undefined")
		{
			if (script.readyState)  //IE
			{	script.onreadystatechange = function()
				{
					if (script.readyState == "loaded" || script.readyState == "complete")
					{
						script.onreadystatechange = null;
						systemChecker.checkFlash();
					}
				};
			}
			else   //Others
			{
				script.onload = function()
				{
					systemChecker.checkFlash();
				};
			}			
			
			document.getElementsByTagName("head")[0].appendChild(script);
		}
	},
	
	checkOS:function() {
		var rawOs;
		
		//try to work from platform
		if (navigator.platform)
			rawOs = navigator.platform;
		else
			rawOs = navigator.appVersion;
		
		if (rawOs.indexOf("Win")!=-1) this.osName = "Windows";
		if (rawOs.indexOf("Mac")!=-1) this.osName = "MacOS";
		if (rawOs.indexOf("iPad")!=-1) this.osName = "iPad";
		if (rawOs.indexOf("iPhone")!=-1) this.osName = "iPhone";
		if (rawOs.indexOf("X11")!=-1) this.osName = "UNIX";
		if (rawOs.indexOf("Linux")!=-1) this.osName = "Linux";
	},
	
	chromeResponse: function(buttonID, text, opt) {
        if (buttonID == 'no') {
			this.exitCheck("Please view the course using the Chrome browser or on another device for the best experience.");
		}
    },
	
	checkBrowser:function() {
		var N = navigator.appName, ua = navigator.userAgent, tem;
		var M = ua.match(/(opera|chrome|safari|firefox|msie|android|iphone|ipod|blackberry)\/?\s*(\.?\d+(\.\d+)*)/i);
		var chromeIdx = ua.search(/chrome/i);  //check chrome specifically since Android just shows "Android"
	
		if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) 
			M[2] = tem[1];
		
		M = M ? [M[1], M[2]]: [N, navigator.appVersion,'-?'];

		//assign to global object
		this.browserName = M[0];
		this.browserVersion = M[1];		
		this.browserCheck = true;

		var message = this.browserName + " version " + this.browserVersion + " is not supported by this player.";
				
		//special check for android and chrome
		if( this.osName == "Linux" && chromeIdx == -1) {
			Ext.Msg.buttonText.yes = 'Continue';
			Ext.Msg.buttonText.no = 'Exit';

			Ext.Msg.show({
				closable: false,
				bookmark: parseInt(bookmark),
				title: "Browser Recommendation",
				msg: "You are running the native Android browser. This browser is not supported and may produce unsatisfactory performance. Chrome is recommended.",
				buttons: Ext.Msg.YESNO,
				fn: systemChecker.chromeResponse,
				icon: Ext.MessageBox.QUESTION
			});	
			
			return;
		}		
		
		switch (this.browserName.toLowerCase())
		{
			//case "android":
			//case "iphone":
			case "ipod":
			case "blackberry":
			{
				message = "This course is not supported on phones. Please view the course on another a tablet or desktop computer for the best experience.";
				
				var screenWidth = $(window).width();
				if ((screenWidth) < '768')
				{  
					this.exitCheck(message);
				} 
				break;
			}
			
			case "msie":
			{
				if (this.browserVersion < 8.0) 
				{
					this.exitCheck(message);
				}
				break;
			}
			
			case "firefox":
			{
				if (this.browserVersion < 4.0) 
				{
					this.exitCheck(message);
				}
				break;
			}
			
			case "chrome":
			{
				//this.exitCheck(message);
				break;
			}

			case "safari":
			{
				if (this.browserVersion < 5.0) 
				{
					this.exitCheck(message);
				}
				break;
			}
		}	
	},
	
	checkFlash: function() {
		/*if (this.browserCheck && (this.osName != "MacOS" && this.osName != "iPad" && this.osName != "iPhone" && this.osName != "Linux"))
		{	
			if (FlashDetect.versionAtLeast(10, 1))
			{
				this.flashMajor = FlashDetect.major;     	
				this.flashMinor = FlashDetect.minor;   
				this.flashCheck = true;
			}
			else
			{
				this.exitCheck("Flash 10.1 or higher is required for this presentation.");
			}
		}
		*/
	},
	
	exitCheck: function(msg) {
		this.flashCheck = false;

		//alert(msg);
		//window.location = "http://michelin.netdimensions.com/michelin/CADSPlayerGlobal/systemrequirements.html";
		window.location = "systemrequirements.html";
	},
	
	checkSpeed: function(callback) {	
		var imageAddr = "speedTest.jpg" + "?n=" + Math.random();
		var download = new Image();
		
		this.speedCallback = callback;
		
		download.onload = function () {
			systemChecker.endTime = (new Date()).getTime();
			systemChecker.showSpeed();
		}
		this.startTime = (new Date()).getTime();
		download.src = imageAddr;
	},

	showSpeed: function() {
		var duration = (this.endTime - this.startTime) / 1000;
		var bitsLoaded = this.downloadSize * 8;
		var speedBps = (bitsLoaded / duration).toFixed(2);
		var speedKbps = (speedBps / 1024).toFixed(2);
		var speedMbps = (speedKbps / 1024).toFixed(2);
		//alert("Your connection speed is: \n" + 
		//	   speedBps + " bps\n"   + 
		//	   speedKbps + " kbps\n" + 
		//	   speedMbps + " Mbps\n" );
		
		//return speed to callback if any
		if( this.speedCallback != null )
			this.speedCallback(speedMbps);
		
	}
}

systemChecker.checkOS();
systemChecker.checkBrowser();
systemChecker.initFlashDetect();



 