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
		path: '/'
	});
	this.route('article', {
		path: '/article'
	});
	this.route('fedArticle', {
		path: '/fed-article'
	});
	this.route('issueArchives', {
		path: '/issue-archives'
	});
	this.route('indexArchives', {
		path: '/index-archives'
	});
	this.route('search', {
		path: '/search'
	});
	this.route('searchResults', {
		path: '/search/:path',
		data: function() { return "test"; /*this.params.path;*/ }
	});
	this.route('subscribe', {
		path: '/subscribe'
	});
	this.route('subscriptionInfo', {
		path: '/subscribe/subscription-information'
	});
	this.route('contact', {
		path: '/contact'
	});
	this.route('feedback', {
		path: '/feedback'
	});
});

