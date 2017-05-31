$(function(){
	var width = $(".banner .width img").width();
	var size = $(".banner .width img").length;
	var n = 0;
	var timer;
	$(".banner .width").width(width*size+"px");
	$(".banner").swipeLeft(function(){
		clearInterval(timer);
		timer=undefined;
		n++;
		if(n>4){
			$(".banner .width").css("left","0").animate({left:"-"+width+"px"},1000);
			n=1;
		}else{
			$(".banner .width").animate({left:"-"+width*n+"px"},1000);
		}
		play();
	})
	$(".banner").swipeRight(function(){
		clearInterval(timer);
		timer=undefined;
		n--;
		if(n<0){
			$(".banner .width").css("left","-"+width*4+"px").animate({left:"-"+width*3+"px"},1000);
			n=3;
		}else{
			$(".banner .width").animate({left:"-"+width*n+"px"},1000);
		}
		play();
	})
	function play(){
		timer = setInterval(function(){
			$(".banner").trigger("swipeLeft");
		},3000);
	}
	play();
})