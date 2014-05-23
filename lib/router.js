Router.configure({
	layoutTemplate: 'layout'
});

loadExternal = function() {
	$.getScript( "javascript/nav.js", function( data, textStatus, jqxhr ) {
		console.log( data ); // Data returned
		console.log( textStatus ); // Success
	  	console.log( jqxhr.status ); // 200
	  	console.log( "Load was performed." );
	});
};

Router.map(function() {
	this.route('homePage', {
		path: '/',
		onAfterAction: loadExternal
	});
	this.route('article', {path: '/article'});
	this.route('searchResults', {path: '/search'});
	this.route('subscribe', {path: '/subscribe'});

	this.route('*', {

	});
});

