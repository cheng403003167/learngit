$(function(){
	$("#denglu a").eq(1).on('click',function(){
		$('#denglu').hide();
		$('#zhuce').show().find(".nav p span").text("注册");
		$('#zhuce .conn .ce').text("注册");
	})
	$('#denglu .conn .nopass a').on('click',function(){
		$('#denglu').hide();
		$('#zhuce').show().find(".nav p span").text("忘记密码");
		$('#zhuce .conn .ce').text("确认");
	})
	$("#zhuce a").eq(0).on('click',function(){
		$('#denglu').show();
		$('#zhuce').hide();
	})
})