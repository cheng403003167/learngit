$(function(){
	$('.clickupimg').on('click',function(){
		$('#file').click();
	})
	$('#file').get(0).onchange = function(){
		if($('.saveimg img').length<3){
			var fileMeg = this.files;
			for(var $i = 0;$i<fileMeg.length;$i++){
				var $reader = new FileReader();
				$reader.readAsDataURL(fileMeg[$i]);
				$reader.onload = function(){
					var $img = new Image();
					$img.src = $reader.result;
					$('.saveimg').append($img);
				}
			}
		}	
	}
	var $wi = $('body').width();
	$('.consel .title a').on('click',function(){
		$('.back').hide();
	})
	$('.tuihuo').on('click',function(){
		$('.back').show();
	})
	$('.downying').on('click',function(){
		$('.tiao').show();
	})
	$('.tiao').on('click',function(e){
		$('.backwhy').html(e.target.innerHTML);
		$('.tiao').hide();
	})
	$('.back .consel').css({
		fontSize: $wi*0.4+'%'
	}).find(".p3").css({
		fontSize: $wi*0.2+'%'
	})
	$('.back .consel .label .p4').css({
		fontSize: $wi*0.03+'%'
	})
}())
