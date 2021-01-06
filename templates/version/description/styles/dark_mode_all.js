var v_dark_mode_all = 0; // verrou dark mode 
$("#dark_mode_all").click(function(){
	if(v_dark_mode_all==0){
	$("#dark_mode_all:after").css("margin-left","1.8rem");
	v_dark_mode_all=1;
	alert("hi");
}
else{
	$("#dark_mode_all:after").css("margin-left",".1rem");
	v_dark_mode_all=0;
}
});