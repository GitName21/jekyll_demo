 $(document).ready(function(){
	$(".pic ul li").each(function(i){//遍历
		var deg=360/$(".pic ul li").size();//size个数
		//当前的li对象 添加css样式
		$(this).css({"transform":"rotateY("+deg*i+"deg) translateZ(216px)"});
		
		$.fn.snow({
			minSize:10,
			maxSize:15,
			newOn:500,
			flakeColor:"#ffffff"
		});
	});
	
	var i=0;
//	var str="元旦节快乐";
	
	window.onload=function typing(){
		//获取div
		var mydiv=document.getElementById("text");
		mydiv.innerHTML+=str.charAt(i);
		i++;
		var id=setTimeout(typing,100);
		if(i==str.length){
			clearTimeout(id);
		};
	};
	
		 $(document).ready(function(){
				//卷轴展开动画效果
				$(".l-pic-index").animate({'left':'0','top':'-4px'},8300);
				$(".r-pic-index").animate({'right':'-0','top':'-5px'},8450);
				$(".l-bg-index").animate({'width':'470px','left':'-23px'},9500);
				$(".r-bg-index").animate({'width':'470px','right':'-15px'},9300,function(){
					$(".main-index").fadeIn(800);
				});
			});	
});