$(function(){
	$('li a').on('click',function(){
		$(this).toggleClass('collectpo');
	})
	$('.allsec').on('click',function(){
		$(this).toggleClass('allsec2');
		if($(this).hasClass('allsec2')){
			$('li a').addClass('collectpo');
		}else{
			$('li a').removeClass('collectpo');
		}
	})
	$('.colldel').on('click',function(){
		$('li').each(function(index,item){
			if($(item).find('a').hasClass("collectpo")){
				$(item).remove();
			}
		})
		if($('.allsec').hasClass('allsec2')){
			$('.allsec').removeClass('allsec2');
		}
	})
}())
