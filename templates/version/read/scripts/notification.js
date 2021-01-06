$(".notification-btn").click(function (){
	$(".notifications").css("display","block");
});
	var i=1;

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
// ========== close notification =============

$(".notifications>ul>li>button").click(function() {
	  var myClass = $(this).parent().remove();
});