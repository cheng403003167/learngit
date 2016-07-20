$(function(){
	var $imgWidth = $('.sw .inn a').eq(0).find("img").width();
	$('.sw .inn a:first').clone(true,true).appendTo(".sw .inn"),clickBool = true;
	var $rng = 0,$t = 0,$index = 0,$imglist = $('.sw .inn a').length,sws = 0;
	function move(){
		$t-=1;
		$rng = window.requestAnimationFrame(move);
		jie();
		if($t<=-120){
			window.cancelAnimationFrame($rng);
			$index++;
			$t = 0;
			index();
			bang();
		}
		$('.sw .inn').offset({left:-$index*$imgWidth+$t*$imgWidth/120})
	}
	function index(){
		if($index>=$imglist-1){
			$index = 0;
			$('.sw .inn').offset({left:-$imgWidth});
		}
	}
	function bgcol(){
		for(var $i = 0;$i<$imglist-1;$i++){
			$('.sw .dot span').eq($i).removeClass().addClass("backcol1");
			$('.sw .dot span').eq($index+1).addClass("backcol2");
			if($index==4){
				$('.sw .dot span').eq(0).addClass("backcol2");	
			}
		}
	}
	function bgcol2(){
		for(var $i = 0;$i<$imglist-1;$i++){
			$('.sw .dot span').eq($i).removeClass().addClass("backcol1");
			$('.sw .dot span').eq($index).addClass("backcol2");
			if($index==5){
				$('.sw .dot span').eq(0).addClass("backcol2");	
			}
		}
	}
	swdong();
	function swdong(){
		clearInterval(sws);
		sws = setInterval(function(){
			index();
			window.cancelAnimationFrame($rng);
			move();
			bgcol();
		},5000)
	}
	var $nleft = 0,$oleft =0;
	var $nx = 0,$ox =0,bo = true,$ex = 0;	
	function start(e){
		clearInterval(sws);
		$ox = e.touches[0].clientX;
		$oleft = $('.sw .inn').offset().left;
		$('.sw .inn').css({
			"transition":""
		})
		$('.sw .inn').on("webkitTransitionEnd", function() {
				$('.sw .inn').css({
					"transition":""
				})
			})
		e.preventDefault();
	}
	function moves(e){
		$nx = e.changedTouches[0].clientX;
		if($index<=0&&($nx-$ox)>0){
			$index = 5;
			$('.sw .inn').offset({left:($nx-$ox)-$imgWidth*5});
			$oleft = -$imgWidth*5;
		}else if($index>=5&&($nx-$ox)<0){
			$index = 0;
			$('.sw .inn').offset({left:0});
			$oleft = 0;
		}else{
			$('.sw .inn').offset({left:$oleft+($nx-$ox)});
		}
	}
	console.log($imgWidth);
	function ends(e){
		$ex = e.changedTouches[0].clientX;
		if(($ex-$ox)<0){
				if(-($ex-$ox)<($imgWidth/3)){
					$('.sw .inn').offset({left:$oleft});
					swdong();
				}else{
					$('.sw .inn').offset({left:$oleft-$imgWidth});
					bgcol();
					$index++;
					swdong();
				}
		}else if(($ex-$ox)>=0){
			if(($ex-$ox)<($imgWidth/3)){
				$('.sw .inn').offset({left:$oleft});
				swdong();
			}else{
				$('.sw .inn').offset({left:$oleft+$imgWidth});
				$index--;
				bgcol2();
				swdong();
			}
		}
		if($index<5&&$index>0){
			$('.sw .inn').css({
				"transition":"left 0.5s"
			})
		}else if($index>=5){
			$('.sw .inn').css({
				"transition":"left 0.5s"
			})
			clearTimeout(tr);
			var tr = setTimeout(function(){
				$('.sw .inn').css({
					"transition":"",
					'left':function(){
						$index = 0;
						return 0;
					}
				})
			},500)
		}else if($index<=0){
			$('.sw .inn').css({
				"transition":"left 0.5s"
			})
			clearTimeout(tr);
			var tr = setTimeout(function(){
				$('.sw .inn').css({
					"transition":"",
					'left':function(){
						$index = 5;
						return -$imgWidth*5;
					}
				})
			},500)
		}
		jie();
		clearInterval(bangs);
		var bangs = setInterval(function(){
			if($('.sw .inn').offset().left%$imgWidth==0){
				bang();
				clearInterval(bangs);
			}
		},0.5)
	}
	bang();
	function bang(){
		$('.sw').get(0).addEventListener('touchstart',start,false);
		$('.sw').get(0).addEventListener('touchmove',moves,false);
		$('.sw').get(0).addEventListener('touchend',ends,false);
	}
	function jie(){
		$('.sw').get(0).removeEventListener('touchstart',start,false);
		$('.sw').get(0).removeEventListener('touchmove',moves,false);
		$('.sw').get(0).removeEventListener('touchend',ends,false);
	}
	$('footer .inn a').on('click',function(){
		$(this).removeClass().addClass("textcol2").siblings("a").removeClass().addClass("textcol1");
	})
}())
