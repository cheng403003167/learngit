$(function(){
	$('.castlist').height($('body').height()-40);
	$('.textapp span a').on('click',function(){
		$('.textapp span a').css({
				backgroundPositionX: 'left'
		})
		for(var $i = 0;$i<=$(this).index();$i++){
			$('.textapp span a').eq($i).css({
				backgroundPositionX: 'right'
			})
		}
	})
	$('.appup').on('click',function(){
		if($('textarea').val()){
			var $li = $("<li/>");
			$li.html($('textarea').val());
			$('textarea').val('');
			$('textarea').hide();
			$('.textapp span a').off('click');
			$('.ul2').append($li);
			$(this).hide();
		}
	})
}())
