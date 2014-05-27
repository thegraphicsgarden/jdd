var pathArray;
var crumbs;
var topic = "";

makeCrumbs = function(endRemoveCount) {
	$path = Router.current().path;
	crumbs = $path.split( "/" );
	pathArray = crumbs;
	crumbs = crumbs.slice(0,crumbs.length - endRemoveCount);
	//console.log("makin' crumbs! " );
	//console.log(crumbs);
	return crumbs;
};

hasTopic = function (array) {
	for(var i = 0; i < array.length; i++) {
		if(array[i] == "article") {
			return "Acne";
		}
	}
	return "";
};

Template.breadcrumbs.helpers({
	crumbs: function () {
		crumbs = makeCrumbs(1);
	  	return crumbs;
	},
	currentPage: function() {
	    return pathArray[pathArray.length-1];
	},
	topic: function() {
		return hasTopic(pathArray);
	}
});