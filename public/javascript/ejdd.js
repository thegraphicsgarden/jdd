(function(e){
	var leftPage = $(".leftPage"); 
	var rightPage = $(".rightPage");
	var mouseDiff = 0; var mouseStart = 0; var deltaMouse = 0;
	var mouseIsDown = false;
	var ct = 0;

	var leftMiddleEdge;
	var rightMiddleEdge;

	setup = function() {
		$("#breadcrumbsSection").css({"margin-bottom": 0});
		leftMiddleEdge = leftPage.position().left + leftPage.width();
		rightMiddleEdge = rightPage.position().left;
	};

	function setLeftAngle(deltaMouse) {
		$angle = 90 - (90*deltaMouse);
		if($angle > 90) $angle = 90;
		else if($angle < 0) $angle = 0;
		//console.log($angle);
		return $angle;
	};
	function setShadow(deltaMouse) {
		return .2*deltaMouse*deltaMouse*deltaMouse;
	};

	leftPage.mousedown(function() {
		mouseStart = rightPage.offset().left - event.pageX;
		$(document).mousemove(function() {
			mouseDiff = leftPage.width() - (event.pageX - leftPage.offset().left);
			deltaMouse = mouseDiff/mouseStart;
			//console.log(mouseDiff);
			leftPage.children(".page.active").css({
				"-webkit-transform": "rotateY(" + setLeftAngle(deltaMouse) + "deg)",
				"background": "whitesmoke"
			});
			$(".becomingActive").css({
				"background": "rgba(0,0,0," + setShadow(deltaMouse)  + ")"
			});
		});
		$(document).mouseup(function() {
			if(deltaMouse > .2) {

			}
			else {
				setLeftAngle
				$(".page.active").animate({
					"-webkit-transform": "rotateY(0deg)"
				});
			}
		});
	});
	rightPage.mousedown(function() {
		mouseStart = event.pageX - rightPage.offset().left;
		$(document).mousemove(function() {
			mouseDiff = event.pageX - rightPage.offset().left;
			deltaMouse = mouseDiff/mouseStart;
			//console.log("right: " + mouseDiff/mouseStart);
			rightPage.children(".page.active").css({
				"-webkit-transform": "rotateY(" + -1*setLeftAngle(deltaMouse) + "deg)",
				"background": "whitesmoke"
			});
			$(".becomingActive").css({
				"background": "rgba(0,0,0," + setShadow(deltaMouse)  + ")"
			});
		});
	});

	//initiate margin-top for nav at document ready || window resize
	$(document).ready(function() { setup(); });
	$(window).resize(function() { setup(); });
})(jQuery);