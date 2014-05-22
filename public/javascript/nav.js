(function(e){
	e(function(){
		var navbar = $(".navbar-default ");
		var initialMargin = $(".topBanner").height() + 20; //20 in padding
		var scrollTop = 0;
		$( window ).scroll(function() {
			scrollTop = $(window).scrollTop();
			$marginTop = initialMargin - scrollTop;
			if($marginTop < 0) $marginTop = 0;
			else if($marginTop > 100) $marginTop = 100;
			console.log($marginTop);
			navbar.css({
				"margin-top": $marginTop
			});
		});


		var collapsed = false;
		var main = $("#main");
		var articlesList = $("#articlesList");
		var displayBtn = $("#displayArticles");
		var sign = displayBtn.children("span");

		displayBtn.click(function() {
			if(collapsed) { //if articlesList closed then open
				articlesList.css({display: "block"});
				sign.text("-");
				main.removeClass("col-sm-12");
				main.addClass("col-sm-10");
				collapsed = false;
			}
			else { //if articlesList open then close
				articlesList.css({display: "none"});
				sign.text("+");
				main.addClass("col-sm-12");
				main.removeClass("col-sm-10");
				collapsed = true;
			}
		});
	})
})
(jQuery);