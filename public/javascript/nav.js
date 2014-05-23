(function(e){
	var topAdPresent = true;
	$pathname = window.location.pathname;
	($pathname == '/') ? topAdPresent = true : topAdPresent = false; 

	var navbar = $(".navbar-default");
	var topBanner = $(".topBanner");
	var main = $("#main");
	var articlesList = $("#articlesList");
	var displayBtn = $("#displayArticles");

	var smTopMargin = "80px";
	var lgTopMargin = "100px";

	/*if(topAdPresent) {
		topBanner.css({display: "block"});
		smTopMargin = "80px";
		lgTopMargin = "100px";
	} else {
		topBanner.css({display: "none"});
		smTopMargin = lgTopMargin = 0;	
	}*/

	setTopBanner = function() {
		var navbar = $(".navbar-default");
		$height = navbar.height();
		if ($height < 100) {
			topBanner.css({ height: smTopMargin });
			navbar.css({ "margin-top": smTopMargin });
			articlesList.css({ "margin-top": smTopMargin });
		}
		else {
			topBanner.css({ height: lgTopMargin });
			navbar.css({ "margin-top": lgTopMargin });
			articlesList.css({ "margin-top": lgTopMargin });
		}
	};
	setNav = function() { setTopBanner(); };
	$(document).ready(function() { setNav(); });
	$( window ).resize(function() {	setTopBanner();	});





	var initialMargin = $(".topBanner").height() + 20; //20 in padding
		var scrollTop = 0;
		$( window ).scroll(function() {
			scrollTop = $(window).scrollTop();
			$marginTop = initialMargin - scrollTop;
			if($marginTop < 0) $marginTop = 0;
			else if($marginTop > 100) $marginTop = 100;
			navbar.css({
				"margin-top": $marginTop
			});
		});
})
(jQuery);