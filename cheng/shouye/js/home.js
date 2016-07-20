$(function(){
	$('.nav header a:first').on('click',function(){
		$(".nav").hide();
		$(".conn").hide();
		$("#ding").show().find(".dingwei").on('click',function(e){
			var e = e || window.event;
			var target = e.target || e.srcElement;
			$('#home .conn .sw .inn').css({
			'left':function(){
				$index = 0;
				return 0;
			}
		})
			if(target.tagName == "P"){
				$('.nav header a:first').text(target.innerText);
				$(".nav").show();
				$(".conn").show();
				$("#ding").hide();
			}
			
		});
	})
	$("#ding a:first").on('click',function(){
		$('#home .conn .sw .inn').css({
			'left':function(){
				$index = 0;
				return 0;
			}
		})
		$(".nav").show();
		$(".conn").show();
		$("#ding").hide();
	})
})
