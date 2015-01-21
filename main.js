// Letter Capitalization

var letterCapitalize = function(string) {

	var split = string.split(' ');
	var caps = "";

	function capitalize(word) {
		var first = word[0].toUpperCase();
		var rest = word.substr(1, word.length -1);
		return first + rest;
	}	

	for(i=0;i<=split.length -1; i++) {
		caps = caps + " " + capitalize(split[i]);
	}

	return caps;
};

// Count the number of words in a string

var wordCount = function(string) {
	var myArray = string.split(' ');
	return myArray.length;
};

