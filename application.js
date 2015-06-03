
$(document).ready(function(){

	var showTooltip = function(event) {
	   $('div.tooltip').remove();
	   var nome = $(this).attr("id");
	   $('<div class="tooltip">'+nome+'</div>')
	     .appendTo('body');
	   changeTooltipPosition(event);
	};


	var changeTooltipPosition = function(event) {
		var tooltipX = event.pageX - 8;
		var tooltipY = event.pageY + 8;
		$('div.tooltip').css({top: tooltipY, left: tooltipX});
	};


	var hideTooltip = function() {
		$('div.tooltip').remove();
	};

	$(".mesorregioes").bind({
		mousemove : changeTooltipPosition,
		mouseenter : showTooltip,
		mouseleave: hideTooltip
	});

});