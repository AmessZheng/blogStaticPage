$(function() {
	var winHeight = $(window).height();
	var headerHeight = $('header').height();
	var content01Top = $('.content_01').offset().top;
	var content01Height = $('.content_01').height();
	var content02Top = $('.content_02').offset().top;
	var content02Height = $('.content_02').height();
	var content03Top = $('.content_03').offset().top;
	var content03Height = $('.content_03').height();

	var content01Limit = content01Top - winHeight + content01Height - 50;
	var content02Limit = content02Top - winHeight + content02Height - 50;
	var content03Limit = content03Top - winHeight + content03Height - 50;
	if( $(window).scrollTop() <= winHeight ) {
		// 页面加载完成后header的动态效果
		$('.top_title, .intro').addClass('animated pulse');
		$('.blog_box').addClass('animated fadeInDown');
		$('.main_title').addClass('animated lightSpeedIn');
	}

	// 页面滚动事件
	$(window).scroll(function() {
		var winScroll = $(window).scrollTop();
		if( winScroll <= headerHeight ) {	//	刷新页面定位不在顶部情况下，滚动至顶部后header的动态效果
			$('.top_title, .intro').addClass('animated pulse');
			$('.blog_box').addClass('animated fadeInDown');
			$('.main_title').addClass('animated lightSpeedIn');
		} else if( winScroll >= content03Limit ) {	//	content第三部分动态效果
			$('.floor_03 .floor_date').addClass('animated rotateIn');
			$('.floor_03 .floor_title').addClass('animated rubberBand');
			$('.floor_03 .floor_plus').addClass('animated flip');
			$('.content_03 img').addClass('animated zoomIn');
		} else if( winScroll >= content02Limit ) {	//	content第二部分动态效果
			$('.floor_02 .floor_date').addClass('animated rotateIn');
			$('.floor_02 .floor_title').addClass('animated rubberBand');
			$('.floor_02 .floor_plus').addClass('animated flip');
			$('.content_02 img').addClass('animated zoomIn');
		} else if( winScroll >= content01Limit ) {	//	content第一部分动态效果
			$('.floor_01 .floor_date').addClass('animated rotateIn');
			$('.floor_01 .floor_title').addClass('animated rubberBand');
			$('.floor_01 .floor_plus').addClass('animated flip');
			$('.content_01 img').addClass('animated zoomIn');
		}
	})
})