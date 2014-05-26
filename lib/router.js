Router.configure({
	layoutTemplate: 'layout'
});

var scripts = ['javascript/nav.js', 'javascript/sidebar.js'];

loadExternal = function() {
	$.getScript( 'javascript/nav.js', function( data, textStatus, jqxhr ) {
		//console.log( data ); // Data returned
		//console.log( textStatus ); // Success
	  	//console.log( jqxhr.status ); // 200
	  	//console.log( "Load was performed." );
	});
	$.getScript( 'javascript/sidebar.js');

	$(function() {
	   $('body').scrollTop(0);
	});
};

Router.map(function() {
	this.route('homePage', {
		path: '/',
		onAfterAction: loadExternal
	});
	this.route('article', {
		path: '/article',
		onAfterAction: loadExternal
	});
	this.route('searchResults', {
		path: '/search',
		onAfterAction: loadExternal
	});
	this.route('subscribe', {
		path: '/subscribe',
		onAfterAction: loadExternal
	});
	this.route('subscriptionInfo', {
		path: '/subscribe/subscription-information',
		onAfterAction: loadExternal
	});
});

