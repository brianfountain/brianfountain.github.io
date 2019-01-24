var languageCode = 'en';
var localizeMedia = true;
var testTable = true;

var stringTable = {};

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function initStringTable() {
	languageCode = 'en';
}

function insertLanguage(code, data) {
	stringTable[code] = data;
}
	
function localize(stringId, sectionId){
	var lang = languageCode;
	var id = sectionId;
	var sectionObj = null;
	
	//make sure language lookup is available or default to English
	if (stringTable.hasOwnProperty(lang) == false)
	{
		if (testTable)
			console.log("Localize Warning::languageCode '" + languageCode + "' not found in table, checking English.");

		lang = 'en';
	}
	
	//if no section provided assume global
	if (typeof id === 'undefined')
	{
		id = 'global'; 
	}
		
	//grab the corresponding section
	sectionObj = getLanguageSection(lang, id);
	if (sectionObj != null && sectionObj.hasOwnProperty(stringId))
		return sectionObj[stringId];
		
	//look for default in global if we didn't already
	if (id != 'global')
	{
		if (testTable)
			console.log("Localize Warning::String '" + stringId + "' not found in requested section " + id + ", checking global.");

		sectionObj = getLanguageSection(lang, 'global');
		if (sectionObj != null && sectionObj.hasOwnProperty(stringId))
			return sectionObj[stringId];
	}
	
	//if this was a non-english search try to find english default
	if (lang != 'en')
	{
		if (testTable)
			console.log("Localize Warning::String '" + stringId + "' not found in requested language " + lang + ", checking English.");

		lang = 'en';
	
		//grab the corresponding section
		sectionObj = getLanguageSection(lang, id);
		if (sectionObj != null && sectionObj.hasOwnProperty(stringId))
			return sectionObj[stringId];
		
		//look for default in global
		sectionObj = getLanguageSection(lang, 'global');
		if (sectionObj != null && sectionObj.hasOwnProperty(stringId))
			return sectionObj[stringId];
	}
	
	if (testTable)
		console.log("Localize Error::Unable to locate string '" + stringId + "', section '" + id + "'!");

	//return "not found" msg
	return("????");
}

function getLanguageSection(lang, section) {
	for (var i = 0; i < stringTable[lang].length; i++)
	{
		var curSec = stringTable[lang][i];
		if (section == curSec['id'])
			return curSec;
	}

	return null;
}


//init the string table
initStringTable();