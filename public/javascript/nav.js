(function(e){
	var navbar = $(".navbar-default");
	var topBanner = $(".topBanner");
	var main = $("#main");
	var articlesList = $("#articlesList");
	var displayBtn = $("#displayArticles");

	var smTopMargin = "80px";
	var lgTopMargin = "100px";

	$( document ).ready(function() { 
		console.log("ready");
		setNav(); 
	});

	setNav = function() { setTopBanner(); };
	$( window ).resize(function() {	setTopBanner();	});

	setTopBanner = function() {
		var navbar = $(".navbar-default");
		$height = navbar.height();
		console.log("setup: " + $height);
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
})
(jQuery);