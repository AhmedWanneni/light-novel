$(".close-focus").click(function(){
	$('#focus-screen').css("display","none");
});
var i=0;
$("#a-plus-focus").click(function() {
	
var size = $("#focus-screen>.content>p").css('font-size');
			size =parseInt(size);
			
			i++;
			i = size + i;
			
	$("#focus-screen>.content>p").css("font-size",i+"px");
	i=0;
});
$("#a-moins-focus").click(function (){
	var size = $("#focus-screen>.content>p").css('font-size');
			size =parseInt(size);
			
			i--;
			i = size + i;
			
	$("#focus-screen>.content>p").css("font-size",i+"px");
	i=0;
});
// ============ setting focus ===================
$(".setting-focus-btn").click(function(){
	$(".setting-focus").css("display","block");
});
// ============== report focus ====================
$(".report-focus-btn").click(function(){
	$(".report-focus").css("display","block");
});

// ================ change fonts from settings ==========================



$(".setting-focus>table>tbody>tr>td>#content-width").click(function() {
	var content_width = $(".setting-focus>table>tbody>tr>td>#content-width").val();
	$(".content>p").css("width",content_width+"rem");
	$(".setting-focus>table>tbody>tr:nth-child(1)>td>span").html(content_width);
});

$(".setting-focus>table>tbody>tr>td>#content-size").click(function() {
	var content_size = $(".settings>table>tbody>tr>td>#content-size").val();
	$(".content>p").css("font-size",content_size-5+"px");
	$(".setting-focus>table>tbody>tr:nth-child(2)>td>span").html(content_size);
});

$(".setting-focus>table>tbody>tr>td>#content-line-space").click(function() {
	var content_line_space = $(".setting-focus>table>tbody>tr>td>#content-line-space").val();
	$(".content>p").css("line-height",content_line_space*1.2 +"px");
	$(".setting-focus>table>tbody>tr:nth-child(3)>td>span").html(content_line_space);
});

$(".setting-focus>div>#content-family").click(function() {
	var content_family = $(".setting-focus>div>#content-family").val();
	$(".content>p").css("font-family",content_family);
});

$(".setting-focus>table>tbody>tr>td>#content-letter-spacing").click(function() {
	var content_letter_spacing = $(".setting-focus>table>tbody>tr>td>#content-letter-spacing").val();
	$(".content>p").css("letter-spacing",content_letter_spacing/10+"px");
	$(".settings>table>tbody>tr:nth-child(4)>td>span").html(content_letter_spacing);
});
$(".setting-focus>div>button:nth-child(2)").click(function(){
	$(".content>p").css("width","46rem");
	$(".content>p").css("font-size","16px");
	$(".content>p").css("line-height","2rem");
	$(".content>p").css("font-family","'Poppins', sans-serif");
	$(".content>p").css("letter-spacing","0px");
});
$(".setting-focus>div>button:nth-child(1)").click(function(){
	$(".setting-focus").css("display","none");
});
