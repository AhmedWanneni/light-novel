$(".profile-settings>.profile-settings-list>li:nth-child(2)").click(function (){

$(".profile-settings-list").css("display","none");

$(".languages").css("opacity","1");
$(".languages").css("right","0rem");
});

$(".languages>li").click(function (){
	$(".profile-settings-list").css("display","block");

$(".languages").css("opacity","0");
$(".languages").css("right","-18rem");
});

$(".languages>li:nth-child(1)").click(function (){
	console.log(1);
	
});