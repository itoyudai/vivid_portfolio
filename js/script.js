$(function(){
	$('a[href^=#]').click(function(){
		var speed = 1000;
		var href = $(this).attr('href');
		var target = $(href === '#' || href === '' ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	$('#totop a').hover(function(){
		$(' img',this).attr('src','image/totop_after.png');
	},function(){
		$(' img',this).attr('src','image/totop_before.png');
	})
})