(function(e){

	/*LEFT SIDEBAR*/
	var collapsed = false;
	var main = $("#main");
	var articlesList = $("#articlesList");
	var displayBtn = $("#displayArticles");
	var sign = displayBtn.children("span");

	displayBtn.click(function() {
		(collapsed) ? expand() : collapse();
	});

	$(window).resize(function() {
		if( $(window).width() < 768 ) {
			collapsed = true;
			collapse();
		}
	});
	expand = function () {
		articlesList.css({display: "block"});
		sign.text("-");
		main.removeClass("col-xs-12 col-sm-12");
		main.addClass("col-xs-10 col-sm-10");
		collapsed = false;
	};
	collapse = function() {
		articlesList.css({display: "none"});
		sign.text("+");
		main.addClass("col-xs-12 col-sm-12");
		main.removeClass("col-xs-10 col-sm-10");
		collapsed = true;
	};

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