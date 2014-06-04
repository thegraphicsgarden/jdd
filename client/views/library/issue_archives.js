var months = ["January", "February", "March", "April", "May",
 "June", "July", "August", "September", "October",
 "November", "December"];
var years = [2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002];
var allIssues = [];

reverseArray = function(array) {
	var start = 0; var end = array.length - 1;
	var temp = [];

	for(var i = start; i <= end; i++) {
		temp.push(array[end-i]);
	}
	return temp;
};
months = reverseArray(months);

createIssues = function() {
	var endYears = years.length;
	var endMonths = months.length;
	var startMonths = 0;
	for(var i = 0; i < endYears; i++) {
		var yearEntry = { "year": years[i], "volume": endYears-i,  "issues": [] };
		if(years[i] == "2014") {
			startMonths = 8; endMonths = 12;
		} else {
			startMonths = 0; endMonths = months.length;
		}
		for(var j = startMonths; j < endMonths; j++) {
			var monthEntry = { "month": months[j], "issue": endMonths-j};
			yearEntry.issues.push(monthEntry);
		}			
		allIssues.push(yearEntry);
	}
	console.log(allIssues);
	return allIssues;
};

Template.issueArchives.helpers({
	months: months,
	years: years,
	allIssues: createIssues()
});

Handlebars.registerHelper("greaterThan2010", function (year) {
	return year > 2010;
});
Handlebars.registerHelper("not2014", function (year) {
	return year != 2014;
});