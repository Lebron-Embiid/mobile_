$(function(){
	var width = $(".banner .slide li").width()*4+132;
	var size = $(".banner .btn li").length;
	$(".banner .slide").width(width*size+"px");
	var a=0;
	var dragX=0;
	var n=0;
	touch.on("#banner","drag",function(ev){
		dragX=a+ev.x+"px";
		if(parseFloat(dragX) > 0){
			dragX=-.1;
		}
		if(0 > parseFloat(dragX) && parseFloat(dragX) > -724){
			$(".banner .btn li").eq(0).addClass("active").siblings().removeClass("active");
		}
		else if(-724 > parseFloat(dragX) && parseFloat(dragX) > -1448){
			$(".banner .btn li").eq(1).addClass("active").siblings().removeClass("active");
		}
		else if(-1448 > parseFloat(dragX) && parseFloat(dragX) > -2172){
			$(".banner .btn li").eq(2).addClass("active").siblings().removeClass("active");
		}
		else{
			$(".banner .btn li").eq(3).addClass("active").siblings().removeClass("active");
		}
		if(parseFloat(dragX) < -2170){
			dragX="-2170px";
		}
		$("#banner").css({"left":dragX});
		console.log(dragX)
	})
	touch.on("#banner","dragend",function(){
		a=parseFloat(dragX);
	})
})