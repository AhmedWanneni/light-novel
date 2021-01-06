$(".notification-btn").click(function (){
	$(".notifications").css("display","block");
});
	var i=1;
$(".notifications>ul>li:nth-child("+i+")>button:nth-child(4)").click(function() {
	$(".notifications>ul>li:nth-child("+i+")").css("display","none");
i=i+1;
alert(i);
});
var see_more_notifications_v = 0; // verrou notification
$(".see-more-notifications").click(function (){
	if(see_more_notifications_v == 0){
	$(".notifications>ul>li:nth-child(n+5)").css("display","block");
	$(this).html(' less &#9650;');
	see_more_notifications_v=1;
}
	else{
		$(".notifications>ul>li:nth-child(n+5)").css("display","none");
		$(this).html('See more &#9660;');
		see_more_notifications_v=0;
	}
});
	