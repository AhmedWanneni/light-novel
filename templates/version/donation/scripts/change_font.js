// ================= change font size  =========================
var i=0;
$("#a-plus").click(function (){

			var size = $(".novel-content").css('font-size');
			size =parseInt(size);
			
			i++;
			i = size + i;
			
	$(".novel-content").css("font-size",i+"px");
	i=0;
});
		
		$("#a-moins").click(function (){
			var size = $(".novel-content").css('font-size');
			size =parseInt(size);
			
			i--;
			i = size + i;
			
	$(".novel-content").css("font-size",i+"px");
	i=0;
});
		
		$("#a-normal").click(function(){
			$(".novel-content").css("font-size","16px");
			i=0;
		});

// ===================== change line height ===========================
var j = 0;
$("#line-space").click(function(){

	

var line_space = $('.novel-content').css('line-height');
	line_space =parseInt(line_space);

	j++;
	j = line_space + j;
	$(".novel-content").css("line-height",j+"px");
j=0;
}); 
// ===================== dark mode =======================================
var v1 = 0; // verrou
$("#dark_mode").click(function(){
	
	if(v1==0){
		v1 = 1;
		
	$('.update').css("background-color","#19171c");
	$('.update >.col-md-12 >.top-bar-update >.update-box-title >p').css("font-family","sans-serif");
	$('.novel-content').css("color","#e6e6e6");
	$('.top-pn').css("background-color","#6441a4");
	$('.top-pn').css("border-color","#7d5bbe");
	$('.update >.col-md-12 >.top-bar-update >.update-box-title >p').css("border-bottom-color","#d4d1d138");
	$('.content-option').css("background-color","#6441a4");
	$('.content-option').css("border-color","#7d5bbe");
	$('.time_pub').css("color","rgba(230, 230, 230, 0.51)");
	$('.update-box-title>p>span:nth-child(2)').css("color","#ffffff8f");
	$('.info_ln_pn button').css("background-color","rgb(100, 65, 164)");
	$('.info_ln_pn button').css("border-color","rgb(125, 91, 190)");
	    
	
	$('.time_pub>svg').css("fill","rgba(230, 230, 230, 0.51)");
	$('.ln-content>h6').css("color","#e6e6e6");
	$('.ln-content>h3').css("color","#e6e6e6");

}
	else{
		v1 = 0;
		$('.update').css("background-color","white");
	$('.update >.col-md-12 >.top-bar-update >.update-box-title >p').css("font-family","sans-serif");
	$('.novel-content').css("color","#545454");
	$('.top-pn').css("background-color","#765e9c");
	$('.top-pn').css("border-color","#765e9c");
	$('.update >.col-md-12 >.top-bar-update >.update-box-title >p').css("border-bottom-color","#d4d1d1");
	$('.content-option').css("background-color","#765e9c");
	$('.content-option').css("border-color","#765e9c");
	$('.time_pub').css("color","#545454");
	$('.update-box-title>p>span:nth-child(2)').css("color","#212529");
	$('.info_ln_pn button').css("background-color","rgb(100, 65, 164)");
	$('.info_ln_pn button').css("border-color","rgb(125, 91, 190)");
	    
	
	$('.time_pub>svg').css("fill","#545454");
	$('.ln-content>h6').css("color","#545454");
	$('.ln-content>h3').css("color","#545454");
	}
	
});
// ===================== focus screen =====================================
$("#focus-screen-btn").click(function(){
	$('#focus-screen').css("display","block");
	
});
$("#close-focus-screen").click(function(){
	$('#focus-screen').css("display","none");
});
// ============= setting focus mode ======================

$(".setting-focus>table>tbody>tr>td>#content-width_f").click(function() {
	var content_width = $(".setting-focus>table>tbody>tr>td>#content-width").val();
	$(".novel-content").css("width",content_width-54+"rem");
	$(".setting-focus>table>tbody>tr:nth-child(1)>td>span").html(content_width);
});

$(".setting-focus>table>tbody>tr>td>#content-size").click(function() {
	var content_size = $(".settings>table>tbody>tr>td>#content-size").val();
	$(".novel-content").css("font-size",content_size-5+"px");
	$(".setting-focus>table>tbody>tr:nth-child(2)>td>span").html(content_size);
});

$(".setting-focus>table>tbody>tr>td>#content-line-space").click(function() {
	var content_line_space = $(".setting-focus>table>tbody>tr>td>#content-line-space").val();
	$(".novel-content").css("line-height",content_line_space*1.2 +"px");
	$(".setting-focus>table>tbody>tr:nth-child(3)>td>span").html(content_line_space);
});

$(".setting-focus>div>#content-family").click(function() {
	var content_family = $(".setting-focus>div>#content-family").val();
	$(".novel-content").css("font-family",content_family);
});

$(".setting-focus>table>tbody>tr>td>#content-letter-spacing").click(function() {
	var content_letter_spacing = $("setting-focus>table>tbody>tr>td>#content-letter-spacing").val();
	$(".novel-content").css("letter-spacing",content_letter_spacing/10+"px");
	$(".settings>table>tbody>tr:nth-child(4)>td>span").html(content_letter_spacing);
});
$(".setting-focus>div>button:nth-child(2)").click(function(){
	$(".novel-content").css("width","46rem");
	$(".novel-content").css("font-size","16px");
	$(".novel-content").css("line-height","2rem");
	$(".novel-content").css("font-family","'Poppins', sans-serif");
	$(".novel-content").css("letter-spacing","0px");
});
$(".setting-focus>div>button:nth-child(1)").click(function(){
	$(".setting-focus").css("display","none");
});
// ================ change fonts from settings ==========================
$(".settings>table>tbody>tr>td>#content-width").click(function() {
	var content_width = $(".settings>table>tbody>tr>td>#content-width").val();
	$(".novel-content").css("width",content_width-54+"rem");
	$(".settings>table>tbody>tr:nth-child(1)>td>span").html(content_width);
});

$(".settings>table>tbody>tr>td>#content-size").click(function() {
	var content_size = $(".settings>table>tbody>tr>td>#content-size").val();
	$(".novel-content").css("font-size",content_size-5+"px");
	$(".settings>table>tbody>tr:nth-child(2)>td>span").html(content_size);
});

$(".settings>table>tbody>tr>td>#content-line-space").click(function() {
	var content_line_space = $(".settings>table>tbody>tr>td>#content-line-space").val();
	$(".novel-content").css("line-height",content_line_space*1.2 +"px");
	$(".settings>table>tbody>tr:nth-child(3)>td>span").html(content_line_space);
});

$(".settings>div>#content-family").click(function() {
	var content_family = $(".settings>div>#content-family").val();
	$(".novel-content").css("font-family",content_family);
});

$(".settings>table>tbody>tr>td>#content-letter-spacing").click(function() {
	var content_letter_spacing = $(".settings>table>tbody>tr>td>#content-letter-spacing").val();
	$(".novel-content").css("letter-spacing",content_letter_spacing/10+"px");
	$(".settings>table>tbody>tr:nth-child(4)>td>span").html(content_letter_spacing);
});
$(".settings>div>button:nth-child(2)").click(function(){
	$(".novel-content").css("width","46rem");
	$(".novel-content").css("font-size","16px");
	$(".novel-content").css("line-height","2rem");
	$(".novel-content").css("font-family","'Poppins', sans-serif");
	$(".novel-content").css("letter-spacing","0px");
});
$(".settings>div>button:nth-child(1)").click(function(){
	$(".settings").css("display","none");
});