$(function() {
	$('.top_title, .intro').addClass('animated pulse');
	$('.blog_box').addClass('animated fadeInDown');
	$('.main_title').addClass('animated lightSpeedIn');

	$(window).scroll(function() {
		var winScroll = $(window).scrollTop();
		if( winScroll <= 50 ) {
			$('.top_title, .intro').addClass('animated pulse');
			$('.blog_box').addClass('animated fadeInDown');
			$('.main_title').addClass('animated lightSpeedIn');
		} else {
			$('.top_title, .intro').removeClass('animated pulse');
			$('.blog_box').removeClass('animated fadeInDown');
			$('.main_title').removeClass('animated lightSpeedIn');
		}
	})
})