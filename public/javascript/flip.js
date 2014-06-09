(function(e){
	var prev = $("#prev");
	var next = $("#next");
	var rightPage = $(".rightPage");
	var leftPage = $(".leftPage");
	var turningPage = false;
	var pageNum, clickedPage;

	function turnLeftPage () {
		clickedPage = leftPage.children(".active");
		pageNum = parseInt(clickedPage.attr("data-page-num"));
		if(pageNum != 0 && !turningPage) {
			turningPage = !turningPage;
			clickedPage.addClass("leftFlatToVert");

			$("[data-page-num='" + (pageNum-1) + "']").addClass("active rightVertToFlat turning");
			$("[data-page-num='" + (pageNum-2) + "']").addClass("active");

			setTimeout(function() {
				$("[data-page-num='" + (pageNum+1) + "']").removeClass("active");
				clickedPage.removeClass("active leftFlatToVert");
				rightPage.children(".active").removeClass("rightVertToFlat turning");
				turningPage = !turningPage;
			},1000);
		}
	};
	function turnRightPage() {
		clickedPage = rightPage.children(".active");
		pageNum = parseInt(clickedPage.attr("data-page-num"));
		if(!clickedPage.hasClass("last") && !turningPage) {
			turningPage = !turningPage;
			clickedPage.addClass("rightFlatToVert turning");

			$("[data-page-num='" + (pageNum+1) + "']").addClass("active leftVertToFlat turning");
			$("[data-page-num='" + (pageNum+2) + "']").addClass("active");

			setTimeout(function() {
				$("[data-page-num='" + (pageNum-1) + "']").removeClass("active");
				clickedPage.removeClass("active rightFlatToVert turning");
				leftPage.children(".active").removeClass("leftVertToFlat turning");
				turningPage = !turningPage;
			},1000);
			console.log("turn right");
		}
	};
	prev.click(function(){ 
		if(!turningPage) turnLeftPage(); 
	});
	next.click(function() {	
		if(!turningPage) turnRightPage(); 
	});

	setup = function() {
		$("#breadcrumbsSection").css({"margin-bottom": 0});
	};
	//initiate margin-top for nav at document ready || window resize
	$(document).ready(function() { setup(); });
})(jQuery);