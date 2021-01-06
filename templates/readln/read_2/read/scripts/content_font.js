// ================= change content font =========================
$("#a-plus").click(function (){i=0;

			var size = $(".ln-content").css('font-size');
			size =parseInt(size);
			
			i++;
			i = size + i;
			
	$(".ln-content").css("font-size",i+"px");
	i=0;
});
		
		$("#a-moins").click(function (){
			var size = $(".ln-content").css('font-size');
			size =parseInt(size);
			
			i--;
			i = size + i;
			
	$(".ln-content").css("font-size",i+"px");
	i=0;
});
		
		$("#a-normal").click(function(){
			$(".ln-content").css("font-size","16px");
			i=0;
		});