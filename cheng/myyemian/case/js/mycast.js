$(function(){
	$('#mycast .sel li').on('click',function(){
		$(this).addClass("show1").siblings().removeClass("show1");
		switch($(this).index()){
			case 0:
			$('.playbefore').show().siblings().hide();
			break;
			case 1:
			$('.state').show().siblings().hide();
			break;
			case 2:
			$('.stay').show().siblings().hide();
			break;
			case 3:
			$('.completed').show().siblings().hide();
			break;
			case 4:
			$('.playafters').show().siblings().hide();
			break;
		}
		$('.sel').show();
		$(".nav").show();
	})
	$('.gongcel').on('click',function(){
		$(this).parents("li").remove();
	})
}())
