Template.search.helpers({
	years: years,
	issues: issues
});

Template.search.rendered = function () {
	$.getScript( '/javascript/jdd.js');
	$.getScript( '/javascript/sidebar.js');
	$.getScript( '/javascript/nav.js');
};