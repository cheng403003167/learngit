$(function(){
	var $height = $('html,body').height(),$t = 1;
	$(".seo").height($height-100);
	$(".seocon").on('click',function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.tagName=="A"){
			$(".seoFrame input").val(target.innerText);
		}
	})
	$(window).keydown(function(e){
		if(e.keyCode==13){
			if($(".seoFrame input").val()=="山核桃"){
				$('#seohome .seo .seocon').hide();
				$(".seoreault").show();
				$("#seohome .seo .liu").hide();
			}else{
				$('#seohome .seo .seocon').hide();
				$("#seohome .seo .liu").show();
				$(".seoreault").hide();
			}
			$t = 0;	
		}
	})
	$("#seohome .seo .liu a").on('click',function(){
		$(".seoFrame input").val('');
		$('#seohome .nodate').show();
		$t = 0;
	})
	$('#seohome .nodate .cancel').on('click',function(){
		$('#seohome .nodate').hide();
		$("#seohome .seo .liu").hide();
		$('#seohome .seo .seocon').show();
		$t = 1;
	})
	$("#seohome .nav .zhuan").on('click',function(){
		if($t == 0){
			$(".seoFrame input").val('');
			$('#seohome .seo .seocon').show();
			$("#seohome .nav .zhuan").attr("href","javascript:void(0)");
			$t = 1;
		}
		else if($t == 1){
			$(".seoFrame input").val('');
			$("#seohome .nav .zhuan").attr("href","home.html");
		}
		
	})
}())
