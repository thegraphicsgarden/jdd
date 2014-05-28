(function(e){
	var topBannerHeight, nav, scrollTop;

	setNav = function() {
		nav = $(".navbar");
		topBannerHeight = $(".topBanner").outerHeight();
		scrollTop = $(window).scrollTop();
		var navVertPosition = topBannerHeight - scrollTop;

		if(navVertPosition < 0) navVertPosition = 0;
		nav.css({ "margin-top": navVertPosition });
	}

	//initiate margin-top for nav at document ready || window resize
	$(document).ready(function() { setNav(); });
	$(window).resize(function() { setNav(); });

	//handle scrolling for nav
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		topBannerHeight = $(".topBanner").outerHeight();
		$marginTop = topBannerHeight - scrollTop;
		
		if($marginTop < 0) $marginTop = 0;
		if(scrollTop < 0) $marginTop = topBannerHeight;
		nav.css({ "margin-top": $marginTop});
	});
	/*var topAdPresent = true;
	$pathname = window.location.pathname;
	($pathname == '/') ? topAdPresent = true : topAdPresent = false; 

	var navbar = $(".navbar-default");
	var topBanner = $(".topBanner");
	var main = $("#main");
	var articlesList = $("#articlesList");
	var displayBtn = $("#displayArticles");

	var smTopMargin = "80px";
	var lgTopMargin = "100px";

	if(topAdPresent) {
		topBanner.css({display: "block"});
		smTopMargin = "80px";
		lgTopMargin = "100px";
	} else {
		topBanner.css({display: "none"});
		smTopMargin = lgTopMargin = 0;	
	}*/

	/*setTopBanner = function() {
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
});*/
})
(jQuery);