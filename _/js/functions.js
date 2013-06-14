

var itemType = "li"; 	// the HTML element type of the items in the carousel
						// feel free to use classes or other identifiers


(function($){})(window.jQuery);

$(document).ready(function (){
	
	$(".thumb-holder").noSelect().on("click", ".thumb-nav", function() {
		
		triggerThumbNav(this);
		
	});
	
	$(".csstransitions .thumb-holder li:first-of-type").on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", function() {

		$(this).data("transitioning", false); 
		
	});

});

$(window).resize(function() {

	if ($(".thumb-holder").length != 0) {
	
		resetThumbNavs();
	
	};
	
});

$(window).load(function() {

	if ($(".thumb-holder").length != 0) {
	
		resetThumbNavs();
	
	};
	
});

function resetThumbNavs() {
	
	$(".thumb-holder").each(function(index) {
	
		scroller = $(this).attr("id");
		positionMaster = $("#" + scroller + " " + itemType + ":first-of-type");
		scrollPosition = parseInt(positionMaster.css("margin-left"));
		scrollDistance = parseInt(positionMaster.css("margin-right")) + parseInt(positionMaster.width());
		collectionCount = parseInt($("#" + scroller + " " + itemType).length);
		collectionWidth = collectionCount * scrollDistance;
		containerWidth = $("#" + scroller).width();
		viewportHolds = Math.floor(containerWidth / scrollDistance);
		offLeftItems = 0 - (scrollPosition / scrollDistance);
		offRightItems = collectionCount - offLeftItems - viewportHolds;
		
		navElements = "<div data-for='carousel-" + (index + 1) + "' class='thumb-nav right-side'></div>";
		navElements += "<div data-for='carousel-" + (index + 1) + "' class='thumb-nav left-side'></div>";
		
		if ($("#" + scroller).hasClass("inactive")) { // first time?
		
			$("#" + scroller).addClass("beginning").removeClass("inactive").append(navElements);
		
		};
				
		if ((offLeftItems < 1) && (offRightItems < 1)) { // if all existing items are visible
			
			$("#" + scroller).addClass("beginning end");
		
		} else if ((offLeftItems < 1) && (offRightItems > 0)) { // if we're at the beginning and some are hidden off right
			
			$("#" + scroller).addClass("beginning");
			$("#" + scroller).removeClass("end");
			
		} else if ((offLeftItems > 0) && (offRightItems < 1)) { // if we're at the end and some are hidden off left
			
			$("#" + scroller).addClass("end");
			$("#" + scroller).removeClass("beginning");
			
		} else {
		
			$("#" + scroller).removeClass("beginning end");
		
		};
		
	});
	
};

function triggerThumbNav(which) {

	scroller = $(which).attr("data-for");
	positionMaster = $("#" + scroller + " " + itemType + ":first-of-type");
	scrollPosition = parseInt(positionMaster.css("margin-left"));
	scrollDistance = parseInt(positionMaster.css("margin-right")) + parseInt(positionMaster.width());
	collectionCount = parseInt($("#" + scroller + " li").length);
	collectionWidth = collectionCount * scrollDistance;
	containerWidth = $("#" + scroller).width();
	viewportHolds = Math.floor(containerWidth / scrollDistance);
	offLeftItems = 0 - (scrollPosition / scrollDistance);
	offRightItems = collectionCount - offLeftItems - viewportHolds;
	
	if (!positionMaster.data("transitioning")) { // is the carousel not in the midst of a transition?
		
		if ($(which).hasClass("right-side")) {
			
			newPosition = scrollPosition - scrollDistance;
		
			if (offRightItems > 0) {
			
				$("#" + scroller).removeClass("beginning");
				
				if(!Modernizr.csstransitions) {

					positionMaster.animate({marginLeft: newPosition});
					
				} else {
				
					positionMaster.data("transitioning", true).css("margin-left", newPosition);
				
				};
				
				if (offRightItems == 1) {
					
					$("#" + scroller).addClass("end");
					
				};
			
			};
			
		};
		
		if ($(which).hasClass("left-side")) {
	
			newPosition = scrollPosition + scrollDistance;
		
			if (offLeftItems != 0) {
			
				$("#" + scroller).removeClass("end");
				
				if(!Modernizr.csstransitions) {

					positionMaster.animate({marginLeft: newPosition});
					
				} else {
				
					positionMaster.data("transitioning", true).css("margin-left", newPosition);
				
				};
				
				if (offLeftItems == 1) {
					
					$("#" + scroller).addClass("beginning");
					
				};
			
			};
			
		};
	
	};

};

/*! http://mths.be/noselect v1.0.3 by @mathias */
jQuery.fn.noSelect=function(){var a='none';return this.bind('selectstart dragstart mousedown',function(){return false}).css({MozUserSelect:a,msUserSelect:a,webkitUserSelect:a,userSelect:a})};