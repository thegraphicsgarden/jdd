(function(e){
	var leftPage = $(".leftPage"); 
	var rightPage = $(".rightPage");
	var mouseDiff = 0; var mouseStart = 0; var deltaMouse = 0;
	var mouseIsDown = false;
	var ct = 0;

	var leftMiddleEdge, rightMiddleEdge;
	var turnRatio;

	setup = function() {
		$("#breadcrumbsSection").css({"margin-bottom": 0});
		leftMiddleEdge = leftPage.offset().left + leftPage.width();
		rightMiddleEdge = rightPage.offset().left;
	};

	function setLeftAngle(turnRatio) {
		$angle = 90 - (90*turnRatio);
		if($angle > 90) $angle = 90;
		else if($angle < 0) $angle = 0;
		return $angle;
	};
	function setRightAngle(turnRatio) {
		$angle = -1* (90+turnRatio*90 );
		return $angle;
	};
	function setShadow(turnRatio) {
		return .2*Math.pow(turnRatio,3);
	};


	//turning the left page
	function turnLeftPage(e, mouseStart, initDiff, pageNum) {
		var curDiff = rightMiddleEdge - e.pageX;
		turnRatio = curDiff/initDiff;

		//clip turning ratio so the pages don't fold "backwards"
		if(turnRatio > 1) turnRatio = 1;
		else if (turnRatio < -1) turnRatio = -1;

		if(turnRatio > 0) {
			leftPage.children(".page.active").css({
				"-webkit-transform": "rotateY(" + setLeftAngle(turnRatio) + "deg)",
				"transform": "rotateY(" + setLeftAngle(turnRatio) + "deg)"
			});
		} else {
			var newPage = $("[data-page-num='" + (pageNum-1) +"']");
			newPage.addClass("active");
			newPage.css({
				"-webkit-transform": "rotateY(" + setRightAngle(turnRatio) + "deg)",
				"transform": "rotateY(" + setRightAngle(turnRatio) + "deg)",
			})
		}
	};


	//turning the right page
	function turnRightPage(e, mouseStart, initDiff) {
		var curDiff = rightMiddleEdge - e.pageX;
		turnRatio = curDiff/initDiff;

		//clip turning ratio so the pages don't fold "backwards"
		if(turnRatio > 1) turnRatio = 1;
		else if (turnRatio < -1) turnRatio = -1;

		//console.log(turnRatio);

		if(turnRatio < 0) {
			rightPage.children(".page.active").css({
				"-webkit-transform": "rotateY(" + setRightAngle(turnRatio) + "deg)",
				"transform": "rotateY(" + setRightAngle(turnRatio) + "deg)"
			});
		} else {
			var newPage = $("[data-page-num='" + (pageNum+1) +"']");
			newPage.addClass("active");
			newPage.css({
				"-webkit-transform": "rotateY(" + setLeftAngle(turnRatio) + "deg)",
				"transform": "rotateY(" + setLeftAngle(turnRatio) + "deg)",
			});
		}
	};

	function completeTurn() {
		var turning;
		if(leftClicked) {

		} else {
			$activeRight = rightPage.children(".active");
			$rightAngle = $activeRight.css("-webkit-transform");
			//console.log(turnRatio);

			//while(turnRatio < 0) {
				turning = setTimeout(function() {
					turnRatio = turnRatio + .05;
					console.log(turnRatio);
					$activeRight.css({
						"-webkit-transform": "rotateY(" + setRightAngle(turnRatio) + "deg)",
						"transform": "rotateY(" + setRightAngle(turnRatio) + "deg)"
					});
				}, 400, function() {
					if(turnRatio < 0) turning();
					else return false;
				});
			//}
			console.log("done");
		}
	};

	var leftClicked, pageNum;
	function trackMouse() {
		//mousedown on left/right page
		leftPage.add(rightPage).on("mousedown touchstart", function(e) {
			$(document).data('mousedown', true);
			mouseStart = e.pageX;
			pageNum = parseInt($(this).children(".active").attr("data-page-num"));

			($(this).hasClass("leftPage")) ? leftClicked = true : leftClicked = false;
			
			//if left page clicked
			if (leftClicked) { 
				initDiff = rightMiddleEdge - mouseStart;
				//handle leftside
				$("[data-page-num='" + (pageNum-2) +"']").addClass("becomingActive");
				//handle rightside
				rightPage.children(".active").removeClass("active").addClass("becomingActive");
			} 
			//if right page clicked
			else { 
				initDiff = mouseStart - rightMiddleEdge;
				//handle rightside
				$("[data-page-num='" + (pageNum+2) +"']").addClass("becomingActive");
				//handle leftside
				leftPage.children(".active").removeClass("active").addClass("becomingActive");
			}
		});

		//mouse up anywhere
		$(document).on("mouseup touchend", function() {
			$(document).data('mousedown', false);
			console.log("up: " + turnRatio);
			(Math.abs(turnRatio) < .8) ? completeTurn() : resetPage();
		});

		//mousemove after left/right page click
		$(document).on("mousemove touchmove", function(e) {
			if($(document).data('mousedown')) {
				(leftClicked) ? 
				turnLeftPage(e, mouseStart, initDiff, pageNum) : 
				turnRightPage(e, mouseStart, initDiff, pageNum);
			}
		});
	}

	//initiate margin-top for nav at document ready || window resize
	$(document).ready(function() { setup(); trackMouse(); });
	$(window).resize(function() { setup(); });
})(jQuery);