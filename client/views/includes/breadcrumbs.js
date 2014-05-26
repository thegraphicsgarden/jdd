var pathArray;
var crumbs;

makeCrumbs = function(endRemoveCount) {
	$path = Router.current().path;
	crumbs = $path.split( "/" );
	pathArray = crumbs;
	crumbs = crumbs.slice(0,crumbs.length - endRemoveCount);
	console.log("makin' crumbs! ");
	console.log(crumbs);
	return crumbs;
};

Template.breadcrumbs.helpers({
	crumbs: function () {
		crumbs = makeCrumbs(1);
	  	return crumbs;
	},
	currentPage: function() {
	    return pathArray[pathArray.length-1];
	}
});