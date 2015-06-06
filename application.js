
$(document).ready(function(){

	var showTooltip = function(event) {
	   $('div.tooltip').remove();
	   var nome = $(this).attr("data-name");
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

	$(".cidades").on({
		mousemove : changeTooltipPosition,
		mouseenter : showTooltip,
		mouseleave: hideTooltip
	});

});