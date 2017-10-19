$(function(){

	var totop_image = [
		totopAfter = 'image/totop_after.png',
		totopBefore = 'image/totop_before.png'
	];

	$('a[href ^= "#"]').click(function(){
		var SCROLL_SPEED = 1000;
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, SCROLL_SPEED, 'swing');
		return false;
	});
	$('#totop a').hover(function(){
		$('img',this).attr('src',totopAfter);
	},function(){
		$('img',this).attr('src',totopBefore);
	});

});