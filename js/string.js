function toUnicode(theString) {
	var unicodeString = '';
	for(var i = 0; i < theString.length; i++) {
		var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
		while(theUnicode.length < 4) {
			theUnicode = '0' + theUnicode;
		}
		theUnicode = '\\u' + theUnicode;
		unicodeString += theUnicode;
	}
	return unicodeString;
}

function tohanzi(data) {
	return unescape(data.replace(/\\u/g, '%u'));
}