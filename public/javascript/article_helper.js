(function(e){
	var main = $("#main");
	setBackground = function() {
		main.addClass("image-bkg");
	};
	deCapitalize = function () {
		$(".article-general-article-boxheads").each(function() {
			$text = $(this).text().toLowerCase();
			$(this).text($text);
		});

		$("a[href='#jddonline-article']").each(function() {
			$(this).attr("href","").addClass("goToTop");
		});
	};
	//initiate capital letters for poor formatting from db :P
	$(document).ready(function() { deCapitalize(); setBackground(); });
	//$(window).resize(function() { setArticlesList(); });

	//handle behavior for "back to top" button in article body
	$("a.goToTop").click(function() {
		jQuery('html,body').animate({scrollTop:0},0);
	});

	//reveal/hide information for user about call to action buttons below abstract
	var info = $("#info");
	var proceedLink = $("a#proceed");
	$("#callsToAction a.purchase, #callsToAction a.request, #callsToAction a.upgrade, #callsToAction a.savePrint").click(function() {
		$btnClass = $(this).attr('class').split(' ')[0];
		$btnText = $(this).text();
		

		info.show("slow");		
		info.children("h4").text($btnText);
		info.children("p").each(function() {
			( $(this).hasClass($btnClass) ) ?
			$(this).css({display: "block"}) : $(this).css({display: "none"}); 
		});

		switch ($btnClass) {
			case "purchase": proceedLink.attr("href","/purchase"); break;
			case "request": proceedLink.attr("href","/request"); break;
			case "upgrade": proceedLink.attr("href","/upgrade"); break;
			case "savePrint": proceedLink.attr("href","/download"); break;
			default: proceedLink.attr("href","/purchase"); break;
		}
	});
	$("#infoClose").click(function() {
		info.hide("slow");	
	});
})(jQuery);