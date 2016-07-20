$(function(){
	var $helfwei = $('body').width()/2;
	$('#main .bottom .detass .select').on('click',function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		$('#main .bottom .detass .swip p').css({
				"transition":"left 0.5s"
		})
		if(target.innerText=="用户评价"){
			$('#main .bottom .detass .swip p').offset({left:$helfwei});
			$('#main .bottom .conn1').hide();
			$('#main .bottom .conn2').show();
		}else{
			$('#main .bottom .detass .swip p').offset({left:0});
			$('#main .bottom .conn1').show();
			$('#main .bottom .conn2').hide();
		}
	})
	$('#main .member').on('click',function(e){
		if(e.target.className=="member"){
			$(this).hide();
		}
	})
	$('#main .top .nav a:last').on('click',function(){
		$('#main .share').show();
	})
	$('#main .share .shareCancel').on('click',function(){
		$('#main .share').hide();
	})
	
	//household_detail2的js
	$('#main .deal a').on('click',function(){
		$(this).removeClass('bgcol2').addClass('bgcol1').siblings('a').removeClass('bgcol1').addClass('bgcol2');
	})
	$('#main .num a').on('click',function(){
		if($(this).index()=='1'){
			if($('#main .num span').text()<=1){
				$('#main .num span').text(1)
			}else{
				$('#main .num span').text(parseInt($('#main .num span').text())-1);
			}
		}else if($(this).index()=='3'){
			$('#main .num span').text(parseInt($('#main .num span').text())+1);
		}
	})
}())
