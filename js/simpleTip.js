$(document).ready(function() {
	$('.simpletip').hover(function() {
		if ($(this).hasClass("green")) {
			var colord = "green";
		} else if ($(this).hasClass("red")) {
			var colord = "red";
		} else if ($(this).hasClass("yellow")) {
			var colord = "yellow";
		} else if ($(this).hasClass("blue")) {
			var colord = "blue";
		} else if ($(this).hasClass("orange")) {
			var colord = "orange";
		} else if ($(this).hasClass("grey")) {
			var colord = "grey";
		} else if ($(this).hasClass("white")) {
			var colord = "white";
		} else if ($(this).hasClass("black")) {
			var colord = "black";
		} else if ($(this).hasClass("purple")) {
			var colord = "purple";
		} else {
			var colord = "";
		}
		var title = $(this).attr('title');
		$(this).data('stipText', title).removeAttr('title');
		//Change the fade in time (default = 300ms)
		//Convert the 'title' attribute into HTML (this allows for styling of the tooltip text)
		$('<div class="simpletip_box"></div>').addClass(colord).html(title).appendTo('body').fadeIn(300);
	}, function() {
		$(this).attr('title', $(this).data('stipText'));
		//Change the fadeout time (default = 10ms)
		$('.simpletip_box').fadeOut(10, function() {
			$('.simpletip_box').remove();
		});
		//Lets the tool tip follow the mouse position
	}).mousemove(function(e) {
		var mousex = e.pageX + -28;
		var mousey = e.pageY + 30;
		$('.simpletip_box').css({
			top : mousey,
			left : mousex
		})
	});

});
