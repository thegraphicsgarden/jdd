(function(e){
	var main, articlesList, articles, topBannerHeight;

	setArticlesList = function() {
		topBannerHeight = $(".topBanner").outerHeight();
		navHeight = $(".navbar").outerHeight();
		main = $("#main");
		articles = $(".article");
		articlesList = $("#articlesList");
		if($(window).width() > 768) { // > phones
			articlesList.css({
				height: main.height(),
				"margin-top": navHeight
			});
		}
		else {
			articlesList.css({
				height: articles.height(),
				"margin-top": navHeight
			});
		}

		main.css({
			"margin-top": navHeight
		});
	};

	//initiate margin-top for nav at document ready || window resize
	$(document).ready(function() { setArticlesList(); });
	$(window).resize(function() { setArticlesList(); });
})(jQuery);