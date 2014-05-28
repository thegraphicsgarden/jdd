(function(e){
	/*LEFT SIDEBAR*/
	var collapsed = false;
	var displayBtn = $("#displayArticles");
	var articlesList = $("#articlesList");
	var main = $("#main");

	collapse = function() {
		articlesList.hide("slow", function() {
			main.removeClass("col-sm-10");
		});
	};
	expand = function() {
		articlesList.show("slow");
		main.addClass("col-sm-10");
	};

	displayBtn.click(function() {
		//console.log("click: " + collapsed);
		(collapsed) ? expand() : collapse();
		collapsed = !collapsed;
		console.log("collapsed: " + collapsed);
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
})(jQuery);