(function(e){
	var main, articlesList, articles;

	setArticlesList = function() {
		main = $("#main");
		articles = $(".article");
		articlesList = $("#articlesList");
		if($(window).width() > 768) { // > phones
			articlesList.css({
				height: main.height() + "px"
			});
		}
		else {
			articlesList.css({
				height: articles.height() + "px"
			});
		}

	};

	//initiate margin-top for nav at document ready || window resize
	$(document).ready(function() { setArticlesList(); });
	$(window).resize(function() { setArticlesList(); });
})(jQuery);