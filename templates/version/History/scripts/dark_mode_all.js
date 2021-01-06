var v_dark_mode_all = 0; // verrou dark mode 
$("#dark_mode_all").click(function(){
	if(v_dark_mode_all==0){
	$("#dark_mode_all_button").css("margin-left","1.8rem");
	$("#check_dark_mode>svg").css("display","block");
	$("#dark_mode_all").css("background-color","#29b784");
	
	v_dark_mode_all=1;
	
}
else{
	$("#dark_mode_all_button").css("margin-left",".2rem");
	$("#check_dark_mode>svg").css("display","none");
	$("#dark_mode_all").css("background-color","#563d7c");
	v_dark_mode_all=0;
}
});

$("#x2").click(function (){
	$("head").append('<link rel="stylesheet" href="styles/dark_mode.css" type="text/css">');
});