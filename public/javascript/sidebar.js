(function(e){

	/*LEFT SIDEBAR*/
	var collapsed = false;
	var homeMain = $("#main");
	var secondaryMain = $("#mainContent");
	var articlesList = $("#articlesList");
	var displayBtn = $("#displayArticles");
	var sign = displayBtn.children("span");

	checkSize = function () {
		if( $(window).width() < 768 ) {
			collapsed = true;
			collapse();
		}
		if( !$("#articlesList:visible") ) {
			expand();
		}
	};
	expand = function () {
		articlesList.css({display: "block"});
		sign.text("-");
		homeMain.removeClass("col-xs-12 col-sm-12");
		homeMain.addClass("col-xs-12 col-sm-10");

		/*secondary pages*/
		$("#mainContent").add("#breadcrumbsResizer").addClass("col-sm-10");
		collapsed = false;
	};
	collapse = function() {
		articlesList.css({display: "none"});
		sign.text("+");
		homeMain.addClass("col-xs-12 col-sm-12");
		homeMain.removeClass("col-xs-12 col-sm-10");

		/*secondary pages*/
		$("#mainContent").add("#breadcrumbsResizer").removeClass("col-sm-10");

		collapsed = true;
	};

	displayBtn.click(function() {
		(collapsed) ? expand() : collapse();
	});

	$(window).resize( function () {
		checkSize();
	});
	$(document).ready( function () {
		checkSize();
	});


	/*RIGHT SIDEBAR*/
	var mostReadTab = $(".activeTab");
	var mostCitedTab = $(".inactiveTab");

	var mostReadLI = $(".mostRead");
	var mostCitedLI = $(".mostCited");

	$(mostCitedTab).click(function () {
		mostReadTab.removeClass("activeTab").addClass("inactiveTab");
		mostCitedTab.removeClass("inactiveTab").addClass("activeTab");
		mostCitedLI.css({display: "block"});
		mostReadLI.css({display: "none"});
	});
	$(mostReadTab).click(function () {
		mostCitedTab.removeClass("activeTab").addClass("inactiveTab");
		mostReadTab.removeClass("inactiveTab").addClass("activeTab");
		mostReadLI.css({display: "block"});
		mostCitedLI.css({display: "none"});
	});


	/*$(".author").click(function () {
		$child = $(this).children("span");
		($child.is(':visible')) ? $child.hide() : $child.show();
	});*/
})(jQuery);