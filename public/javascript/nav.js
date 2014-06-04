(function(e){
	var topBannerHeight, nav, scrollTop, primaryNav;

	var navLogo = $(".navbar-header a.navbar-brand img");
	var hideLogo = false;
	//setting up the position of the top nav
	setNav = function() {
		nav = $(".navbar");
		primaryNav = $("#primaryNav");
		if($(window).width() > 768) {
			primaryNav.css({height: 80}); //maybe take ths out
		}
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
		
		if($marginTop < 0) {
			$marginTop = 0;
			if(hideLogo) {
				navLogo.animate({"opacity": 1},"fast");
				console.log("show");
			}
			hideLogo = false;
		} else if ($marginTop < topBannerHeight) {
			if(!hideLogo) {
				navLogo.animate({"opacity": 0},"fast");
				console.log("hide");
			}
			hideLogo = true;
		}
		if(scrollTop < 0) {
			$marginTop = topBannerHeight;
		}
		nav.css({ "margin-top": $marginTop});
	});

})(jQuery);