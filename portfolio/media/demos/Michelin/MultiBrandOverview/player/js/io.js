var ioOffline = {
    init: function () {

    },
    getUserId: function () {
        return 'local';
    },
    setBookmark: function (bookmark) {

    },
    getBookmark: function () {
        return 0;
    },
    setSuspend: function (suspendData) {

    },
    getSuspend: function () {
        return '';
    },
    setScore: function (score) {

    },
    getScore: function () {
        return 0;
    },
    setStatus: function (status) {

    },
    getStatus: function () {
        return '';
    },
    commit: function () {

    },
    finish: function () {

    },
    checkConnected: function () {
        return true;
    }
}


var ioScorm1_2 = {
    isConnected: false,
    init: function () {
		if( this.isConnected)
			return;
	
        var initCheck = doLMSInitialize();
        this.isConnected = (initCheck == "true") ? true : false;
        var status = this.getStatus();
        if (status != 'failed' && status != 'passed' && status != 'completed' && status != 'browsed') {
            this.setStatus('incomplete');
        }

    },
	getUserId: function () {
        if (this.isConnected) {
            return doLMSGetValue('cmi.core.student_id');
        } else {
			return 'local';
		}
    },    
    setBookmark: function (bookmark) {
        if (this.isConnected) {
            return doLMSSetValue('cmi.core.lesson_location', String(bookmark));
        }
        return '';
    },
    getBookmark: function () {
        if (this.isConnected) {
            return doLMSGetValue('cmi.core.lesson_location');
        } else {
            return '';
        }
    },
    setSuspend: function (suspendData) {
        if (this.isConnected) {
            return doLMSSetValue('cmi.suspend_data', suspendData);
        } else {
            return '';
        }
    },
    getSuspend: function () {
        if (this.isConnected) {
            return doLMSGetValue('cmi.suspend_data');
        } else {
            return '';
        }
    },
    setScore: function (score) {
        if (this.isConnected) {
            return doLMSSetValue('cmi.core.score.raw', score);
        }
        return '';
    },
    getScore: function () {
        if (this.isConnected) {
            return doLMSGetValue('cmi.core.score.raw');
        } else {
            return 0;
        }
    },
    setStatus: function (status) {
        if (this.isConnected) {
            return doLMSSetValue('cmi.core.lesson_status', status);
        }
        return '';
    },
    getStatus: function () {
        if (this.isConnected) {
            return doLMSGetValue('cmi.core.lesson_status');
        } else {
            return '';
        }
    },
    commit: function () {
        return doLMSCommit();
    },
    finish: function () {
        if (this.isConnected) {
            doLMSSetValue('cmi.core.exit', 'logout');
            this.commit();
            doLMSFinish();
        }
    },
    checkConnected: function () {
        ioScorm1_2.isConnected = (getAPI() != null);
        return ioScorm1_2.isConnected;
        /*
        var isConnected = false;
        var lmsBookmark = ioScorm1_2.getBookmark();
        var testVal="00";
        ioScorm1_2.setBookmark(testVal);
        ioScorm1_2.commit();
        var testBookmark = ioScorm1_2.getBookmark();
        if (testBookmark == testVal){
        //We're alive
        ioScorm1_2.setBookmark(lmsBookmark);
        ioScorm1_2.commit();
        isConnected = true;
        }
        return isConnected;
        */
    }
}


