$(function(){
	$('.toUp a').on('click',function(){
		$(this).find('span').css({
			backgroundPositionX:"left"
		}).parents('a').siblings().find('span').css({
			backgroundPositionX:"right"
		})
	})
}())
