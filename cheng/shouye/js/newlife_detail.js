$(function(){
	var $newheight = $('body').height()-40-$('.sw').height() ,$topzhi = 16.6;
	var $aheight = $('#main .newlife_detailcon a').eq(0).innerHeight();
	console.log($aheight)
	$('#main .newlife_detailcon').height($newheight);
	$('#main .newlife_detailcon .infor span').innerHeight($aheight);
	$('#main .newlife_detailcon .infor a').on('click',function(e){
		var e = e || window.event;
		$(this).addClass('bag').siblings().removeClass('bag');
		$(this).parent().find('span').animate({
			top:$(this).index()*$topzhi+'%'
		})
	})
}())
